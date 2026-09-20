import type { Household, SwarmPhase, TrajectoryPoint } from "./types";

export const NODE = {
  name: "ALMA 07",
  acronym: "ALMA",
  expansion: "Assistance Ledger for Mutual Aid",
  tagline: "City programs. One ledger. Help at the door.",
  trust:
    "ALMA is not a charity. It finds help San Antonio already funded, holds it on one ledger, and walks the paper to the door.",
  area: "Bexar County · San Antonio, TX",
  cluster: "Eastside Duplex Subset",
  subsetSize: 311,
  address: "118 Perez Ave",
  fundStart: 1250,
  fplFamily5: 38680,
};

export const LIAISON = {
  name: "Marisol Reyes",
  role: "Analog Liaison",
  title: "Promotora",
  node: "07",
  languages: "Spanish / English",
  shift: "14:00–22:00",
  station: "Eastside lobby",
};

export const MONEY_RAIL = [
  {
    id: "in",
    label: "In",
    title: "Where it comes from",
    body: "City and county programs first. Ministry partners next. A neighbor pool only if those fail.",
  },
  {
    id: "ledger",
    label: "Ledger",
    title: "How it is held",
    body: "Matched once. Held so nobody at the door has to ask for cash or trust.",
  },
  {
    id: "out",
    label: "Out",
    title: "Where it goes",
    body: "Rent and lights, paid to the office or the utility. Never a middleman. Never a hand at the door.",
  },
] as const;

export const HOUSEHOLDS: Record<Household["id"], Household> = {
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
    frictionBody:
      "Three-day notice served two days ago. Landlord files a formal eviction suit when the clock hits zero.",
    deficit: 1450,
    deficitLabel: "Rent + late fees",
    packetTitle: "City of SA Rental Assistance Packet",
    packetKind: "rental",
    deployable: true,
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
    frictionBody:
      "Disconnect notice in hand. Local ministry help is open again as of yesterday.",
    deficit: 480,
    deficitLabel: "Utilities past due",
    packetTitle: "CAM Utility Assistance Packet",
    packetKind: "utility",
    deployable: true,
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
    frictionBody:
      "No notice. The ledger is current. A visit is optional and unfunded.",
    deficit: 0,
    deficitLabel: "None",
    packetTitle: "Wellness Check Sheet",
    packetKind: "wellness",
    deployable: false,
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
    frictionBody:
      "ALMA closed this case 27 days ago after a rental match. Follow-up is optional.",
    deficit: 0,
    deficitLabel: "None",
    packetTitle: "Wellness Check Sheet",
    packetKind: "wellness",
    deployable: false,
  },
};

export const PIPELINE_LABELS: Record<SwarmPhase, string> = {
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
  stabilized: "Stable",
};

export const PIPELINE_ORDER: SwarmPhase[] = [
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

export const BASE_TRAJECTORY: TrajectoryPoint[] = [
  { week: "Week 1", without: 0, with: 0 },
  { week: "Week 2", without: -200, with: -200 },
  { week: "Week 3", without: -500, with: -200 },
  { week: "Week 4", without: -2500, with: 0 },
];

export const LOCKED_ACTIONS = [
  {
    id: "fund",
    label: "Hand them cash",
    reason:
      "Money does not change hands at the door. It goes through the office that already talks to this household about the property.",
  },
  {
    id: "override",
    label: "Change who qualifies",
    reason:
      "Who qualifies is already on the city ledger. A visit cannot rewrite that at the door.",
  },
  {
    id: "dismiss",
    label: "Close the folder yourself",
    reason:
      "A folder closes when the office and the city confirm the help, not when someone walks away.",
  },
  {
    id: "reassign",
    label: "Send it through a middleman",
    reason:
      "This only works through the people who already talk to the household about rent. Not a second party. Not a cousin. Not a cash drop.",
  },
] as const;
