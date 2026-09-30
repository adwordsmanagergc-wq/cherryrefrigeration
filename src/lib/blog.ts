export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  reviewer?: string;
  category: string;
  body: { heading?: string; copy: string }[] | string[];
  faqs?: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cool-room-not-cooling-9-causes-and-fixes",
    title: "Cool Room Not Cooling? 9 Causes and Fixes",
    description:
      "The nine most common reasons a Brisbane cool room stops cooling, what to check yourself, and when to call a refrigeration mechanic.",
    date: "2026-08-15",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Troubleshooting",
    body: [
      { copy: "A cool room creeping over 5°C is not always a broken compressor. Nine times out of ten it is one of the causes below, and half of those you can check yourself before you call us." },
      { heading: "1. Door seal leaking warm air", copy: "Close the door on a piece of A4 paper. If it slides out, the seal is compressed. Warm humid air leaks in, the evaporator ices up, and the room stops holding temp. Fix: replace the seal (about 30 minutes on a hinged door)." },
      { heading: "2. Iced up evaporator", copy: "Look through the vent inside the room. Solid ice across the coil means the defrost cycle is not running properly. Fix: defrost timer, defrost heater or controller programming. Turning the room off overnight to defrost is a temporary workaround, not a fix." },
      { heading: "3. Dirty condenser outside", copy: "The condenser sits outside (or on the roof). Leaves, grease and lint on the coil stop it rejecting heat. Fix: coil clean and clearance check. This is on every service visit." },
      { heading: "4. Refrigerant leak", copy: "Low charge means the compressor cannot pull temp down. Fix: leak detection, repair, pressure test, vacuum, regas with the correct gas. ARC licensed work." },
      { heading: "5. Fan motor failure", copy: "If the evaporator fan or condenser fan is not turning, the system cannot move heat. Fix: fan motor replacement. Most common models are on the van." },
      { heading: "6. Faulty controller or thermostat", copy: "If the set point has been bumped, or the probe has drifted, the controller thinks the room is colder than it is. Fix: probe check, controller reset, or replacement." },
      { heading: "7. Compressor short cycling", copy: "Rapid on-off cycling usually means a pressure switch problem, a low charge, or a contactor about to fail. Fix: diagnosis on-site. Do not keep resetting the breaker." },
      { heading: "8. Blocked drain", copy: "Water inside the room, or ice building on the floor, usually points to a blocked drain. The condensate has nowhere to go. Fix: clear the drain, replace the drain heater if it has failed." },
      { heading: "9. Wrong room for the load", copy: "Overloading a chiller with warm stock, or filling every shelf so airflow cannot circulate, will push the room off temp regardless of the plant. Fix: load management, or sometimes a plant upgrade." },
      { copy: "If your room is over 8°C and stock is at risk, do not wait. Call the 24/7 emergency line on 0432 115 513. Same day response across Greater Brisbane." },
    ],
    faqs: [
      { q: "How quickly should a Brisbane cool room recover after the door is opened?", a: "A healthy chiller should pull back to set point within 5 to 10 minutes of a door open. Slower recovery points to plant sizing, a dirty condenser, refrigerant loss, or a failing compressor." },
      { q: "Is a cool room the same as a cold room?", a: "Yes. Cool room is the common Australian consumer term. Cold room is more common in industrial or food-safety documents. Same box." },
    ],
  },

  {
    slug: "second-hand-vs-new-cool-room-panels",
    title: "Second-Hand vs New Cool Room Panels: The Honest Trade-off",
    description:
      "When second-hand cool room panels make sense, when they do not, and what to look for on used panels before you commit.",
    date: "2026-07-04",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      { copy: "Second-hand cool room panels can save you 30 to 50% versus new. But they carry hidden costs: transport, damage, missing fixings, incompatible corners, and panels that no longer match a current door frame. Here is when they make sense." },
      { heading: "When second-hand works", copy: "Non-critical back-of-house rooms, dry stores that will be converted, staging areas, hire-shop overflow, event or temporary use, and rural sites where transport of new panels is a big fraction of the total cost." },
      { heading: "When it does not", copy: "Anything with a HACCP audit exposure, freezer rooms below -18°C, coastal installs where corrosion is aggressive, pharmacy or medical storage, and any tenancy where you cannot pull the room apart later to swap panels." },
      { heading: "What to look for", copy: "Skin corrosion at the base, dents in the core, delamination between skin and foam, moisture entry at panel joints, missing cam locks or damaged cam lock housings, mismatched panel lengths, and above all: whether the door frame is intact and compatible with a current door." },
      { heading: "The honest maths", copy: "By the time you factor in freight, labour to disassemble and reassemble, replacement seals, new cam locks, and any refrigeration plant that needs to move with the room, second-hand savings often shrink to 10 to 20% versus new. Sometimes that still wins. Just do the numbers on the whole job, not just the panel price." },
    ],
  },

  {
    slug: "cool-room-requirements-food-businesses-queensland",
    title: "Cool Room Requirements for Food Businesses in Queensland",
    description:
      "What the Food Standards Code and Queensland Health actually require of your cool room, and how to stay audit-ready without over-engineering.",
    date: "2026-06-18",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Compliance",
    body: [
      { copy: "If you run a Queensland food business, your cool room is a compliance instrument as much as it is a piece of plant. The Food Standards Code (FSANZ Standard 3.2.2) and Queensland Health both expect specific things. Here is what actually matters on a real audit, not what marketing copy says." },
      { heading: "1. Temperature", copy: "Potentially hazardous food must be kept at or below 5°C, or above 60°C. Frozen food at -18°C or colder. That is the law. Cool rooms are usually set 0 to 4°C in practice to give a buffer for door opens." },
      { heading: "2. Documented temperature checks", copy: "You need daily temperature logs. Auditors want signed dated entries. Digital data loggers with export to CSV pass every time. Handwritten logs are fine if they are consistent." },
      { heading: "3. Probe calibration", copy: "Thermometers used for compliance checks need to be NATA-traceable and calibrated annually. Note the last cal date on the log." },
      { heading: "4. Corrective actions", copy: "Every temperature excursion needs a documented corrective action: what happened, what you did, what stock was affected. This is where most operators lose marks in audit." },
      { heading: "5. Maintenance records", copy: "A logbook from your refrigeration mechanic showing scheduled visits, refrigerant handling, and any repairs. Every Cherry Refrigeration visit leaves one." },
      { heading: "6. Door seals and structural integrity", copy: "Auditors check door seals visually and look for pest ingress points around penetrations. Poor seals are a fail item in a lot of Queensland Health checks." },
      { heading: "7. Stock rotation and airflow", copy: "Not a plant issue, but included in the audit. Do not block airflow around the evaporator, do not stack stock touching the floor, keep raw and ready-to-eat separated." },
      { copy: "Cherry Refrigeration builds and services rooms that pass audits first time. If you have an inspection coming up and something feels off, get us to run a pre-audit check." },
    ],
  },

  {
    slug: "trusted-cool-room-installation-company-brisbane",
    title: "Trusted Cool Room Installation Company Brisbane: From Design to Install",
    description:
      "How Cherry Refrigeration covers every stage of a Brisbane cool room project, from site assessment and heat load design through panels, install and commissioning. Plus FAQs grounded in Australian industry practice.",
    date: "2026-05-05",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      {
        copy: "Choosing a cool room installer in Brisbane is mostly a question of who is accountable for which part of the job. A 'cheap' cool room often means three sub-contractors with three different warranties: the panel supplier blames the refrigeration crew, the refrigeration crew blames the sparky, and you are stuck in the middle. Cherry Refrigeration covers every stage in-house: site assessment, design, panel and refrigerant selection, on-site install, commissioning and ongoing service. One quote, one program, one point of contact.",
      },
      { copy: "This post walks through what each stage actually involves, what Australian industry practice says about getting it right, and the questions Brisbane operators ask us most often." },
      { heading: "1. Site assessment and brief", copy: "Every project starts with an on-site visit. The job survey records design ambient temperatures (a Brisbane summer afternoon can hit 38°C, which matters for condenser sizing), the room's footprint and height, the type and volume of stock that will be stored, throughput per day, the existing electrical supply and any tenancy or fitout constraints. Industry guidance from ASHRAE and refrigeration engineering literature is consistent: skipping the site survey is the single biggest cause of underperforming cool rooms." },
      { heading: "2. Heat load calculation and design", copy: "The total cooling load is built up from four components: transmission load (heat through the panels, typically 5 to 15% of total), product load (heat the stock brings with it, typically 55 to 75%), internal load (people, lights, motors, defrost, 10 to 15%), and air-change load every time the door opens. Standard practice is to add a ~10% safety factor on top. From there, panel thickness, refrigerant, condenser size and evaporator coil are all selected to match. Cherry produces the heat load workings, a CAD floor plan and the refrigerant plus electrical scope in writing before any quote goes out." },
      { heading: "3. Panel and door selection", copy: "Insulated sandwich panels are the envelope of the room: two steel skins around an injected polyurethane (or PIR) foam core. Industry practice on thickness (Esad, Refindustry, SQ Panel and others all converge on similar numbers): 80mm is fine for moderate cool room temperatures, 100 to 140mm is the right band for -10°C to -20°C freezer rooms, and 150 to 200mm is used for below -20°C and ultra-low applications. Door choice, hinged, sliding, glass view, heated freezer doors, or rapid roll for traffic, is matched to how the room actually gets used. The Insulated Panel Council of Australia (IPCA) Code of Practice covers fire risk mitigation and construction detail for panel structures and is the local reference we work to." },
      { heading: "4. Manufacture and lead time", copy: "Once design is signed off, panels are ordered and doors manufactured to the floor plan. For typical Brisbane jobs, panel and door lead times sit in the 1 to 2 week range. Specialist doors or stainless skin panels run longer. Cherry coordinates manufacture so that delivery lines up with site readiness. There is no benefit to panels turning up at a tenancy that is not ready for them." },
      { heading: "5. On-site install: refrigeration and electrical together", copy: "Install covers floor preparation, panel assembly, door fitting, refrigeration plant install (compressor, condenser, evaporator), refrigerant pipework, drain lines and the electrical scope (sub-mains, isolators, switchboard work, controller wiring). Because cool room installs touch both refrigeration and electrical regimes, this is where a lot of multi-trade jobs fall apart. Cherry coordinates both in-house. After hours and overnight installs are routine for Brisbane tenancies that cannot drop trade." },
      { heading: "6. Commissioning, testing and handover", copy: "Commissioning is where a cool room is proven. Pull down test from ambient to set point, refrigerant pressure and superheat checks, leak test on every joint, electrical Certificate of Test, controller programming and alarm test, and a final walk through of door operation, defrost cycles and HACCP-ready logging. Australian food safety practice (and the Food Standards Code) requires perishable cold storage to hold at or below 5°C, with frozen storage at -18°C or below. So we verify the room actually holds those targets under real load before signing off." },
      { heading: "7. Service plan and ongoing support", copy: "Installation is not really finished at handover. Door seals, refrigerant pressure, condenser cleanliness and controller calibration all drift with use, and most cool room failures are preventable with scheduled checks. Cherry offers monthly, quarterly or biannual service plans, with a HACCP-compliant logbook entry every visit. Service plan customers also get priority response on breakdowns." },
      { copy: "If you are sourcing quotes for a Brisbane cool room install, ask each company who actually does the design, who holds the refrigeration licence, who holds the electrical licence, and what is covered in the quote versus what is a variation. Single-trade, single-quote installs are slower to start but almost always smoother to finish." },
    ],
    faqs: [
      { q: "Is a cool room the same as a cold room?", a: "Yes. Cool room and cold room are two names for the same thing in Australia. Cool room is the more common consumer search term, cold room is common in industrial and food-safety literature." },
      { q: "What temperature should a Brisbane cool room hold?", a: "Cool rooms typically run 0 to 4°C. The Australian Food Standards Code requires perishable cold storage to be at or below 5°C. Freezer rooms are typically -18°C to -25°C." },
      { q: "What panel thickness do I need?", a: "80mm for moderate cool room work, 100 to 140mm for freezer rooms down to -20°C, and 150 to 200mm for below -20°C. Brisbane summer ambient pushes us toward the upper end of each band. We size off heat load, not catalogue defaults." },
      { q: "How long does a typical install take?", a: "Most Brisbane cool rooms are commissioned 4 to 10 working days from sign off, plus 1 to 2 weeks of design and panel manufacture lead time. We commit to a fixed completion date in the quote." },
      { q: "What refrigerants do you use?", a: "Low GWP refrigerants by default: R448A or R449A on medium temperature systems and R454C on low temperature where the plant supports it. We will not sell R404A on a new install." },
      { q: "Do I need council or a private certifier?", a: "For most cool rooms inside an existing tenancy, no council approval is required. If structural work, fire compartmentation or new external plant is involved, a private certifier will usually need to sign off. We tell you up front and prepare drawings if needed." },
      { q: "What licences should a cool room installer hold in Queensland?", a: "Three regimes apply: QBCC for the building work, an ARC Refrigerant Trading Authorisation for handling refrigerant, and an open electrical licence for the wiring. A reputable installer either holds all three in-house or works with long-term licensed partners and can produce the licence numbers on request." },
      { q: "How is a cool room sized?", a: "From throughput, not peak stock. We count pallets or shelving units, add walking aisle, add door swing and add a growth buffer. Then we run a heat load calc summing transmission, product, internal and air-change loads, and add a ~10% safety factor before sizing the plant." },
      { q: "Do you provide ongoing service after install?", a: "Yes. Service plans are monthly, quarterly or biannual depending on traffic and risk. Each visit covers refrigerant pressure and superheat, condenser and evaporator cleaning, seal and heater wire inspection, controller calibration and a HACCP-ready logbook entry." },
      { q: "What is included in your fixed price quote?", a: "Design, panels, doors, refrigeration plant, electrical scope, commissioning, certification and a 30-day post-install tune up. Variations only apply when scope changes are requested in writing." },
    ],
    sources: [
      { label: "Australian Cold Storage Guidelines (RemaxDoors)", url: "https://news.remaxdoors.com/australian-cold-storage-guidelines-preserve-food-quality-and-safety" },
      { label: "Cooling load calculation, The Engineering Mindset", url: "https://theengineeringmindset.com/cooling-load-calculation-cold-room/" },
      { label: "AIRAH: walk-in cool room and freezer research project", url: "https://airah.org.au/Common/Uploaded%20files/Archive/Advocacy/2018/2018-AIRAH-WICF-findings-and-recommendations.pdf" },
      { label: "Insulated Panel Council of Australia, Code of Practice", url: "https://insulatedpanel.org.au/" },
    ],
  },

  {
    slug: "cool-room-installation-cost-brisbane",
    title: "What Affects Cool Room Install Cost in Brisbane",
    description:
      "Every Brisbane cool room is priced differently. Here is what actually moves the number, and why Cherry Refrigeration quotes each job on-site.",
    date: "2025-09-08",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      { copy: "If you have called three Brisbane refrigeration companies for a cool room quote, you have probably had three different numbers. The variation is not usually margin. It is scope. Here is what actually moves the price on a cool room install, so you know what to expect before we walk on site." },
      { copy: "Six variables drive most of the difference between quotes: panel thickness (100mm vs 150mm), refrigerant choice, condenser sizing for our climate, the door package, electrical sub-mains, and whether the floor needs an insulated panel or can sit on slab. Tenancy fitout requirements and council approvals sit on top." },
      { copy: "Cherry Refrigeration custom quotes every install after an on-site measure up. Because no two cool rooms are the same (floor plan, stock throughput, existing electrical, door traffic, tenancy access), we do not publish prices. Instead you get a written fixed price quote inside 24 business hours that covers design, panels, refrigeration, electrical, doors, commissioning and certification." },
      { copy: "The number you sign is the number you pay. No add-ons, no scope creep. If you want an accurate figure for your specific site, submit the quick quote form and Keith will book in a free assessment." },
    ],
  },

  {
    slug: "cool-room-vs-cold-room",
    title: "Cool Room vs Cold Room: Is There a Difference?",
    description:
      "Short answer: no. Long answer: 'cool room' is the popular Australian consumer term and 'cold room' is more industrial. Here is what actually varies room to room.",
    date: "2025-08-22",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      { copy: "Google searches for 'cool room' outnumber 'cold room' in Australia by a wide margin. But if you read a HACCP audit, a QBCC form, or an ASHRAE spec, you will see 'cold room' used interchangeably. So no, there is no technical difference. Every 'cool room' in this country is a 'cold room' and vice versa." },
      { copy: "What actually changes between rooms is temperature range and panel spec. A chiller holds 0 to 5°C for fresh produce, dairy, prepped foods, drinks, flowers and pharmacy stock. It uses 100mm panels, standard doors and medium temperature compressors." },
      { copy: "A freezer room holds -18°C to -25°C for frozen meat, seafood, ice cream, dough and long term frozen stock. It uses 150mm panels, heated doors, low temperature compressors and pump down circuits." },
      { copy: "Running cost for the same physical size? A freezer room burns 2 to 3 times the electricity of a chiller. If you only need 5 to 10% of your stock frozen, a combi cool room and freezer (one box, two zones, one plant) is almost always the right answer." },
    ],
  },

  {
    slug: "energy-efficient-cool-rooms-brisbane",
    title: "Energy Efficient Cool Rooms in Brisbane: Where the Savings Actually Are",
    description:
      "Brisbane summers are getting hotter. Here is where the real energy savings live in a modern cool room, and which 'green features' are mostly marketing.",
    date: "2025-08-05",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Energy",
    body: [
      { copy: "Cool room running cost has more to do with envelope and door behaviour than the compressor. A poorly sealed door costs more than a one-tier upgrade in compressor efficiency." },
      { copy: "Real wins, in order: 150mm panels on freezer rooms, well sealed self closing doors with fast roll secondary doors on high traffic openings, EC fan evaporators (saves 30 to 50% on fan energy), variable speed condensers, condenser shading and clearance." },
      { copy: "Marketing wins (less impactful than they sound): exotic refrigerants on small rooms, smart controllers that mostly turn fans down anyway, anything labelled 'eco' without a kWh number behind it." },
      { copy: "On a typical Brisbane restaurant cool room, the package above cuts running cost 25 to 40% versus a 10-year-old install. We model it before quoting." },
    ],
  },

  {
    slug: "cool-room-sizing-guide",
    title: "Cool Room Sizing Guide: Do Not Pay for Volume You Will Not Use",
    description:
      "How to size a cool room properly: pallet maths, door clearance, shelving depth, throughput and growth allowance, without overbuilding.",
    date: "2025-07-19",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      { copy: "Most over-spec'd cool rooms come from sizing on stock, not throughput. The right way: count pallets or shelving units, add walking aisle, add door swing, add a 20% growth buffer." },
      { copy: "A standard chep pallet is 1165mm × 1165mm. Two pallets wide plus a 900mm aisle plus shelving on one wall equals roughly 4.5m wide. Depth is set by stock days × pallets per day." },
      { copy: "If you are going hand stack on shelving, plan 600mm deep shelves on three walls and 900mm clear in the centre. Anything tighter and your team will not restock properly." },
      { copy: "Door size matters: a 900mm × 1900mm door is fine for hand stack. If you are rolling pallets you need 1200mm × 2100mm minimum, and a strip curtain on the inside." },
    ],
  },

  {
    slug: "haccp-cool-room-checklist-brisbane",
    title: "HACCP Cool Room Checklist for Brisbane Food Businesses",
    description:
      "What auditors actually check on cool rooms in Queensland: temperatures, calibration, logbooks, seals, and how to be ready every time.",
    date: "2025-07-02",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Compliance",
    body: [
      { copy: "The HACCP audit is not out to catch you. It is out to prove your cold chain is documented. Six things every Queensland food business should have ready." },
      { copy: "1. A daily temperature log, signed. 2. Calibrated probes (NATA traceable, calibrated annually). 3. A door seal inspection record. 4. A maintenance logbook from your refrigeration mechanic. 5. A corrective action record for any excursion. 6. Refrigerant gas and leak test records." },
      { copy: "Cherry Refrigeration leaves a complete logbook entry every service visit, with date, technician licence, work performed and refrigerant data. Auditors love it. Your kitchen managers love it more." },
    ],
  },

  {
    slug: "cool-room-not-cooling-troubleshooting",
    title: "Cool Room Not Cooling? Brisbane Troubleshooting Checklist",
    description:
      "Before you call us, run this 5-minute checklist. Half the time you will fix it yourself, and we will respect you for trying.",
    date: "2025-06-14",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Troubleshooting",
    body: [
      { copy: "Cool room creeping up over 5°C? Run this in order before you call." },
      { copy: "1. Check the door seal (close on a piece of paper, pull it out). If it slides easily, the seal is gone. 2. Check the condenser coil outside: clean? clear of leaves and lint? 3. Check the evaporator inside: iced up? 4. Check the thermostat set point: has someone bumped it? 5. Listen to the compressor: running? cycling on/off rapidly?" },
      { copy: "Iced up evaporator usually means defrost timer or heater failure. Rapid cycling usually means refrigerant pressure issue. Hot condenser fan usually means motor on its way out." },
      { copy: "If you have got temp creeping past 8°C and stock at risk, call us. Same day Brisbane response, 24/7 emergency line." },
    ],
  },

  {
    slug: "qbcc-licensed-cool-room-installer-brisbane",
    title: "Why Your Cool Room Installer Should Be QBCC Licensed",
    description:
      "QBCC, ARC, electrical: the three licences a Brisbane cool room installer should hold, and what each one actually covers.",
    date: "2025-05-30",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Compliance",
    body: [
      { copy: "Cool room installs in Queensland touch three licensing regimes, and a legitimate installer holds all three. QBCC for the building work (panels are a structure under QBCC). ARC for the refrigeration handling. An open electrical licence for the wiring." },
      { copy: "A reputable installer either holds all three licences in-house or works with a long term licensed partner, and can hand you the licence numbers on the spot." },
      { copy: "Ask anyone quoting your job: 'What is your QBCC licence number? Your ARC number? Your electrical licence?' If they hesitate or hand it off to a sub-contractor, walk away." },
    ],
  },

  {
    slug: "low-gwp-refrigerant-retrofit-brisbane",
    title: "Low GWP Refrigerant Retrofits: What Is Changing in 2025/26",
    description:
      "R404A is on the way out. Here is what Brisbane operators with R404A or R134a plant need to know about retrofits to R448A, R449A and R454C.",
    date: "2025-05-12",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Refrigerants",
    body: [
      { copy: "R404A's GWP of 3,922 has put it in the regulators' sights worldwide. Australian phase down quotas are tightening every year, and the gas price is climbing with it." },
      { copy: "Most existing R404A medium temp systems retrofit cleanly to R448A or R449A: same oil, same expansion device in many cases, 5 to 10% efficiency improvement. Low temp R404A systems retrofit to R449A or, for newer plant, R454C." },
      { copy: "If you have got R134a on a chiller, R513A is a near drop-in. R22 systems (still out there) need a full plant upgrade, but power savings often pay it back in 3 to 5 years." },
      { copy: "Cherry Refrigeration runs an audit and retrofit program for Brisbane operators on legacy gases. Call us before the next gas top up bill arrives." },
    ],
  },

  {
    slug: "cool-room-door-seal-replacement",
    title: "Cool Room Door Seals: When to Replace and How to Tell",
    description:
      "Door seals are the cheapest part of your cool room and the biggest source of energy loss when they go. Here is the 30 second test.",
    date: "2025-04-25",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Maintenance",
    body: [
      { copy: "30 second seal test: close the door on a piece of A4 paper. Try to slide it out. If it slides easily, the seal is compressed and air is leaking past it." },
      { copy: "Seals last 5 to 8 years on a cool room, 3 to 5 on a freezer (where the heater wire bakes them faster). On a busy kitchen door, halve those numbers." },
      { copy: "Bad seals cost more than just energy: they let warm humid air in, your evaporator ices up, defrost cycles run longer, and your door frame heater wire works overtime. The cascade gets expensive." },
      { copy: "Replacement is a 30 minute job per door. We carry seals for every common Australian profile." },
    ],
  },

  {
    slug: "starting-a-cafe-brisbane-cool-room-guide",
    title: "Opening a Cafe in Brisbane? Your Cool Room Game Plan",
    description:
      "A cool room timeline for first-time Brisbane cafe operators: from lease signing to opening day.",
    date: "2025-04-04",
    updated: "2026-09-30",
    author: "Keith Cherry",
    category: "Buying Guides",
    body: [
      { copy: "Cool room is one of the longer lead time items in a cafe fitout, and it touches plumbing, electrical and council approval. Get on it early." },
      { copy: "Week 1 (lease signed): book a measure up. We produce a CAD floor plan and a fixed price quote within 5 working days, plus a tenancy compliance letter for your landlord." },
      { copy: "Week 2 to 3: design sign off, deposit, panel manufacture. We coordinate with your shopfitter on penetrations, drains and power layout." },
      { copy: "Week 4 to 5: install over 4 to 6 days, commissioning, certification. Hand you a complete documentation pack for your council and HACCP submissions." },
      { copy: "Open day: room running, logbook started, training delivered. We come back at the 30 day mark for a free tune up." },
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

// Legacy blog slug -> new slug map (used by next.config redirects).
export const legacyBlogSlugMap: Record<string, string> = {
  "cold-room-installation-cost-brisbane-2025": "cool-room-installation-cost-brisbane",
  "cold-room-vs-freezer-room": "cool-room-vs-cold-room",
  "energy-efficient-cold-rooms-brisbane": "energy-efficient-cool-rooms-brisbane",
  "cold-room-sizing-guide": "cool-room-sizing-guide",
  "haccp-cold-room-checklist-brisbane": "haccp-cool-room-checklist-brisbane",
  "cold-room-not-cooling-troubleshooting": "cool-room-not-cooling-troubleshooting",
  "qbcc-licensed-cold-room-installer-brisbane": "qbcc-licensed-cool-room-installer-brisbane",
  "cold-room-door-seal-replacement": "cool-room-door-seal-replacement",
  "starting-a-cafe-brisbane-cold-room-guide": "starting-a-cafe-brisbane-cool-room-guide",
  "trusted-cold-room-installation-company-brisbane": "trusted-cool-room-installation-company-brisbane",
};
