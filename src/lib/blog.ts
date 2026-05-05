export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  reviewer?: string;
  category: string;
  body: { heading?: string; copy: string }[] | string[];
  faqs?: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "trusted-cold-room-installation-company-brisbane",
    title: "Trusted Cold Room Installation Company Brisbane — From Design to Install",
    description:
      "How Cherry Refrigeration covers every stage of a Brisbane cold room project — site assessment, heat-load design, panels and refrigerant selection, on-site install and commissioning — with FAQs grounded in Australian industry practice.",
    date: "2026-05-05",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      {
        copy: "Choosing a cold room installer in Brisbane is mostly a question of who's accountable for which part of the job. A 'cheap' cold room often means three sub-contractors with three different warranties — the panel supplier blames the refrigeration crew, the refrigeration crew blames the sparky, and you're stuck in the middle. Cherry Refrigeration covers every stage in-house: site assessment, design, panel and refrigerant selection, on-site install, commissioning and ongoing service. One quote, one program, one point of contact.",
      },
      {
        copy: "This post walks through what each stage actually involves, what Australian industry practice says about getting it right, and the questions Brisbane operators ask us most often.",
      },
      {
        heading: "1. Site assessment and brief",
        copy: "Every project starts with an on-site visit. The job survey records design ambient temperatures (a Brisbane summer afternoon can hit 38°C, which matters for condenser sizing), the room's footprint and height, the type and volume of stock that will be stored, throughput per day, the existing electrical supply and any tenancy or fitout constraints. Industry guidance from ASHRAE and refrigeration engineering literature is consistent: skipping the site survey is the single biggest cause of under-performing cold rooms.",
      },
      {
        heading: "2. Heat-load calculation and design",
        copy: "The total cooling load is built up from four components: transmission load (heat through the panels — typically 5–15% of total), product load (heat the stock brings with it — typically 55–75%), internal load (people, lights, motors, defrost — 10–15%), and air-change load every time the door opens. Standard practice is to add a ~10% safety factor on top. From there, panel thickness, refrigerant, condenser size and evaporator coil are all selected to match. Cherry produces the heat-load workings, a CAD floor plan and the refrigerant/electrical scope in writing before any quote goes out.",
      },
      {
        heading: "3. Panel and door selection",
        copy: "Insulated sandwich panels are the envelope of the room — two steel skins around an injected polyurethane (or PIR) foam core. Industry practice on thickness (Esad, Refindustry, SQ Panel and others all converge on similar numbers): 80mm is fine for moderate cool-room temperatures, 100–140mm is the right band for -10°C to -20°C freezer rooms, and 150–200mm is used for below -20°C and ultra-low applications. Door choice — hinged, sliding, glass-view, heated freezer doors, or rapid-roll for traffic — is matched to how the room actually gets used. The Insulated Panel Council of Australia (IPCA) Code of Practice covers fire-risk mitigation and construction detail for panel structures and is the local reference we work to.",
      },
      {
        heading: "4. Manufacture and lead-time",
        copy: "Once design is signed off, panels are ordered and doors manufactured to the floor plan. For typical Brisbane jobs, panel and door lead-times sit in the 1–2 week range; specialist doors or stainless skin panels run longer. Cherry coordinates manufacture so that delivery lines up with site readiness — there's no benefit to panels turning up at a tenancy that isn't ready for them.",
      },
      {
        heading: "5. On-site install — refrigeration and electrical together",
        copy: "Install covers floor preparation, panel assembly, door fitting, refrigeration plant install (compressor, condenser, evaporator), refrigerant pipework, drain lines and the electrical scope (sub-mains, isolators, switchboard work, controller wiring). Because cold-room installs touch both refrigeration and electrical regimes, this is where a lot of multi-trade jobs fall apart. Cherry coordinates both in-house. After-hours and overnight installs are routine for Brisbane tenancies that can't drop trade.",
      },
      {
        heading: "6. Commissioning, testing and handover",
        copy: "Commissioning is where a cold room is proven. Pull-down test from ambient to set point, refrigerant pressure and superheat checks, leak test on every joint, electrical Certificate of Test, controller programming and alarm test, and a final walk-through of door operation, defrost cycles and HACCP-ready logging. Australian food-safety practice (and the Food Standards Code) requires perishable cold storage to hold at or below 5°C, with frozen storage at -18°C or below — so we verify the room actually holds those targets under real load before signing off.",
      },
      {
        heading: "7. Service plan and ongoing support",
        copy: "Installation isn't really finished at handover. Door seals, refrigerant pressure, condenser cleanliness and controller calibration all drift with use, and most cold-room failures are preventable with scheduled checks. Cherry offers monthly, quarterly or biannual service plans, with a HACCP-compliant logbook entry every visit. Service-plan customers also get priority response on breakdowns.",
      },
      {
        copy: "If you're sourcing quotes for a Brisbane cold room install, ask each company who actually does the design, who holds the refrigeration licence, who holds the electrical licence, and what's covered in the quote versus what's a variation. Single-trade, single-quote installs are slower to start but almost always smoother to finish.",
      },
    ],
    faqs: [
      {
        q: "What temperature should a Brisbane cold room hold?",
        a: "Cool rooms typically run 0–4°C; the Australian Food Standards Code requires perishable cold storage to be at or below 5°C. Freezer rooms are typically -18°C to -25°C, with -18°C the minimum for compliant frozen storage. We confirm exact set points based on what you're storing.",
      },
      {
        q: "What panel thickness do I need?",
        a: "Industry rule of thumb: 80mm for moderate cool-room work, 100–140mm for freezer rooms down to -20°C, and 150–200mm for below -20°C or ultra-low applications. Brisbane summer ambient pushes us toward the upper end of each band — we size off heat-load, not catalogue defaults.",
      },
      {
        q: "How long does a typical install take?",
        a: "Most Brisbane cold rooms are commissioned 4–10 working days from sign-off, plus 1–2 weeks of design and panel manufacture lead-time. Specialist doors, stainless skin panels and industrial-scale rooms run longer. We commit to a fixed completion date in the quote.",
      },
      {
        q: "What refrigerants do you use?",
        a: "Low-GWP refrigerants by default — typically R448A or R449A on medium-temperature systems and R454C on low-temperature where the plant supports it. Under Australia's HFC phase-down, R404A is increasingly being retrofitted out, and we won't sell it on a new install.",
      },
      {
        q: "Do I need approvals from council or a private certifier?",
        a: "For most cold rooms inside an existing tenancy, no council approval is required. If structural work, fire compartmentation or new external plant is involved, a private certifier will usually need to sign off. Panel structures are addressed by the IPCA Code of Practice. We'll tell you up front whether your job needs approval and prepare the drawings if it does.",
      },
      {
        q: "What licences should a cold room installer hold in Queensland?",
        a: "Three regimes apply: QBCC for the building work (panels are a structure under QBCC), an ARC Refrigerant Trading Authorisation for handling refrigerant, and an open electrical licence for the wiring. A reputable installer either holds all three in-house or works with long-term licensed partners — and can produce the licence numbers on request.",
      },
      {
        q: "How is a cold room actually sized?",
        a: "From throughput, not peak stock. We count pallets or shelving units, add walking aisle, add door swing and add a growth buffer. Then we run a heat-load calc summing transmission load, product load, internal load (people, lights, motors, defrost) and air-change load, and add a ~10% safety factor before sizing the plant.",
      },
      {
        q: "What goes wrong if a cold room is poorly designed?",
        a: "Three common failure modes: (1) undersized condensers that can't hold temp through Brisbane summers, (2) door packages that leak warm humid air faster than the plant can pull it down, leading to evaporator icing, and (3) electrical sub-mains that weren't upgraded for the new load and trip under start-up draw. All three are avoidable with a proper site assessment and heat-load design.",
      },
      {
        q: "Do you provide ongoing service after install?",
        a: "Yes. Service plans are monthly, quarterly or biannual depending on traffic and risk. Each visit covers refrigerant pressure and superheat, condenser and evaporator cleaning, seal and heater wire inspection, controller calibration and a HACCP-ready logbook entry.",
      },
      {
        q: "What's included in your fixed-price quote?",
        a: "Design, panels, doors, refrigeration plant, electrical scope, commissioning, certification and a 30-day post-install tune-up. Variations only apply when scope changes are requested in writing.",
      },
    ],
    sources: [
      { label: "Australian Cold Storage Guidelines (RemaxDoors)", url: "https://news.remaxdoors.com/australian-cold-storage-guidelines-preserve-food-quality-and-safety" },
      { label: "Cooling load calculation — The Engineering Mindset", url: "https://theengineeringmindset.com/cooling-load-calculation-cold-room/" },
      { label: "Cooling Load Calculations and Principles (CED Engineering PDF)", url: "https://www.cedengineering.com/userfiles/M06-004%20-%20Cooling%20Load%20Calculations%20and%20Principles%20-%20US.pdf" },
      { label: "AIRAH — Walk-in cool room and freezer research project", url: "https://airah.org.au/Common/Uploaded%20files/Archive/Advocacy/2018/2018-AIRAH-WICF-findings-and-recommendations.pdf" },
      { label: "Insulated Panel Council of Australia — Code of Practice", url: "https://insulatedpanel.org.au/" },
      { label: "Cold Room Panel Thickness Guide (SQ Panel)", url: "https://sqpanel.com/blog/cold-room-panel-thickness-guide/" },
      { label: "Cold Room Installation step-by-step (Tunelgroup)", url: "https://tunelgroup.com/blog/cold-room-installation-a-comprehensive-step-by-step-guide/" },
    ],
  },
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
