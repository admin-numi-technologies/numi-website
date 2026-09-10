export type Study = {
  id: string;
  name: string;
  kind: string;
  tag: string;
  headline: string;
  teaser: string;
  problem: string;
  approach: string;
  solution: string[];
  transformation: string;
  capabilities: string[];
  imageNote: string;
  note: string;
  before: string[];
  after: string[];
};

export const STUDIES: Study[] = [
  {
    id: "clinic",
    name: "Wellness clinic · intake, payment & scheduling",
    kind: "Running something existing",
    tag: "In progress",
    headline:
      "“Every new patient takes five separate steps and three of them land in my inbox.”",
    teaser:
      "Intake, payment, and scheduling lived in three disconnected places. We are rebuilding it as one flow.",
    problem:
      "A clinic owner was collecting health and wellness information, taking payment, and booking appointments through three separate processes. A patient submitted their information, waited for the owner to review it, received a payment link, paid somewhere else, then scheduled somewhere else again. Every booking created administrative work, and every step was a place to drop out.",
    approach:
      "The obvious request was “build me a form.” Instead we mapped the whole customer workflow, beginning to end, and looked for the seams — the waiting, the manual review, the second and third handoff. The problem was never the form. It was that nothing was connected.",
    solution: [
      "A single guided flow that takes a patient from information to payment to a booked appointment without leaving the experience.",
      "Intake information captured once and carried forward, rather than re-entered or re-sent.",
      "Payment and scheduling connected to the same flow, so a completed booking is a completed booking.",
      "Administrative steps removed from the owner’s day rather than moved around it.",
    ],
    transformation:
      "The intent is fewer steps for patients, less back-and-forth for the owner, and less administrative work between a booking and an appointment. This project is underway, so we are describing what it is designed to do — not results we have measured yet.",
    capabilities: [
      "Product Definition",
      "Workflow Design",
      "UX/UI",
      "Web Application",
      "Payments",
      "Scheduling",
      "Integrations",
    ],
    imageNote: "clinic flow screens",
    note: "Currently in build. Client kept anonymous, and this story is about administrative workflow only — it makes no claims about care or clinical outcomes. Measured results will be added once the project is live.",
    before: [
      "Patient submits health information",
      "Owner receives and reviews it manually",
      "Owner sends a separate payment link",
      "Patient pays in another flow",
      "Patient schedules somewhere else again",
    ],
    after: [
      "One guided flow, start to finish",
      "Information captured once",
      "Payment in the same experience",
      "Appointment booked at the end",
      "Owner’s inbox out of the loop",
    ],
  },
  {
    id: "pitch",
    name: "Pitch Portal · white-labeled platform for music publishers",
    kind: "Running something existing",
    tag: "Operational platform",
    headline:
      "“Our whole pitching process lives in iMessage, Dropbox, and email — and nobody knows what happened to a song.”",
    teaser:
      "Song pitches were scattered across chat threads and file links. We centralized the workflow publishers actually use.",
    problem:
      "Music publishers were pitching songs across iMessage, Dropbox, email, and loose files. Submissions arrived unstructured and without context, so A&Rs received music with no idea what they were listening to or why. Managers had no visibility into whether recipients had opened anything at all. The work still got done — it just cost a lot of chasing.",
    approach:
      "We treated it as an operations problem rather than a file-sharing problem. That meant following a pitch through its real life — who sends it, who receives it, what they need to know, what the sender needs to find out afterward — and designing infrastructure around that path.",
    solution: [
      "A secure, white-labeled submission platform publishers can present as their own.",
      "Centralized catalog management with metadata attached to every upload.",
      "Branded pitch rooms, so a recipient sees a considered presentation instead of a file dump.",
      "Secure expiring links for controlled sharing.",
      "Listener engagement analytics, so managers can see what is actually being heard.",
    ],
    transformation:
      "A fragmented, untracked pitching process became a centralized system built around how publishers already work. Context travels with the music, sharing is controlled, and the sender finally knows what happened after they hit send.",
    capabilities: [
      "Product Design",
      "Web Application",
      "Platform Architecture",
      "Analytics",
      "Integrations",
      "Access & Security",
    ],
    imageNote: "pitch portal screens",
    note: "",
    before: [
      "Pitches scattered across iMessage and email",
      "Files in Dropbox with no context",
      "Unstructured submissions",
      "No idea if a song was ever opened",
      "Constant manual follow-up",
    ],
    after: [
      "One branded platform",
      "Metadata attached to every upload",
      "Branded pitch rooms per recipient",
      "Engagement analytics on every link",
      "Secure links that expire on their own",
    ],
  },
  {
    id: "champagne",
    name: "Champagne Therapy · official website",
    kind: "Starting something new",
    tag: "Digital presence",
    headline:
      "“We have a roster, a catalog, and releases — and no proper home for any of it.”",
    teaser:
      "A music publishing label founded by a Grammy-winning songwriter and producer needed a polished public presence.",
    problem:
      "Champagne Therapy, a music publishing label founded by Grammy Award-winning songwriter and producer Tommy Brown, needed a polished digital home. Its artists, catalog, and releases had no single public-facing place that matched the standard of the work.",
    approach:
      "Design for the way people actually arrive — curious about an artist, a credit, or a release — and organize the label’s roster and catalog into something coherent, quick to browse, and unmistakably its own.",
    solution: [
      "Designed and developed the official responsive website.",
      "Structured the roster, catalog, and releases into one cohesive presentation.",
      "Built for phones first, since that is where music discovery happens.",
    ],
    transformation:
      "The label has a public home that presents its artists and releases properly, and a structure that new signings and releases slot into without a redesign.",
    capabilities: ["Web Design", "UX/UI", "Responsive Development", "Digital Experience"],
    imageNote: "champagne therapy screens",
    note: "",
    before: [
      "Roster spread across other platforms",
      "No single public home",
      "Releases hard to browse",
      "Presentation below the standard of the work",
    ],
    after: [
      "One official site",
      "Roster and catalog organized",
      "Releases easy to find",
      "Presentation that matches the label",
    ],
  },
  {
    id: "snap",
    name: "Snap Inc. & Sandia National Laboratories",
    kind: "Employment, not client work",
    tag: "Built at scale",
    headline: "Before NUMI: building software used by a very large number of people at once.",
    teaser: "Enterprise experience — the engineering background behind NUMI, not a client project.",
    problem:
      "The fair question a business owner asks a new company is whether the person behind it has actually shipped software that matters. This is that answer. It is employment history, not NUMI client work.",
    approach:
      "At Snap Inc., work meant shipping into a product with an enormous audience and very little tolerance for breakage — which is where the habits show up: shared components, documentation, browser-level edge cases, and shipping carefully.",
    solution: [
      "Snapchat for Web — a responsive emoji picker for web chat, and browser-level camera and microphone permission UI across Safari and Chrome.",
      "My AI — LaTeX and Markdown rendering for formatted AI responses, plus shared UI component documentation and systems.",
      "Snap Ads — contributed to Instant Create, an advertising tool designed to help small businesses launch campaigns more quickly.",
      "Sandia National Laboratories — built 200+ internal web pages and raised accessibility compliance from 35% to 95%.",
    ],
    transformation:
      "The engineering standard NUMI works to comes from these environments: real users, real scale, real review. Small projects benefit from it more than large ones do.",
    capabilities: [
      "Front-End Engineering",
      "UI Systems",
      "Accessibility",
      "Cross-Browser Platform Work",
      "Internal Tools",
    ],
    imageNote: "optional: neutral workplace photo",
    note: "Snap Inc. and Sandia National Laboratories were employers, not NUMI clients. Listed here as engineering background only.",
    before: [],
    after: [],
  },
];
