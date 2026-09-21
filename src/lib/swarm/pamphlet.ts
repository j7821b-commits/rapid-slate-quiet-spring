export const PAMPHLET = [
  {
    kicker: "A brief",
    title: "ALMA",
    body: "Assistance Ledger for Mutual Aid. Help the city already funded, held on one book, walked to the door through the office.",
  },
  {
    kicker: "What this is",
    title: "Not a charity. Not cash at the door.",
    body: "ALMA finds programs San Antonio and Bexar County already pay for. It holds the match on one ledger so nobody has to trust a stranger with money. A real person goes to sit with the household. The signed paper goes back through the people who already talk to them about the property.",
  },
  {
    kicker: "The goal",
    title: "The building stands. The household stays.",
    body: "Lights on. Rent current. People still home. The complex does better because the residents are okay — not instead of them. Same side. Office, household, this tool.",
  },
  {
    kicker: "How the money moves",
    title: "In. Ledger. Out.",
    points: [
      "In — city and county programs first. Ministry next. A neighbor pool only if those fall through.",
      "Ledger — matched once. Held so nobody at the door has to ask for cash.",
      "Out — rent to the office. Lights to the utility. Never a middleman. Never a hand at the door.",
    ],
  },
  {
    kicker: "How it is used",
    title: "Notice. Match. Visit. Paper.",
    points: [
      "See the friction early — a notice to vacate, a shutoff.",
      "Match the household to a program that already exists.",
      "Send someone who made time. Confirm it is the tenant. Sit with them. Describe the help.",
      "They sign together. The paper goes through the office. That is the whole walk.",
    ],
  },
  {
    kicker: "At the door",
    title: "Make time. Confirm. Describe.",
    points: [
      "Go see them. Do not send a stranger.",
      "Talk to the person on the folder. Make sure it is them.",
      "Say what this is: city help, paid through the office. Nobody here asks for cash.",
    ],
  },
  {
    kicker: "If a step falls through",
    title: "That is a design problem.",
    body: "Something in the process was never made easy enough. It is not proof that someone did not care. Do not set the tenant against the office, or the office against this tool. Fix the process until people can actually do it.",
  },
  {
    kicker: "The demo",
    title: "118 Perez Ave · Eastside",
    body: "Two open folders on one duplex. The Garcias have a three-day notice. The Washingtons have a CPS disconnect. Three hundred and eleven duplexes share the ledger. The families are fictional. The process is the point.",
  },
] as const;

export type PamphletSlide = (typeof PAMPHLET)[number];
