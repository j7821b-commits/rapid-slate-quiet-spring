import { create } from "zustand";
import { toast } from "sonner";
import { prefersReducedMotion } from "@/lib/utils";
import { HOUSEHOLDS, LIAISON, NODE } from "./catalog";
import type {
  AnalogTask,
  LiaisonStatus,
  LogEntry,
  LogKind,
  SwarmPhase,
  UnitId,
  UnitRuntime,
} from "./types";

const defaultRuntime = (): Record<UnitId, UnitRuntime> => ({
  A: { phase: "idle", resolved: false },
  B: { phase: "idle", resolved: false },
  C: { phase: "idle", resolved: false, wellnessDone: false },
  D: { phase: "idle", resolved: true, wellnessDone: false },
});

const bootLogs = (): LogEntry[] => [
  {
    id: "boot",
    at: 0,
    kind: "info",
    message:
      "ALMA 07 initialized. One ledger, 311 duplexes. Two open cases on Perez Ave.",
  },
  {
    id: "boot-2",
    at: 0,
    kind: "human",
    message: `${LIAISON.name} on duty at ${LIAISON.station}. She makes time to go see people. She does not ask for cash at the door.`,
  },
];

let timers: ReturnType<typeof setTimeout>[] = [];
let seq = 0;

function later(fn: () => void, ms: number) {
  if (typeof window === "undefined") return;
  const wait = prefersReducedMotion() ? Math.min(ms, 40) : ms;
  const id = setTimeout(fn, wait);
  timers.push(id);
}

function clearTimers() {
  for (const id of timers) clearTimeout(id);
  timers = [];
}

function nextId() {
  seq += 1;
  return `log-${seq}-${Date.now()}`;
}

interface SwarmState {
  units: Record<UnitId, UnitRuntime>;
  selected: UnitId;
  logs: LogEntry[];
  liaisonStatus: LiaisonStatus;
  routeProgress: number;
  tasks: AnalogTask[];
  fund: number;
  busPasses: number;
  fieldNote: string;
  packetOpen: UnitId | null;
  deadlineA: number;
  hydrated: boolean;
  hydrate: () => void;
  deploySwarm: (id: UnitId) => void;
  printPacket: (id: UnitId) => void;
  dispatchLiaison: (id: UnitId) => void;
  collectAnalog: (id: UnitId) => void;
  wellnessCheck: (id: UnitId) => void;
  attemptLocked: (label: string, reason: string) => void;
  setFieldNote: (note: string) => void;
  submitFieldNote: () => void;
  selectUnit: (id: UnitId) => void;
  openPacket: (id: UnitId | null) => void;
  reset: () => void;
}

function pushLog(
  set: (fn: (s: SwarmState) => Partial<SwarmState>) => void,
  message: string,
  kind: LogKind = "info",
  unit?: UnitId,
) {
  const entry: LogEntry = {
    id: nextId(),
    at: Date.now(),
    kind,
    message,
    unit,
  };
  set((s) => ({ logs: [...s.logs, entry].slice(-80) }));
}

function setUnitPhase(
  set: (fn: (s: SwarmState) => Partial<SwarmState> | SwarmState) => void,
  id: UnitId,
  phase: SwarmPhase,
  extra?: Partial<UnitRuntime>,
) {
  set((s) => ({
    units: {
      ...s.units,
      [id]: { ...s.units[id], phase, ...extra },
    },
  }));
}

export const useSwarmStore = create<SwarmState>((set, get) => ({
  units: defaultRuntime(),
  selected: "A",
  logs: bootLogs(),
  liaisonStatus: "standby",
  routeProgress: 0,
  tasks: [],
  fund: NODE.fundStart,
  busPasses: 3,
  fieldNote: "",
  packetOpen: null,
  deadlineA: 0,
  hydrated: false,

  hydrate: () => {
    if (get().hydrated) return;
    const now = Date.now();
    set((s) => ({
      hydrated: true,
      deadlineA: now + 18 * 60 * 60 * 1000,
      logs: s.logs.map((l) => (l.at === 0 ? { ...l, at: now } : l)),
    }));
  },

  selectUnit: (id) => set({ selected: id }),
  openPacket: (id) => set({ packetOpen: id }),
  setFieldNote: (note) => set({ fieldNote: note }),

  deploySwarm: (id) => {
    const unit = HOUSEHOLDS[id];
    const runtime = get().units[id];
    if (!unit.deployable) {
      get().attemptLocked(
        "Open ALMA match",
        "No friction trigger. ALMA will not open a grant path without a notice.",
      );
      return;
    }
    if (runtime.phase !== "idle" || runtime.resolved) return;

    setUnitPhase(set, id, "intercept");
    pushLog(
      set,
      `Notice flagged: ${unit.label} — ${unit.frictionTitle}.`,
      "action",
      id,
    );

    if (id === "A") {
      later(() => {
        setUnitPhase(set, id, "scrape");
        pushLog(
          set,
          "Checking Bexar County 2026 grant portals for family of 5 ($38,680 FPL eligibility).",
          "info",
          id,
        );
      }, 900);
      later(() => {
        setUnitPhase(set, id, "match");
        pushLog(
          set,
          "Match found: City of San Antonio Rental Assistance. Up to $3,500.",
          "success",
          id,
        );
      }, 2200);
      later(() => {
        setUnitPhase(set, id, "autofill");
        pushLog(
          set,
          "Auto-filling digital application from the encrypted PII vault.",
          "action",
          id,
        );
      }, 3400);
      later(() => {
        setUnitPhase(set, id, "analog_ready");
        pushLog(
          set,
          "The city application needs the household’s own signature, sitting with them. Then it goes to the Perez Avenue office — the people who already talk to them about rent.",
          "info",
          id,
        );
        pushLog(
          set,
          `${LIAISON.name} will go see Unit A. Print the packet. Confirm the tenant. Sit with them. Do not ask for money.`,
          "human",
          id,
        );
        set((s) => ({
          tasks: [
            ...s.tasks.filter((t) => t.unitId !== id),
            {
              unitId: id,
              packetKind: "rental",
              title: unit.packetTitle,
              instruction:
                "Print the city packet. Go see the Garcias. Confirm it is them. Sit together. Paper goes back through the office.",
            },
          ],
          liaisonStatus: "preparing",
        }));
      }, 4800);
    } else {
      later(() => {
        setUnitPhase(set, id, "scrape");
        pushLog(
          set,
          "Checking how soon the household can sit with a local ministry.",
          "info",
          id,
        );
      }, 900);
      later(() => {
        setUnitPhase(set, id, "match");
        pushLog(
          set,
          "Cooldown cleared. Christian Assistance Ministry allows utility assist once per 12 months.",
          "success",
          id,
        );
      }, 2200);
      later(() => {
        setUnitPhase(set, id, "autofill");
        pushLog(
          set,
          "Compiling physical intake packet (ID, SSN last-four, disconnect notice).",
          "action",
          id,
        );
      }, 3400);
      later(() => {
        setUnitPhase(set, id, "analog_ready");
        pushLog(
          set,
          "CAM still needs the household in person. A visit first, then the window.",
          "info",
          id,
        );
        pushLog(
          set,
          `${LIAISON.name} will go see Unit B. Sit with them. Explain CAM. The pledge goes to CPS, not through a middleman.`,
          "human",
          id,
        );
        set((s) => ({
          tasks: [
            ...s.tasks.filter((t) => t.unitId !== id),
            {
              unitId: id,
              packetKind: "utility",
              title: unit.packetTitle,
              instruction:
                "Print the CAM packet. Go see the Washingtons. Confirm the tenant. Sit with them. Send them to CAM with one bus pass.",
            },
          ],
          liaisonStatus:
            s.liaisonStatus === "on_site" || s.liaisonStatus === "en_route"
              ? s.liaisonStatus
              : "preparing",
        }));
      }, 4800);
    }
  },

  printPacket: (id) => {
    const runtime = get().units[id];
    const task = get().tasks.find((t) => t.unitId === id);
    if (!task || runtime.phase !== "analog_ready") {
      toast.error("No visit ready", {
        description: "Wait until the city match is on the folder.",
      });
      return;
    }
    setUnitPhase(set, id, "printed");
    set({ packetOpen: id });
    pushLog(
      set,
      `${LIAISON.name} printed the visit packet for ${HOUSEHOLDS[id].family}.`,
      "human",
      id,
    );
    toast.success("Packet printed", {
      description: HOUSEHOLDS[id].packetTitle,
    });
  },

  dispatchLiaison: (id) => {
    const runtime = get().units[id];
    if (runtime.phase !== "printed") {
      get().attemptLocked(
        "Go see them",
        "Print the packet before you go. The visit is the work.",
      );
      return;
    }
    if (get().liaisonStatus === "en_route" || get().liaisonStatus === "on_site") {
      toast.message("Already out", {
        description: "Finish this visit first.",
      });
      return;
    }
    setUnitPhase(set, id, "en_route");
    set({ liaisonStatus: "en_route", routeProgress: 0 });
    pushLog(
      set,
      `${LIAISON.name} left to go see ${HOUSEHOLDS[id].family}.`,
      "human",
      id,
    );

    const ticks = prefersReducedMotion() ? 2 : 8;
    for (let i = 1; i <= ticks; i += 1) {
      later(() => {
        set({ routeProgress: Math.round((i / ticks) * 100) });
        if (i === ticks) {
          setUnitPhase(set, id, "on_site");
          set({ liaisonStatus: "on_site", routeProgress: 100 });
          pushLog(
            set,
            `At the door with ${HOUSEHOLDS[id].family}. Confirm the tenant. Sit with them. Explain the help.`,
            "human",
            id,
          );
        }
      }, i * 380);
    }
  },

  collectAnalog: (id) => {
    const runtime = get().units[id];
    if (runtime.phase !== "on_site") {
      get().attemptLocked(
        "Sit with them first",
        "You have to be at the door, talking to the household on this folder.",
      );
      return;
    }

    setUnitPhase(set, id, "analog_complete");
    if (id === "B") {
      set((s) => ({ busPasses: Math.max(0, s.busPasses - 1) }));
      pushLog(
        set,
        "Sat with the household. Bus pass in their hand. CAM will pledge to CPS — not through anyone else.",
        "human",
        id,
      );
    } else {
      pushLog(
        set,
        "Sat with the household. They signed. Paper goes back through the Perez Avenue office.",
        "human",
        id,
      );
    }

    later(() => {
      set({ liaisonStatus: "returning", routeProgress: 0 });
      pushLog(
        set,
        `${LIAISON.name} is coming back. The office takes it from here.`,
        "info",
        id,
      );
    }, 700);

    later(() => {
      setUnitPhase(set, id, "submitted");
      if (id === "A") {
        pushLog(
          set,
          "Signed paper went to the Perez Avenue office. Eviction clock paused while city rental help is paid to management — not to a hand at the door.",
          "success",
          id,
        );
      } else {
        pushLog(
          set,
          "The Washingtons are on their way to CAM. Lights stay on because CPS is paid by the ministry — not because anyone collected cash on Perez.",
          "success",
          id,
        );
      }
    }, 1800);

    later(() => {
      setUnitPhase(set, id, "stabilized", { resolved: true });
      set((s) => ({
        tasks: s.tasks.filter((t) => t.unitId !== id),
        liaisonStatus: s.tasks.filter((t) => t.unitId !== id).length
          ? "preparing"
          : "standby",
        routeProgress: 0,
      }));
      pushLog(
        set,
        `${HOUSEHOLDS[id].family} is stable. The building is still standing. The visit is done.`,
        "success",
        id,
      );
      toast.success(`${HOUSEHOLDS[id].label} stabilized`);
    }, 2800);
  },

  wellnessCheck: (id) => {
    if (id !== "C" && id !== "D") return;
    if (get().units[id].wellnessDone) return;
    set((s) => ({
      units: {
        ...s.units,
        [id]: { ...s.units[id], wellnessDone: true },
      },
    }));
    pushLog(
      set,
      `${LIAISON.name} checked in with ${HOUSEHOLDS[id].family}. Just a visit. No city folder opened.`,
      "human",
      id,
    );
    toast.message("Wellness logged", {
      description: "Just a visit. ALMA did not open a city folder.",
    });
  },

  attemptLocked: (label, reason) => {
    pushLog(set, `Blocked: ${label}. ${reason}`, "lock");
    toast.error("Not at the door", { description: reason });
  },

  submitFieldNote: () => {
    const note = get().fieldNote.trim();
    if (!note) return;
    const unit = HOUSEHOLDS[get().selected];
    pushLog(
      set,
      `Note from ${LIAISON.name} after sitting with ${unit.family}: “${note}”`,
      "human",
      unit.id,
    );
    set({ fieldNote: "" });
    toast.message("Note filed", {
      description: "A note from the visit. It does not move money.",
    });
  },

  reset: () => {
    clearTimers();
    seq = 0;
    const now = Date.now();
    set({
      units: defaultRuntime(),
      selected: "A",
      logs: bootLogs().map((l) => ({ ...l, at: now })),
      liaisonStatus: "standby",
      routeProgress: 0,
      tasks: [],
      fund: NODE.fundStart,
      busPasses: 3,
      fieldNote: "",
      packetOpen: null,
      deadlineA: now + 18 * 60 * 60 * 1000,
      hydrated: true,
    });
  },
}));

export function phaseIndex(phase: SwarmPhase) {
  const order: SwarmPhase[] = [
    "idle",
    "intercept",
    "scrape",
    "match",
    "autofill",
    "analog_ready",
    "printed",
    "en_route",
    "on_site",
    "analog_complete",
    "submitted",
    "stabilized",
  ];
  return order.indexOf(phase);
}
