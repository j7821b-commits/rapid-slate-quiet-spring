import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as formatUsd, r as prefersReducedMotion, t as cn } from "./utils-Cugoa8uv.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as ArrowDownToLine, a as RotateCcw, b as BookMarked, c as MapPin, d as Info, f as House, g as CircleAlert, h as CircleCheck, l as Lock, m as DoorClosed, n as UserRound, o as Printer, p as Handshake, r as UserRoundCheck, s as NotebookPen, t as X, u as LoaderCircle, x as ArrowUpFromLine, y as Bus } from "../_libs/lucide-react.mjs";
import { a as DialogPortal$1, i as DialogOverlay$1, n as DialogClose, o as DialogTitle$1, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as TooltipTrigger, n as Tooltip, r as TooltipContent } from "./router-Cusl0cq1.mjs";
import { n as hasReadBrief, t as Button } from "./brief-gate-DIBAAljG.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { a as ResponsiveContainer, i as Line, n as YAxis, o as Tooltip$1, r as XAxis, s as Legend, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-_H9lGF9O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NODE = {
	name: "ALMA 07",
	acronym: "ALMA",
	expansion: "Assistance Ledger for Mutual Aid",
	tagline: "City programs. One ledger. Help at the door.",
	trust: "ALMA is not a charity. It finds help San Antonio already funded, holds it on one ledger, and walks the paper to the door.",
	area: "Bexar County · San Antonio, TX",
	cluster: "Eastside Duplex Subset",
	subsetSize: 311,
	address: "118 Perez Ave",
	fundStart: 1250,
	fplFamily5: 38680
};
var LIAISON = {
	name: "Marisol Reyes",
	role: "Analog Liaison",
	title: "Promotora",
	node: "07",
	languages: "Spanish / English",
	shift: "14:00–22:00",
	station: "Eastside lobby"
};
var MONEY_RAIL = [
	{
		id: "in",
		label: "In",
		title: "Where it comes from",
		body: "City and county programs first. Ministry partners next. A neighbor pool only if those fail."
	},
	{
		id: "ledger",
		label: "Ledger",
		title: "How it is held",
		body: "Matched once. Held so nobody at the door has to ask for cash or trust."
	},
	{
		id: "out",
		label: "Out",
		title: "Where it goes",
		body: "Rent and lights, paid to the office or the utility. Never a middleman. Never a hand at the door."
	}
];
var HOUSEHOLDS = {
	A: {
		id: "A",
		address: "118 Perez Ave · Unit A",
		label: "Unit A",
		family: "The Garcia Family",
		members: 5,
		minors: 2,
		income: 2850,
		fplLabel: "Below 2026 FPL",
		rent: 1395,
		utilities: 320,
		risk: "critical",
		frictionTitle: "Notice to Vacate",
		frictionBody: "Three-day notice served two days ago. Landlord files a formal eviction suit when the clock hits zero.",
		deficit: 1450,
		deficitLabel: "Rent + late fees",
		packetTitle: "City of SA Rental Assistance Packet",
		packetKind: "rental",
		deployable: true
	},
	B: {
		id: "B",
		address: "118 Perez Ave · Unit B",
		label: "Unit B",
		family: "The Washingtons",
		members: 5,
		minors: 2,
		income: 3100,
		fplLabel: "At 2026 FPL",
		rent: 1395,
		utilities: 480,
		utilitiesPastDue: true,
		risk: "warning",
		frictionTitle: "CPS Energy disconnect",
		frictionBody: "Disconnect notice in hand. Local ministry help is open again as of yesterday.",
		deficit: 480,
		deficitLabel: "Utilities past due",
		packetTitle: "CAM Utility Assistance Packet",
		packetKind: "utility",
		deployable: true
	},
	C: {
		id: "C",
		address: "120 Perez Ave · Unit A",
		label: "120A",
		family: "The Salinas Household",
		members: 3,
		minors: 1,
		income: 3420,
		fplLabel: "Above 2026 FPL",
		rent: 1280,
		utilities: 210,
		risk: "watch",
		frictionTitle: "Rent due the 12th",
		frictionBody: "No notice. The ledger is current. A visit is optional and unfunded.",
		deficit: 0,
		deficitLabel: "None",
		packetTitle: "Wellness Check Sheet",
		packetKind: "wellness",
		deployable: false
	},
	D: {
		id: "D",
		address: "116 Perez Ave · Unit B",
		label: "116B",
		family: "The Okonkwo Family",
		members: 4,
		minors: 2,
		income: 3680,
		fplLabel: "Stabilized last month",
		rent: 1340,
		utilities: 240,
		risk: "stable",
		frictionTitle: "30-day wellness",
		frictionBody: "ALMA closed this case 27 days ago after a rental match. Follow-up is optional.",
		deficit: 0,
		deficitLabel: "None",
		packetTitle: "Wellness Check Sheet",
		packetKind: "wellness",
		deployable: false
	}
};
var PIPELINE_LABELS = {
	idle: "Idle",
	intercept: "Notice",
	scrape: "Look up",
	match: "Match",
	autofill: "Fill",
	analog_ready: "Hand off",
	printed: "Print",
	en_route: "Visit",
	on_site: "At the door",
	analog_complete: "Together",
	submitted: "Submit",
	stabilized: "Stable"
};
var PIPELINE_ORDER = [
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
	"stabilized"
];
var BASE_TRAJECTORY = [
	{
		week: "Week 1",
		without: 0,
		with: 0
	},
	{
		week: "Week 2",
		without: -200,
		with: -200
	},
	{
		week: "Week 3",
		without: -500,
		with: -200
	},
	{
		week: "Week 4",
		without: -2500,
		with: 0
	}
];
var LOCKED_ACTIONS = [
	{
		id: "fund",
		label: "Hand them cash",
		reason: "Money does not change hands at the door. It goes through the office that already talks to this household about the property."
	},
	{
		id: "override",
		label: "Change who qualifies",
		reason: "Who qualifies is already on the city ledger. A visit cannot rewrite that at the door."
	},
	{
		id: "dismiss",
		label: "Close the folder yourself",
		reason: "A folder closes when the office and the city confirm the help, not when someone walks away."
	},
	{
		id: "reassign",
		label: "Send it through a middleman",
		reason: "This only works through the people who already talk to the household about rent. Not a second party. Not a cousin. Not a cash drop."
	}
];
var defaultRuntime = () => ({
	A: {
		phase: "idle",
		resolved: false
	},
	B: {
		phase: "idle",
		resolved: false
	},
	C: {
		phase: "idle",
		resolved: false,
		wellnessDone: false
	},
	D: {
		phase: "idle",
		resolved: true,
		wellnessDone: false
	}
});
var bootLogs = () => [{
	id: "boot",
	at: 0,
	kind: "info",
	message: "ALMA 07 initialized. One ledger, 311 duplexes. Two open cases on Perez Ave."
}, {
	id: "boot-2",
	at: 0,
	kind: "human",
	message: `${LIAISON.name} on duty at ${LIAISON.station}. She makes time to go see people. She does not ask for cash at the door.`
}];
var timers = [];
var seq = 0;
function later(fn, ms) {
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
function pushLog(set, message, kind = "info", unit) {
	const entry = {
		id: nextId(),
		at: Date.now(),
		kind,
		message,
		unit
	};
	set((s) => ({ logs: [...s.logs, entry].slice(-80) }));
}
function setUnitPhase(set, id, phase, extra) {
	set((s) => ({ units: {
		...s.units,
		[id]: {
			...s.units[id],
			phase,
			...extra
		}
	} }));
}
var useSwarmStore = create((set, get) => ({
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
			deadlineA: now + 648e5,
			logs: s.logs.map((l) => l.at === 0 ? {
				...l,
				at: now
			} : l)
		}));
	},
	selectUnit: (id) => set({ selected: id }),
	openPacket: (id) => set({ packetOpen: id }),
	setFieldNote: (note) => set({ fieldNote: note }),
	deploySwarm: (id) => {
		const unit = HOUSEHOLDS[id];
		const runtime = get().units[id];
		if (!unit.deployable) {
			get().attemptLocked("Open ALMA match", "No friction trigger. ALMA will not open a grant path without a notice.");
			return;
		}
		if (runtime.phase !== "idle" || runtime.resolved) return;
		setUnitPhase(set, id, "intercept");
		pushLog(set, `Notice flagged: ${unit.label} — ${unit.frictionTitle}.`, "action", id);
		if (id === "A") {
			later(() => {
				setUnitPhase(set, id, "scrape");
				pushLog(set, "Checking Bexar County 2026 grant portals for family of 5 ($38,680 FPL eligibility).", "info", id);
			}, 900);
			later(() => {
				setUnitPhase(set, id, "match");
				pushLog(set, "Match found: City of San Antonio Rental Assistance. Up to $3,500.", "success", id);
			}, 2200);
			later(() => {
				setUnitPhase(set, id, "autofill");
				pushLog(set, "Auto-filling digital application from the encrypted PII vault.", "action", id);
			}, 3400);
			later(() => {
				setUnitPhase(set, id, "analog_ready");
				pushLog(set, "The city application needs the household’s own signature, sitting with them. Then it goes to the Perez Avenue office — the people who already talk to them about rent.", "info", id);
				pushLog(set, `${LIAISON.name} will go see Unit A. Print the packet. Confirm the tenant. Sit with them. Do not ask for money.`, "human", id);
				set((s) => ({
					tasks: [...s.tasks.filter((t) => t.unitId !== id), {
						unitId: id,
						packetKind: "rental",
						title: unit.packetTitle,
						instruction: "Print the city packet. Go see the Garcias. Confirm it is them. Sit together. Paper goes back through the office."
					}],
					liaisonStatus: "preparing"
				}));
			}, 4800);
		} else {
			later(() => {
				setUnitPhase(set, id, "scrape");
				pushLog(set, "Checking how soon the household can sit with a local ministry.", "info", id);
			}, 900);
			later(() => {
				setUnitPhase(set, id, "match");
				pushLog(set, "Cooldown cleared. Christian Assistance Ministry allows utility assist once per 12 months.", "success", id);
			}, 2200);
			later(() => {
				setUnitPhase(set, id, "autofill");
				pushLog(set, "Compiling physical intake packet (ID, SSN last-four, disconnect notice).", "action", id);
			}, 3400);
			later(() => {
				setUnitPhase(set, id, "analog_ready");
				pushLog(set, "CAM still needs the household in person. A visit first, then the window.", "info", id);
				pushLog(set, `${LIAISON.name} will go see Unit B. Sit with them. Explain CAM. The pledge goes to CPS, not through a middleman.`, "human", id);
				set((s) => ({
					tasks: [...s.tasks.filter((t) => t.unitId !== id), {
						unitId: id,
						packetKind: "utility",
						title: unit.packetTitle,
						instruction: "Print the CAM packet. Go see the Washingtons. Confirm the tenant. Sit with them. Send them to CAM with one bus pass."
					}],
					liaisonStatus: s.liaisonStatus === "on_site" || s.liaisonStatus === "en_route" ? s.liaisonStatus : "preparing"
				}));
			}, 4800);
		}
	},
	printPacket: (id) => {
		const runtime = get().units[id];
		if (!get().tasks.find((t) => t.unitId === id) || runtime.phase !== "analog_ready") {
			toast.error("No visit ready", { description: "Wait until the city match is on the folder." });
			return;
		}
		setUnitPhase(set, id, "printed");
		set({ packetOpen: id });
		pushLog(set, `${LIAISON.name} printed the visit packet for ${HOUSEHOLDS[id].family}.`, "human", id);
		toast.success("Packet printed", { description: HOUSEHOLDS[id].packetTitle });
	},
	dispatchLiaison: (id) => {
		if (get().units[id].phase !== "printed") {
			get().attemptLocked("Go see them", "Print the packet before you go. The visit is the work.");
			return;
		}
		if (get().liaisonStatus === "en_route" || get().liaisonStatus === "on_site") {
			toast.message("Already out", { description: "Finish this visit first." });
			return;
		}
		setUnitPhase(set, id, "en_route");
		set({
			liaisonStatus: "en_route",
			routeProgress: 0
		});
		pushLog(set, `${LIAISON.name} left to go see ${HOUSEHOLDS[id].family}.`, "human", id);
		const ticks = prefersReducedMotion() ? 2 : 8;
		for (let i = 1; i <= ticks; i += 1) later(() => {
			set({ routeProgress: Math.round(i / ticks * 100) });
			if (i === ticks) {
				setUnitPhase(set, id, "on_site");
				set({
					liaisonStatus: "on_site",
					routeProgress: 100
				});
				pushLog(set, `At the door with ${HOUSEHOLDS[id].family}. Confirm the tenant. Sit with them. Explain the help.`, "human", id);
			}
		}, i * 380);
	},
	collectAnalog: (id) => {
		if (get().units[id].phase !== "on_site") {
			get().attemptLocked("Sit with them first", "You have to be at the door, talking to the household on this folder.");
			return;
		}
		setUnitPhase(set, id, "analog_complete");
		if (id === "B") {
			set((s) => ({ busPasses: Math.max(0, s.busPasses - 1) }));
			pushLog(set, "Sat with the household. Bus pass in their hand. CAM will pledge to CPS — not through anyone else.", "human", id);
		} else pushLog(set, "Sat with the household. They signed. Paper goes back through the Perez Avenue office.", "human", id);
		later(() => {
			set({
				liaisonStatus: "returning",
				routeProgress: 0
			});
			pushLog(set, `${LIAISON.name} is coming back. The office takes it from here.`, "info", id);
		}, 700);
		later(() => {
			setUnitPhase(set, id, "submitted");
			if (id === "A") pushLog(set, "Signed paper went to the Perez Avenue office. Eviction clock paused while city rental help is paid to management — not to a hand at the door.", "success", id);
			else pushLog(set, "The Washingtons are on their way to CAM. Lights stay on because CPS is paid by the ministry — not because anyone collected cash on Perez.", "success", id);
		}, 1800);
		later(() => {
			setUnitPhase(set, id, "stabilized", { resolved: true });
			set((s) => ({
				tasks: s.tasks.filter((t) => t.unitId !== id),
				liaisonStatus: s.tasks.filter((t) => t.unitId !== id).length ? "preparing" : "standby",
				routeProgress: 0
			}));
			pushLog(set, `${HOUSEHOLDS[id].family} is stable. The building is still standing. The visit is done.`, "success", id);
			toast.success(`${HOUSEHOLDS[id].label} stabilized`);
		}, 2800);
	},
	wellnessCheck: (id) => {
		if (id !== "C" && id !== "D") return;
		if (get().units[id].wellnessDone) return;
		set((s) => ({ units: {
			...s.units,
			[id]: {
				...s.units[id],
				wellnessDone: true
			}
		} }));
		pushLog(set, `${LIAISON.name} checked in with ${HOUSEHOLDS[id].family}. Just a visit. No city folder opened.`, "human", id);
		toast.message("Wellness logged", { description: "Just a visit. ALMA did not open a city folder." });
	},
	attemptLocked: (label, reason) => {
		pushLog(set, `Blocked: ${label}. ${reason}`, "lock");
		toast.error("Not at the door", { description: reason });
	},
	submitFieldNote: () => {
		const note = get().fieldNote.trim();
		if (!note) return;
		const unit = HOUSEHOLDS[get().selected];
		pushLog(set, `Note from ${LIAISON.name} after sitting with ${unit.family}: “${note}”`, "human", unit.id);
		set({ fieldNote: "" });
		toast.message("Note filed", { description: "A note from the visit. It does not move money." });
	},
	reset: () => {
		clearTimers();
		seq = 0;
		const now = Date.now();
		set({
			units: defaultRuntime(),
			selected: "A",
			logs: bootLogs().map((l) => ({
				...l,
				at: now
			})),
			liaisonStatus: "standby",
			routeProgress: 0,
			tasks: [],
			fund: NODE.fundStart,
			busPasses: 3,
			fieldNote: "",
			packetOpen: null,
			deadlineA: now + 648e5,
			hydrated: true
		});
	}
}));
function phaseIndex(phase) {
	return [
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
		"stabilized"
	].indexOf(phase);
}
function LiveClock() {
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	if (!now) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-right",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "Central Time"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-sm tabular-nums text-fg",
			children: "—"
		})]
	});
	const date = new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}).format(now);
	const time = new Intl.DateTimeFormat("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
		timeZone: "America/Chicago"
	}).format(now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-right",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "Central Time"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-sm tabular-nums text-fg",
			children: [
				date,
				" · ",
				time
			]
		})]
	});
}
function DeadlineClock({ target }) {
	const [remain, setRemain] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!target) return;
		const tick = () => setRemain(Math.max(0, target - Date.now()));
		tick();
		const id = setInterval(tick, 1e3);
		return () => clearInterval(id);
	}, [target]);
	if (remain === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-mono tabular-nums",
		children: "—"
	});
	const hours = Math.floor(remain / 36e5);
	const mins = Math.floor(remain % 36e5 / 6e4);
	const secs = Math.floor(remain % 6e4 / 1e3);
	const pad = (n) => n.toString().padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-mono tabular-nums",
		children: [
			pad(hours),
			":",
			pad(mins),
			":",
			pad(secs)
		]
	});
}
function NodeHeader() {
	const reset = useSwarmStore((s) => s.reset);
	const units = useSwarmStore((s) => s.units);
	const active = ["A", "B"].filter((id) => !units[id].resolved).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sheet px-5 py-6 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-14 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-wide",
						children: NODE.acronym
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-primary uppercase",
						children: NODE.expansion
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-3xl text-fg sm:text-4xl",
						children: NODE.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
						children: NODE.trust
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg",
						children: NODE.tagline
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-5 sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Today"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-sm font-medium text-ok",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-1.5 rounded-full bg-ok" }), active === 0 ? "Quiet" : `${active} open folders`]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-10 w-px bg-border sm:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveClock, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "The brief"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: reset,
						className: "ml-auto lg:ml-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Start over"]
					})
				]
			})]
		})
	});
}
var ICONS = {
	in: ArrowDownToLine,
	ledger: BookMarked,
	out: ArrowUpFromLine
};
function MoneyRail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sheet p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl text-fg",
				children: "How the money moves"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Government programs first. Held on one book. Paid through the office."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid grid-cols-1 gap-3 md:grid-cols-3",
			children: MONEY_RAIL.map((step, i) => {
				const Icon = ICONS[step.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-surface-2 px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs tracking-[0.16em] text-primary uppercase",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-3.5",
									strokeWidth: 1.75
								}),
								i + 1,
								". ",
								step.label
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-lg text-fg",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: step.body
						})
					]
				}, step.id);
			})
		})]
	});
}
function padTone(id, resolved, selected) {
	const risk = HOUSEHOLDS[id].risk;
	return {
		fill: resolved ? "fill-ok/15" : risk === "critical" ? "fill-danger/12" : "fill-warn/12",
		stroke: selected ? "stroke-primary" : resolved ? "stroke-ok" : risk === "critical" ? "stroke-danger" : "stroke-warn",
		label: resolved ? "fill-ok" : selected ? "fill-primary" : risk === "critical" ? "fill-danger" : "fill-warn"
	};
}
function DuplexPlan() {
	const selected = useSwarmStore((s) => s.selected);
	const units = useSwarmStore((s) => s.units);
	const selectUnit = useSwarmStore((s) => s.selectUnit);
	const wellnessCheck = useSwarmStore((s) => s.wellnessCheck);
	const attemptLocked = useSwarmStore((s) => s.attemptLocked);
	const statusA = units.A.resolved ? "Stabilized" : "Eviction notice";
	const statusB = units.B.resolved ? "Stabilized" : "Lights at risk";
	const toneA = padTone("A", units.A.resolved, selected === "A");
	const toneB = padTone("B", units.B.resolved, selected === "B");
	const neighbor = selected === "C" || selected === "D" ? HOUSEHOLDS[selected] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl text-fg",
					children: "118 Perez Ave"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "A duplex. Shared porch. Shared drive."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 640 280",
				className: "h-auto w-full",
				role: "img",
				"aria-label": "Plan of the Perez Avenue duplex with Unit A and Unit B",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "24",
						y: "36",
						width: "592",
						height: "188",
						rx: "10",
						className: "fill-surface-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "320",
						y1: "52",
						x2: "320",
						y2: "204",
						className: "stroke-border",
						strokeWidth: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitPad, {
						id: "A",
						x: 48,
						y: 56,
						selected: selected === "A",
						label: "UNIT A",
						family: HOUSEHOLDS.A.family,
						status: statusA,
						onSelect: selectUnit,
						fillClass: toneA.fill,
						strokeClass: toneA.stroke,
						statusClass: toneA.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitPad, {
						id: "B",
						x: 336,
						y: 56,
						selected: selected === "B",
						label: "UNIT B",
						family: HOUSEHOLDS.B.family,
						status: statusB,
						onSelect: selectUnit,
						fillClass: toneB.fill,
						strokeClass: toneB.stroke,
						statusClass: toneB.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "150",
						y: "214",
						width: "340",
						height: "14",
						rx: "2",
						className: "fill-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "320",
						y: "256",
						textAnchor: "middle",
						className: "fill-muted",
						style: {
							fontSize: 13,
							fontFamily: "Source Sans 3, sans-serif"
						},
						children: "Shared drive"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: ["C", "D"].map((id) => {
					const h = HOUSEHOLDS[id];
					const active = selected === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => selectUnit(id),
						className: cn("min-h-14 rounded-md px-3 py-2.5 text-left transition-colors duration-150", active ? "bg-primary text-primary-fg" : "bg-surface-2 hover:bg-border/60"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: h.family.replace("The ", "")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: cn("text-xs", active ? "text-primary-fg/80" : "text-muted"),
							children: [h.label, units[id].wellnessDone ? " · checked in" : ""]
						})]
					}, id);
				})
			}),
			neighbor ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-md bg-surface-2 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: neighbor.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-fg",
						children: neighbor.family
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: neighbor.frictionBody
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							disabled: units[neighbor.id].wellnessDone,
							onClick: () => wellnessCheck(neighbor.id),
							children: units[neighbor.id].wellnessDone ? "Already checked in" : "Optional wellness visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => attemptLocked("Open ALMA match", "No notice on this folder. ALMA only opens city help when a household is in friction."),
							children: "Request city help"
						})]
					})
				]
			}) : null
		]
	});
}
function UnitPad({ id, x, y, selected, label, family, status, onSelect, fillClass, strokeClass, statusClass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		role: "button",
		tabIndex: 0,
		className: "cursor-pointer",
		onClick: () => onSelect(id),
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				onSelect(id);
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x,
				y,
				width: "256",
				height: "148",
				rx: "8",
				className: cn(fillClass, strokeClass),
				strokeWidth: "2"
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: x - 4,
				y: y - 4,
				width: "264",
				height: "156",
				rx: "10",
				fill: "none",
				className: "stroke-primary",
				strokeWidth: "1.5"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: x + 108,
				y: y + 118,
				width: "40",
				height: "30",
				rx: "2",
				className: "fill-surface stroke-border",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: x + 128,
				y: y + 42,
				textAnchor: "middle",
				className: "fill-muted",
				style: {
					fontSize: 11,
					letterSpacing: "0.14em",
					fontFamily: "Source Sans 3, sans-serif"
				},
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: x + 128,
				y: y + 74,
				textAnchor: "middle",
				className: "fill-fg",
				style: {
					fontSize: 18,
					fontWeight: 600,
					fontFamily: "Fraunces, serif"
				},
				children: family.replace("The ", "")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: x + 128,
				y: y + 98,
				textAnchor: "middle",
				className: statusClass,
				style: {
					fontSize: 13,
					fontFamily: "Source Sans 3, sans-serif"
				},
				children: status
			})
		]
	});
}
var FOLDERS = [
	"A",
	"B",
	"C",
	"D"
];
function SubsetMosaic() {
	const units = useSwarmStore((s) => s.units);
	const selectUnit = useSwarmStore((s) => s.selectUnit);
	const selected = useSwarmStore((s) => s.selected);
	const open = ["A", "B"].filter((id) => !units[id].resolved).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sheet p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl text-fg",
				children: "Today’s folders"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					NODE.subsetSize,
					" duplexes share this ledger. ",
					open,
					" need a visit today. The rest stay quiet."
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: FOLDERS.map((id) => {
				const h = HOUSEHOLDS[id];
				const runtime = units[id];
				const active = selected === id;
				const status = runtime.resolved ? "Stable" : h.risk === "critical" ? "Eviction notice" : h.risk === "warning" ? "Lights at risk" : h.risk === "watch" ? "Watch" : "Stable";
				const tone = runtime.resolved || h.risk === "stable" ? "text-ok" : h.risk === "critical" ? "text-danger" : h.risk === "warning" ? "text-warn" : "text-muted";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => selectUnit(id),
					className: cn("flex min-h-14 w-full items-center justify-between gap-3 rounded-md border-l-4 px-4 py-3 text-left transition-colors duration-150", active ? "border-l-primary-fg bg-primary text-primary-fg" : "border-l-primary bg-surface-2 text-fg hover:bg-border/70"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-sm font-medium",
						children: [
							h.label,
							" · ",
							h.family.replace("The ", "")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-xs", active ? "text-primary-fg/80" : "text-muted"),
						children: h.address
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("shrink-0 text-xs font-medium", active ? "text-primary-fg" : tone),
						children: status
					})]
				}) }, id);
			})
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", {
	variants: { variant: {
		default: "border-primary/30 bg-primary/10 text-primary",
		danger: "border-danger/40 bg-danger/15 text-danger",
		warn: "border-warn/40 bg-warn/15 text-warn",
		ok: "border-ok/40 bg-ok/15 text-ok",
		muted: "border-border bg-surface-2 text-muted"
	} },
	defaultVariants: { variant: "muted" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function Pipeline({ phase }) {
	const idx = phaseIndex(phase);
	const analogStart = PIPELINE_ORDER.indexOf("analog_ready");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-wrap gap-1.5",
		children: PIPELINE_ORDER.map((step, i) => {
			const done = idx > i + 1;
			const current = PIPELINE_ORDER[idx - 1] === step || phase === step;
			const layer = i >= analogStart ? "visit" : "office";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				"aria-label": `${PIPELINE_LABELS[step]}, ${layer} layer`,
				className: cn("rounded-full px-2.5 py-1 text-xs", done && "bg-primary/15 text-primary", current && !done && "bg-fg text-bg", !done && !current && "bg-surface-2 text-subtle"),
				children: PIPELINE_LABELS[step]
			}, step);
		})
	});
}
var RISK_BADGE = {
	critical: {
		variant: "danger",
		label: "Eviction notice"
	},
	warning: {
		variant: "warn",
		label: "Lights at risk"
	},
	watch: {
		variant: "muted",
		label: "Watch"
	},
	stable: {
		variant: "ok",
		label: "Stable"
	}
};
var DIGITAL = [
	"intercept",
	"scrape",
	"match",
	"autofill"
];
function UnitCard({ id }) {
	const household = HOUSEHOLDS[id];
	const runtime = useSwarmStore((s) => s.units[id]);
	const selected = useSwarmStore((s) => s.selected === id);
	const selectUnit = useSwarmStore((s) => s.selectUnit);
	const deploySwarm = useSwarmStore((s) => s.deploySwarm);
	const deadlineA = useSwarmStore((s) => s.deadlineA);
	const risk = runtime.resolved ? "stable" : household.risk;
	const badge = RISK_BADGE[risk];
	const digitalBusy = DIGITAL.includes(runtime.phase);
	const canDeploy = household.deployable && runtime.phase === "idle" && !runtime.resolved;
	const awaitingAnalog = !runtime.resolved && [
		"analog_ready",
		"printed",
		"en_route",
		"on_site",
		"analog_complete",
		"submitted"
	].includes(runtime.phase);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("sheet relative overflow-hidden p-5 transition-shadow duration-200", selected && "ring-2 ring-primary/40"),
		onClick: () => selectUnit(id),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorClosed, {
								className: "size-5",
								strokeWidth: 1.6
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: household.address
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-fg",
							children: household.family
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: badge.variant,
						className: risk === "critical" && !runtime.resolved ? "pulse-danger" : void 0,
						children: badge.label
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-surface-2 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-primary",
							children: "Household"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								household.members,
								" people (",
								household.minors,
								" children)"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Monthly income"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "text-right tabular-nums text-fg",
								children: [
									formatUsd(household.income),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-subtle",
										children: household.fplLabel
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Rent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-right tabular-nums text-fg",
								children: formatUsd(household.rent)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: "Utilities"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "text-right tabular-nums text-fg",
								children: [
									formatUsd(household.utilities),
									" ",
									household.utilitiesPastDue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-danger",
										children: "Past due"
									}) : null
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("rounded-md bg-surface-2 p-3", risk === "critical" && "ring-1 ring-danger/30", risk === "warning" && "ring-1 ring-warn/30"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("text-xs font-medium", risk === "critical" ? "text-danger" : risk === "warning" ? "text-warn" : "text-muted"),
							children: household.frictionTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-fg",
							children: household.frictionBody
						}),
						id === "A" && !runtime.resolved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-danger",
							children: ["Filing clock ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeadlineClock, { target: deadlineA })]
						}) : null,
						household.deficit > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex justify-between text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Needed now"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: risk === "critical" ? "text-danger" : "text-warn",
								children: [
									formatUsd(-household.deficit),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-normal text-subtle",
										children: household.deficitLabel
									})
								]
							})]
						}) : null
					]
				}),
				runtime.phase !== "idle" && !runtime.resolved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, { phase: runtime.phase }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					canDeploy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full",
						onClick: (e) => {
							e.stopPropagation();
							deploySwarm(id);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, { className: "size-4" }), "Find city help"]
					}) : null,
					digitalBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full",
						disabled: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Matching city programs"]
					}) : null,
					awaitingAnalog ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-primary/10 px-3 py-2.5 text-center text-sm text-primary",
						children: "Marisol will go see them. Confirm the tenant. Sit together. Paper goes through the office."
					}) : null,
					runtime.resolved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md bg-ok/10 px-3 py-2.5 text-sm text-ok",
						children: "Stable. The visit is done. The office has the paper."
					}) : null
				] })
			]
		})
	});
}
function Progress({ className, value = 0, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-surface-2", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			className: "h-full bg-primary transition-transform duration-300 ease-[var(--ease-out-soft)]",
			style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
		})
	});
}
var STATUS_COPY = {
	standby: {
		label: "At the lobby",
		detail: "Waiting for a folder"
	},
	preparing: {
		label: "Preparing",
		detail: "Packet is at the printer"
	},
	en_route: {
		label: "On the way",
		detail: "Making time to go see them"
	},
	on_site: {
		label: "At the door",
		detail: "Confirm the tenant. Sit with them. Explain the help."
	},
	returning: {
		label: "Coming back",
		detail: "Paper returns to the office"
	}
};
function LiaisonDesk() {
	const liaisonStatus = useSwarmStore((s) => s.liaisonStatus);
	const routeProgress = useSwarmStore((s) => s.routeProgress);
	const tasks = useSwarmStore((s) => s.tasks);
	const units = useSwarmStore((s) => s.units);
	const fund = useSwarmStore((s) => s.fund);
	const busPasses = useSwarmStore((s) => s.busPasses);
	const fieldNote = useSwarmStore((s) => s.fieldNote);
	const setFieldNote = useSwarmStore((s) => s.setFieldNote);
	const submitFieldNote = useSwarmStore((s) => s.submitFieldNote);
	const printPacket = useSwarmStore((s) => s.printPacket);
	const dispatchLiaison = useSwarmStore((s) => s.dispatchLiaison);
	const collectAnalog = useSwarmStore((s) => s.collectAnalog);
	const attemptLocked = useSwarmStore((s) => s.attemptLocked);
	const status = STATUS_COPY[liaisonStatus];
	const active = tasks[0];
	const phase = active ? units[active.unitId].phase : "idle";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sheet flex h-full flex-col p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-12 items-center justify-center rounded-md bg-primary font-display text-sm text-primary-fg",
						children: "MR"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-primary uppercase",
							children: "Field desk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-fg",
							children: LIAISON.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								LIAISON.title,
								" · ",
								LIAISON.languages
							]
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "muted",
					children: status.label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: status.detail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorVisit, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-2 gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: MapPin,
						label: "Station",
						value: LIAISON.station
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: UserRound,
						label: "Shift",
						value: LIAISON.shift
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: Printer,
						label: "Printer",
						value: phase === "analog_ready" ? "Queued" : "Ready"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						icon: Bus,
						label: "Bus passes",
						value: `${busPasses} remaining`
					})
				]
			}),
			liaisonStatus === "en_route" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "On the way" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [routeProgress, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: routeProgress })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-md bg-surface-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium text-fg",
					children: "Today’s visit"
				}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg",
							children: HOUSEHOLDS[active.unitId].family
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: active.instruction
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: phase === "analog_ready" ? "default" : "secondary",
									disabled: phase !== "analog_ready",
									onClick: () => printPacket(active.unitId),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Print the packet"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: phase === "printed" ? "default" : "secondary",
									disabled: phase !== "printed",
									onClick: () => dispatchLiaison(active.unitId),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), "Go see them"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									variant: phase === "on_site" ? "default" : "secondary",
									disabled: phase !== "on_site",
									onClick: () => collectAnalog(active.unitId),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "size-3.5" }), active.packetKind === "utility" ? "Sit with them, then send them on" : "Sit with them and sign together"]
								})
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-subtle",
					children: "Waiting at the lobby. No folder has been handed over yet."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-2 flex items-center gap-1.5 text-xs font-medium text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), "Never at the door — money stays with the office"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: LOCKED_ACTIONS.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							className: "h-auto min-h-11 justify-start py-2 text-left text-xs text-subtle",
							onClick: () => attemptLocked(action.label, action.reason),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3 shrink-0" }), action.label]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: action.reason })] }, action.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4",
				onSubmit: (e) => {
					e.preventDefault();
					submitFieldNote();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "field-note",
						className: "text-xs font-medium text-muted",
						children: "What you heard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "field-note",
						value: fieldNote,
						onChange: (e) => setFieldNote(e.target.value),
						rows: 2,
						maxLength: 180,
						placeholder: "A note from the visit. It cannot move money.",
						suppressHydrationWarning: true,
						className: "mt-1 w-full resize-none rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "ghost",
						size: "sm",
						className: "mt-1 px-0",
						children: "File note"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "Neighbor pool"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-ok",
						children: formatUsd(fund)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-subtle",
					children: [
						"Last resort, and only through the office. ",
						LIAISON.name.split(" ")[0],
						" ",
						"does not carry it to the door."
					]
				})]
			})
		]
	});
}
function DoorVisit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 rounded-md bg-surface-2 px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-2 flex items-center gap-1.5 text-xs font-medium text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-3.5 text-primary" }), "At the door"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "space-y-2 text-sm text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Make time."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " Go see them. Do not send a stranger."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Confirm the tenant."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " Talk to the person on this folder."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Describe the help."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [" ", "City programs, paid through the office that already talks to them about this property. Nobody here asks for cash."]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-subtle",
				children: "The building stands and the household stays. Same side. That is the whole point."
			})
		]
	});
}
function Row({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2 rounded-md bg-surface-2 px-2.5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-0.5 size-3.5 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-fg",
			children: value
		})] })]
	});
}
var KIND = {
	info: {
		icon: Info,
		className: "text-muted"
	},
	action: {
		icon: NotebookPen,
		className: "text-fg"
	},
	human: {
		icon: UserRoundCheck,
		className: "text-primary"
	},
	success: {
		icon: CircleCheck,
		className: "text-ok"
	},
	lock: {
		icon: Lock,
		className: "text-danger"
	}
};
function EventLog() {
	const logs = useSwarmStore((s) => s.logs);
	const scroller = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		el.scrollTop = el.scrollHeight;
	}, [logs.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sheet flex min-h-72 flex-col p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl text-fg",
				children: "Desk notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "What came in. What went out."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 text-subtle" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scroller,
			className: "log-scroll max-h-96 min-h-0 flex-1 overflow-y-auto pr-1",
			children: logs.map((entry) => {
				const meta = KIND[entry.kind];
				const Icon = meta.icon;
				const time = entry.at === 0 ? "--:--" : new Date(entry.at).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
					hour12: true
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "log-enter mb-3 border-l-2 border-border py-1 pl-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `mt-0.5 size-3.5 shrink-0 ${meta.className}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-snug text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 text-xs text-subtle",
								children: time
							}), entry.message]
						})]
					})
				}, entry.id);
			})
		})]
	});
}
function TrajectoryChart() {
	const units = useSwarmStore((s) => s.units);
	const resolvedCount = ["A", "B"].filter((id) => units[id].resolved).length;
	const data = BASE_TRAJECTORY.map((point, i) => {
		if (resolvedCount === 0) return point;
		if (resolvedCount === 1 && i === 3) return {
			...point,
			with: -400
		};
		return point;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sheet p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl text-fg",
				children: "If nobody comes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "The drop is eviction fees and payday loans. The quiet line is city help arriving on time."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-64 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data,
					margin: {
						top: 8,
						right: 12,
						left: 0,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "week",
							tick: {
								fill: "var(--color-muted)",
								fontSize: 12
							},
							axisLine: { stroke: "var(--color-border)" },
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick: {
								fill: "var(--color-muted)",
								fontSize: 12
							},
							axisLine: false,
							tickLine: false,
							tickFormatter: (v) => `$${v}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
							contentStyle: {
								background: "var(--color-surface)",
								border: "1px solid var(--color-border)",
								borderRadius: 10,
								color: "var(--color-fg)",
								fontSize: 12
							},
							formatter: (value) => [`$${String(value)}`, ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
							color: "var(--color-muted)",
							fontSize: 12
						} }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "without",
							name: "No visit",
							stroke: "var(--color-danger)",
							strokeDasharray: "6 6",
							strokeWidth: 2,
							dot: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "with",
							name: "ALMA path",
							stroke: "var(--color-primary)",
							strokeWidth: 2,
							dot: false
						})
					]
				})
			})
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-bg/80", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-surface p-6 shadow-2xl", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-sm text-muted hover:text-fg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 space-y-1", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-lg font-semibold tracking-tight", className),
		...props
	});
}
function PacketDialog() {
	const packetOpen = useSwarmStore((s) => s.packetOpen);
	const openPacket = useSwarmStore((s) => s.openPacket);
	const household = packetOpen ? HOUSEHOLDS[packetOpen] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(packetOpen),
		onOpenChange: (o) => !o && openPacket(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-w-xl border-border bg-paper p-0 text-ink",
			children: household ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-6 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.16em] uppercase text-ink/50",
					children: "For the visit · sit with them"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-xl text-ink",
					children: household.packetTitle
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-4 border-t border-ink/15 pt-4 text-sm leading-relaxed text-ink/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Prepared for ",
							household.family,
							" at ",
							household.address,
							".",
							" ",
							LIAISON.name,
							" goes in person. Do not send this through anyone else."
						] }),
						household.packetKind === "rental" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal space-y-2 pl-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Knock. Introduce yourself. Make sure you are talking to the household on this folder." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sit with them. Say what this is: city rental help, paid to the Perez Avenue office — the same people who already talk to them about this property. Not a stranger taking cash." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Income ",
									formatUsd(household.income),
									"/mo against the 2026 family line of ",
									formatUsd(NODE.fplFamily5),
									". Already matched. You are not deciding it at the door."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "If they agree, they sign. You witness. The paper goes back to the office. Do not collect money. Do not promise cash." })
							]
						}) : household.packetKind === "utility" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal space-y-2 pl-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Knock. Confirm you are speaking with ",
									household.family,
									"."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sit with them. Explain that CAM can keep the lights on, and that the pledge goes to CPS — not through a middleman, not through a neighbor’s pocket." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Hand them one bus pass for the CAM window. Stay with the briefing. Do not sit the intake for them." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The neighbor pool stays at the office. Nobody asks for cash at this door." })
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Optional check-in only. Confirm it is the household. Ask how they are. No grant path, no money at the door." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 border border-dashed border-ink/25 p-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/45",
								children: "Tenant, in their own hand"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 border-t border-ink/30 pt-1",
								children: "together"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink/45",
								children: "Witness at the door"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 border-t border-ink/30 pt-1",
								children: LIAISON.name
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-ink/45",
							children: [
								"Demonstration packet · not an official City of San Antonio or CAM form. Printed at ",
								NODE.name,
								"."
							]
						})
					]
				})]
			}) : null
		})
	});
}
function NodeConsole() {
	const units = useSwarmStore((s) => s.units);
	const hydrate = useSwarmStore((s) => s.hydrate);
	const clear = units.A.resolved && units.B.resolved;
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen px-4 py-6 sm:px-6 lg:px-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyRail, {}),
					clear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sheet border border-ok/25 bg-ok/10 px-5 py-3 text-sm text-ok",
						children: "Both Perez families are stable. The office has the paper. The building is still standing. Start over to visit the folders again."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-6 lg:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DuplexPlan, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubsetMosaic, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-6 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitCard, { id: "A" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitCard, { id: "B" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiaisonDesk, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-6 lg:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrajectoryChart, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventLog, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "pb-6 text-center text-xs text-subtle",
						children: "A demonstration of ALMA. Not an official City of San Antonio, Bexar County, CPS Energy, or CAM office. Households are fictional."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PacketDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "light",
				position: "bottom-right",
				toastOptions: { className: "bg-surface border-border text-fg" }
			})
		]
	});
}
function Desk() {
	const navigate = useNavigate();
	const [ok, setOk] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (hasReadBrief()) {
			setOk(true);
			return;
		}
		navigate({
			to: "/",
			replace: true
		});
	}, [navigate]);
	if (!ok) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "The brief first."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeConsole, {});
}
//#endregion
export { Desk as component };
