export type Resource = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  body: { heading: string; copy: string }[];
};

export const resources: Resource[] = [
  {
    slug: "cold-room-sizing-guide",
    title: "Cold Room Sizing Guide — Don't Pay for Volume You Won't Use",
    description: "How to size a cold room properly using throughput, pallets, shelving and growth allowance — without overbuilding or underbuilding.",
    date: "2025-07-19",
    author: "Keith Cherry",
    body: [
      { heading: "Size by throughput, not stock", copy: "The most common cold room sizing mistake is sizing on peak stock. The right way is to size on throughput: how many pallets or shelving units a day, multiplied by stock days, plus walking aisle, door swing and a growth buffer." },
      { heading: "Pallet maths", copy: "A standard chep pallet is 1165mm × 1165mm. Two pallets wide plus a 900mm aisle plus a row of shelving on one wall is roughly 4.5m wide. Depth is set by stock days × pallets per day, plus rotation aisle." },
      { heading: "Shelving layouts", copy: "Hand-stack rooms run 600mm-deep shelves on three walls and a 900mm clear centre aisle. Anything tighter and your team won't restock properly — they'll start leaving boxes on the floor." },
      { heading: "Door size", copy: "A 900mm × 1900mm door is fine for hand-stack. If you're rolling pallets you need 1200mm × 2100mm minimum, plus a strip curtain on the inside to manage the temperature drift on every transit." },
      { heading: "Growth allowance", copy: "Add 15–20% to whatever your current peak is. Cold rooms last 10–15 years. Your business shouldn't outgrow it in year three." },
    ],
  },
  {
    slug: "cold-room-vs-freezer-room",
    title: "Cold Room vs Freezer Room — Which Do You Actually Need?",
    description: "Cold rooms hold 2–5°C, freezer rooms -18°C to -25°C. Choose wrong and you'll either lose stock or pay double the running cost.",
    date: "2025-08-22",
    author: "Keith Cherry",
    body: [
      { heading: "What a cold room is for", copy: "Cold rooms hold 0–5°C. They're for fresh produce, dairy, prepped foods, drinks, flowers and pharmacy stock. They use 100mm panels, standard doors and medium-temperature compressors." },
      { heading: "What a freezer room is for", copy: "Freezer rooms hold -18°C to -25°C. They're for frozen meat, seafood, ice cream, dough and long-term frozen stock. They use 150mm panels, heated doors, low-temperature compressors and pump-down circuits." },
      { heading: "The running cost difference", copy: "For the same physical size, a freezer room burns 2–3× the electricity of a cold room. Over 10 years, that's a five-figure difference." },
      { heading: "The combi answer", copy: "If you only need 5–30% of your stock frozen, a combi cool/freezer room — one box, two zones, one shared plant — is almost always the right answer. Cheaper to install, cheaper to run, less floor space lost to walls." },
    ],
  },
  {
    slug: "energy-efficient-cold-rooms",
    title: "Energy-Efficient Cold Rooms in Brisbane — Where the Savings Actually Are",
    description: "Brisbane summers are getting hotter. Here's where the real energy savings live in a modern cold room — and which 'green features' are mostly marketing.",
    date: "2025-08-05",
    author: "Keith Cherry",
    body: [
      { heading: "Doors first, plant second", copy: "Cold room running cost has more to do with envelope and door behaviour than the compressor. A poorly sealed door costs more than a 1-tier upgrade in compressor efficiency." },
      { heading: "Real wins, in order", copy: "150mm panels on freezer rooms. Well-sealed self-closing doors with fast-roll secondary doors on high-traffic openings. EC fan evaporators (saves 30–50% on fan energy). Variable-speed condensers. Condenser shading and 1m+ clearance for airflow." },
      { heading: "Marketing wins", copy: "Some 'eco' features are mostly badging — exotic refrigerants on small rooms, smart controllers that mostly just turn fans down anyway, anything labelled 'green' without a kWh number behind it. We'll tell you when it's marketing." },
      { heading: "What it looks like in practice", copy: "On a typical Brisbane restaurant cold room, our standard package cuts running cost 25–40% versus a 10-year-old install. We model the kWh and dollar figure before quoting." },
    ],
  },
];

export const getResource = (slug: string) => resources.find((r) => r.slug === slug);
