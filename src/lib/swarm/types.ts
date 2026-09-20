export type UnitId = "A" | "B" | "C" | "D";

export type RiskLevel = "critical" | "warning" | "watch" | "stable";

export type SwarmPhase =
  | "idle"
  | "intercept"
  | "scrape"
  | "match"
  | "autofill"
  | "analog_ready"
  | "printed"
  | "en_route"
  | "on_site"
  | "analog_complete"
  | "submitted"
  | "stabilized";

export type LiaisonStatus =
  | "standby"
  | "preparing"
  | "en_route"
  | "on_site"
  | "returning";

export type LogKind = "info" | "action" | "human" | "success" | "lock";

export type PacketKind = "rental" | "utility" | "wellness";

export interface Household {
  id: UnitId;
  address: string;
  label: string;
  family: string;
  members: number;
  minors: number;
  income: number;
  fplLabel: string;
  rent: number;
  utilities: number;
  utilitiesPastDue?: boolean;
  risk: RiskLevel;
  frictionTitle: string;
  frictionBody: string;
  deficit: number;
  deficitLabel: string;
  packetTitle: string;
  packetKind: PacketKind;
  deployable: boolean;
}

export interface LogEntry {
  id: string;
  at: number;
  kind: LogKind;
  message: string;
  unit?: UnitId;
}

export interface AnalogTask {
  unitId: UnitId;
  packetKind: PacketKind;
  title: string;
  instruction: string;
}

export interface UnitRuntime {
  phase: SwarmPhase;
  resolved: boolean;
  wellnessDone?: boolean;
}

export interface TrajectoryPoint {
  week: string;
  without: number;
  with: number;
}
