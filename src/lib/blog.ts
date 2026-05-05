export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  reviewer?: string;
  category: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cold-room-installation-cost-brisbane-2025",
    title: "How Much Does a Cold Room Cost to Install in Brisbane (2025 Guide)",
    description:
      "An indicative guide to cold room installation costs in Brisbane in 2025 — small, medium, freezer and industrial — and the variables that actually move the price.",
    date: "2025-09-08",
    author: "Keith Cherry",
    category: "Pricing",
    body: [
      "If you've called three Brisbane refrigeration companies for a cold room quote, you've probably had three wildly different numbers — sometimes a $4,000 spread on the same room. Here's why, and indicative ranges for a Brisbane cold room in 2025. These are typical industry ranges only — your fixed-price quote will be confirmed after on-site measure-up.",
      "A small 3m × 3m × 2.4m chiller for a cafe sits between $4,000 and $8,000 installed. A medium 5m × 4m × 2.7m for a restaurant or grocer is $8,000–$15,000. A 5m × 5m × 2.7m freezer at -18°C runs $12,000–$25,000, and industrial-scale rooms start around $25,000 and run well past $40,000 once racking, doors and three-phase plant come in.",
      "What moves the price most? Panel thickness (100mm vs 150mm), refrigerant choice, condenser sizing for our climate, the door package, electrical sub-mains, and whether the floor needs an insulated panel or can sit on slab. Tenancy fitout requirements and council approvals can add 5–15% on top of the base build.",
      "The fixed-price quote we issue includes everything — design, panels, refrigeration, electrical, doors, commissioning and certification — so you know the final number before we order panels.",
    ],
  },
  {
    slug: "cold-room-vs-freezer-room",
    title: "Cold Room vs Freezer Room — Which Do You Actually Need?",
    description:
      "Cold rooms hold 2–5°C, freezer rooms -18°C to -25°C. Choose wrong and you'll either lose stock or pay double the running cost. Here's the decision tree.",
    date: "2025-08-22",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      "It sounds basic but it's the single most expensive mistake we see — businesses installing a freezer room when a cold room would have done the job, or vice versa.",
      "Cold rooms hold 0–5°C. They're for fresh produce, dairy, prepped foods, drinks, flowers and pharmacy stock. They use 100mm panels, standard doors and medium-temperature compressors.",
      "Freezer rooms hold -18°C to -25°C. They're for frozen meat, seafood, ice cream, dough and long-term frozen stock. They use 150mm panels, heated doors, low-temperature compressors and pump-down circuits.",
      "Running cost for the same physical size? A freezer room burns 2–3× the electricity of a cold room. If you only need 5–10% of your stock frozen, a combi cool/freezer room — one box, two zones, one plant — is almost always the right answer.",
    ],
  },
  {
    slug: "energy-efficient-cold-rooms-brisbane",
    title: "Energy-Efficient Cold Rooms in Brisbane — Where the Savings Actually Are",
    description:
      "Brisbane summers are getting hotter. Here's where the real energy savings live in a modern cold room — and which 'green features' are mostly marketing.",
    date: "2025-08-05",
    author: "Keith Cherry",
    category: "Energy",
    body: [
      "Cold room running cost has more to do with envelope and door behaviour than the compressor. A poorly sealed door costs more than a 1-tier upgrade in compressor efficiency.",
      "Real wins, in order: 150mm panels on freezer rooms; well-sealed, self-closing doors with fast-roll secondary doors on high-traffic openings; EC fan evaporators (saves 30–50% on fan energy); variable-speed condensers; condenser shading and clearance.",
      "Marketing wins (less impactful than they sound): exotic refrigerants on small rooms, smart controllers that mostly turn fans down anyway, anything labelled 'eco' without a kWh number behind it.",
      "On a typical Brisbane restaurant cold room, the package above cuts running cost 25–40% versus a 10-year-old install. We model it before quoting.",
    ],
  },
  {
    slug: "cold-room-sizing-guide",
    title: "Cold Room Sizing Guide — Don't Pay for Volume You Won't Use",
    description:
      "How to size a cold room properly: pallet maths, door clearance, shelving depth, throughput and growth allowance — without overbuilding.",
    date: "2025-07-19",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      "Most over-spec'd cold rooms come from sizing on stock, not throughput. The right way: count pallets or shelving units, add walking aisle, add door swing, add a 20% growth buffer.",
      "A standard chep pallet is 1165mm × 1165mm. Two pallets wide plus a 900mm aisle plus shelving on one wall = roughly 4.5m wide. Depth is set by stock days × pallets per day.",
      "If you're going hand-stack on shelving, plan 600mm-deep shelves on three walls and 900mm clear in the centre — anything tighter and your team won't restock properly.",
      "Door size matters: a 900mm × 1900mm door is fine for hand-stack; if you're rolling pallets you need 1200mm × 2100mm minimum, and a strip curtain on the inside.",
    ],
  },
  {
    slug: "haccp-cold-room-checklist-brisbane",
    title: "HACCP Cold Room Checklist for Brisbane Food Businesses",
    description:
      "What auditors actually check on cold rooms in Queensland — temperatures, calibration, logbooks, seals — and how to be ready every time.",
    date: "2025-07-02",
    author: "Keith Cherry",
    category: "Compliance",
    body: [
      "The HACCP audit isn't out to catch you — it's out to prove your cold chain is documented. Six things every Queensland food business should have ready.",
      "1. A daily temperature log, signed. 2. Calibrated probes (NATA-traceable, calibrated annually). 3. A door seal inspection record. 4. A maintenance logbook from your refrigeration mechanic. 5. A corrective action record for any excursion. 6. Refrigerant gas and leak-test records.",
      "Cherry Refrigeration leaves a complete logbook entry every service visit, with date, technician licence, work performed and refrigerant data. Auditors love it. Your kitchen managers love it more.",
    ],
  },
  {
    slug: "cold-room-not-cooling-troubleshooting",
    title: "Cold Room Not Cooling? Brisbane Troubleshooting Checklist",
    description:
      "Before you call us, run this 5-minute checklist. Half the time you'll fix it yourself — and we'll respect you for trying.",
    date: "2025-06-14",
    author: "Keith Cherry",
    category: "Troubleshooting",
    body: [
      "Cold room creeping up over 5°C? Run this in order before you call.",
      "1. Check the door seal — close on a $5 note, pull it out. If it slides, the seal's gone. 2. Check the condenser coil outside — clean? clear of leaves and lint? 3. Check the evaporator inside — iced up? 4. Check the thermostat set point — has someone bumped it? 5. Listen to the compressor — running? cycling on/off rapidly?",
      "Iced-up evaporator usually means defrost timer or heater failure. Rapid cycling usually means refrigerant pressure issue. Hot condenser fan usually means motor on its way out.",
      "If you've got temp creeping past 8°C and stock at risk, call us. Same-day Brisbane response, 24/7 emergency line.",
    ],
  },
  {
    slug: "qbcc-licensed-cold-room-installer-brisbane",
    title: "Why Your Cold Room Installer Should Be QBCC Licensed",
    description:
      "QBCC, ARC, electrical — the three licences a Brisbane cold room installer should hold, and what each one actually covers.",
    date: "2025-05-30",
    author: "Keith Cherry",
    category: "Compliance",
    body: [
      "Cold room installs in Queensland touch three licensing regimes, and a legitimate installer holds all three. QBCC for the building work (panels are a structure under QBCC). ARC for the refrigeration handling. An open electrical licence for the wiring.",
      "A reputable installer either holds all three licences in-house or works with a long-term licensed partner — and can hand you the licence numbers on the spot.",
      "Ask anyone quoting your job: 'What's your QBCC licence number? Your ARC number? Your electrical licence?' If they hesitate or hand it off to a sub-contractor, walk away.",
    ],
  },
  {
    slug: "low-gwp-refrigerant-retrofit-brisbane",
    title: "Low-GWP Refrigerant Retrofits — What's Changing in 2025/26",
    description:
      "R404A is on the way out. Here's what Brisbane operators with R404A or R134a plant need to know about retrofits to R448A, R449A and R454C.",
    date: "2025-05-12",
    author: "Keith Cherry",
    category: "Refrigerants",
    body: [
      "R404A's GWP of 3,922 has put it in the regulators' sights worldwide. Australian phase-down quotas are tightening every year, and the gas price is climbing with it.",
      "Most existing R404A medium-temp systems retrofit cleanly to R448A or R449A — same oil, same expansion device in many cases, 5–10% efficiency improvement. Low-temp R404A systems retrofit to R449A or, for newer plant, R454C.",
      "If you've got R134a on a chiller, R513A is a near drop-in. R22 systems (still out there!) need a full plant upgrade — but power savings often pay it back in 3–5 years.",
      "Cherry Refrigeration runs an audit and retrofit program for Brisbane operators on legacy gases — call us before the next gas top-up bill arrives.",
    ],
  },
  {
    slug: "cold-room-door-seal-replacement",
    title: "Cold Room Door Seals — When to Replace and How to Tell",
    description:
      "Door seals are the cheapest part of your cold room and the biggest source of energy loss when they go. Here's the 30-second test.",
    date: "2025-04-25",
    author: "Keith Cherry",
    category: "Maintenance",
    body: [
      "30-second seal test: close the door on a piece of A4 paper. Try to slide it out. If it slides easily, the seal's compressed and air's leaking past it.",
      "Seals last 5–8 years on a cold room, 3–5 on a freezer (where the heater wire bakes them faster). On a busy kitchen door, halve those numbers.",
      "Bad seals cost more than just energy — they let warm humid air in, your evaporator ices up, defrost cycles run longer, and your door frame heater wire works overtime. The cascade gets expensive.",
      "Replacement is a 30-minute job per door. We carry seals for every common Australian profile.",
    ],
  },
  {
    slug: "starting-a-cafe-brisbane-cold-room-guide",
    title: "Opening a Cafe in Brisbane? Your Cold Room Game Plan",
    description:
      "A cold room timeline for first-time Brisbane cafe operators — from lease signing to opening day.",
    date: "2025-04-04",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      "Cold room is one of the longer-lead-time items in a cafe fitout, and it touches plumbing, electrical and council approval. Get on it early.",
      "Week 1 (lease signed): book a measure-up. We'll produce a CAD floor plan and a fixed-price quote within 5 working days, plus a tenancy compliance letter for your landlord.",
      "Week 2–3: design sign-off, deposit, panel manufacture. We coordinate with your shopfitter on penetrations, drains and power layout.",
      "Week 4–5: install over 4–6 days, commissioning, certification. Hand you a complete documentation pack for your council and HACCP submissions.",
      "Open day: room running, logbook started, training delivered. We come back at the 30-day mark for a free tune-up.",
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
