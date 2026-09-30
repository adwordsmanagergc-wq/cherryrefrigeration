// FAQs per service page. Keys match the new service slugs. No em dashes.

export const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "cool-room-installation-brisbane": [
    { q: "Is a cool room the same as a cold room?", a: "Yes. Australians most commonly search 'cool room', while some industries call the same room a 'cold room' or 'coolroom'. All three describe a walk-in refrigerated room typically holding 0 to 5°C." },
    { q: "How long does a Brisbane cool room install take?", a: "Most are commissioned 4 to 10 working days from sign off, with 1 to 2 weeks lead time for design and panel manufacture. Industrial scale we commit to a fixed completion date in the quote." },
    { q: "Is the quote fixed?", a: "Yes. The price we quote is the price you pay. The only variations are for client-requested scope changes, signed off in writing." },
    { q: "Do you handle the electrical work?", a: "Yes, in-house. Mains, switchboard, isolators, sub-circuits and Certificate of Test all included in the single install quote." },
    { q: "Can you install while we are trading?", a: "Yes. After hours and overnight installs are routine. We coordinate to your trading hours." },
    { q: "What warranty do you offer?", a: "Workmanship warranty plus full manufacturer warranty registration on plant. Exact terms confirmed in your written quote." },
    { q: "Do you service after install?", a: "Yes. Service plans and breakdown response are available. First 30-day tune up is free on every install." },
  ],

  "cool-room-repairs-brisbane": [
    { q: "Are 'cool room repairs' and 'cold room repairs' the same thing?", a: "Yes. Cool room and cold room are two names for the same thing in Australia. We service both under one team." },
    { q: "Do you cover after hours emergencies?", a: "Yes. 24/7 emergency line for total breakdowns. Same-day across Greater Brisbane for stock-at-risk situations." },
    { q: "How fast can you get to me for cool room repairs near me?", a: "Same-day across Greater Brisbane Mon to Sat. Priority response for service plan customers, typically on site within 2 hours during business hours." },
    { q: "Is the diagnostic fee credited if I proceed?", a: "Yes. Our diagnostic fee is credited toward the repair cost if you proceed on the day." },
    { q: "Do you stock spare parts?", a: "Common parts are on every van. Major components are usually next-day from Brisbane wholesalers." },
    { q: "Can you provide temporary refrigeration?", a: "Yes. We can mobilise a trailer cool room or temporary plant if your room is down and stock is at risk." },
    { q: "Which cool room brands do you service?", a: "All makes and brands, Australian and imported. TODO(KEITH): confirm the specific brands you want listed here." },
    { q: "My cool room is not cooling. What should I check first?", a: "1. Check the door seal (close it on a piece of paper and try to slide it out). 2. Check the condenser outside is clean and clear. 3. Check the evaporator inside is not iced up. 4. Check the thermostat set point. If none of that fixes it, call us." },
  ],

  "cool-room-design-brisbane": [
    { q: "Is the design fee fixed?", a: "Design is included in our standard install package, free of charge if you proceed." },
    { q: "Do you produce engineering drawings?", a: "Yes. CAD floor plans, refrigeration sizing, electrical scope and tenancy drawings. Engineer sign off where required." },
    { q: "Will it pass council?", a: "We design to QBCC and council standards and provide the drawings your private certifier needs. Most internal cool rooms do not need council approval. We tell you up front if yours does." },
  ],

  "cool-room-doors-brisbane": [
    { q: "How long for a custom cool room door?", a: "Most custom doors are manufactured and fitted within 5 to 10 business days of measure up." },
    { q: "Can you replace seals on any door brand?", a: "Yes. We carry seals and hardware for every common Australian profile and most imports." },
    { q: "Glass view doors: how do they perform?", a: "Heated, double glazed display doors hold temp without fogging. They cost more to run than solid doors but are critical for retail." },
  ],

  "freezer-room-installation-brisbane": [
    { q: "How cold can you go?", a: "Standard freezer rooms run -18°C to -25°C. Blast freezer cells go to -35°C." },
    { q: "Do I need a combi cool room and freezer?", a: "If less than 30% of your stock needs freezing, a combi room is almost always cheaper to run and install than two separate rooms." },
    { q: "What is the warranty?", a: "Workmanship warranty plus full manufacturer warranty registration on plant. Exact terms confirmed in your written quote." },
  ],

  "commercial-refrigeration-brisbane": [
    { q: "Do you service display cases?", a: "Yes, every common brand. Service plans available for multi-store grocers and supermarkets." },
    { q: "Can you retrofit R22 or R404A?", a: "Yes. R22 systems usually need plant replacement, R404A retrofits cleanly to R448A or R449A in most cases." },
    { q: "Do you do glycol plant?", a: "Yes. Design, install and service. From single loop display systems to brewery scale chillers." },
  ],

  "air-conditioning-installation-brisbane": [
    { q: "What brands do you install?", a: "TODO(KEITH): confirm your preferred install brands." },
    { q: "How do you size the unit?", a: "Manual J heat load calculation using windows, insulation, occupancy and equipment. Never sized on square metres alone." },
    { q: "Do you handle the electrical?", a: "Yes. Dedicated circuits, isolators and switchboard work all in-house." },
  ],

  "air-conditioning-repair-brisbane": [
    { q: "How fast can you come out?", a: "Same-day across Greater Brisbane Mon to Sat. After hours emergency available." },
    { q: "Should I repair or replace?", a: "If the unit is over 10 years old, on R22, or has a major component failure, replacement is usually the smarter call. We quote both." },
    { q: "Do you carry parts?", a: "Common capacitors, fan motors, controllers and contactors on every van. Specialised parts are usually next-day." },
  ],

  "electrical-installation-brisbane": [
    { q: "Do you do residential work?", a: "Primarily commercial. We do residential work tied to a refrigeration or aircon install we are already on site for." },
    { q: "Do you provide Certificate of Test?", a: "Yes. Every install is tested and certified to AS/NZS 3000." },
    { q: "Can you upgrade my switchboard?", a: "Yes. Three-phase upgrades, RCD compliance and sub-main work all standard." },
  ],

  "cool-room-maintenance-brisbane": [
    { q: "What is included in a service visit?", a: "Refrigerant pressure and superheat checks, condenser and evaporator cleaning, seal and heater wire inspection, controller calibration, and a HACCP-ready logbook entry." },
    { q: "How often should I service?", a: "Quarterly is right for most cafes and small kitchens. Monthly for high throughput supermarkets, butchers, seafood, and pharmacy sites." },
    { q: "Do plan customers get priority?", a: "Yes. Typically on site within 2 hours during business hours for service plan customers." },
  ],

  "cool-room-regas-refrigerant-leak-repair-brisbane": [
    { q: "How do you actually find a leak?", a: "Calibrated electronic leak detector on every flare, braze, coil access point and Schrader. Dry nitrogen pressure test confirms the repair before recharge." },
    { q: "Which refrigerants do you carry?", a: "R448A, R449A, R454C, R513A, R134a. Legacy R404A and R22 for retrofit and service. All handled under an ARC Refrigerant Trading Authorisation." },
    { q: "Is regas covered by an ARC gas log?", a: "Yes. Every regas leaves a written gas log with quantity, gas type, technician licence and pressure results. Kept for your HACCP records and ARC reporting." },
    { q: "How much does a cool room regas cost?", a: "Custom quoted after diagnosis. Cost depends on room size, refrigerant type and whether a leak has to be repaired first. Fixed quote before any work." },
  ],

  "cool-room-door-seal-replacement-brisbane": [
    { q: "How long does a door seal last?", a: "5 to 8 years on a cool room, 3 to 5 on a freezer where the heater wire bakes the seal faster. On a busy kitchen door, halve those numbers." },
    { q: "How long does it take to fit a new seal?", a: "About 30 minutes on a standard hinged cool room door. Sliding and freezer doors take longer because of heater wire integration." },
    { q: "Can you replace seals on any brand of door?", a: "Yes. We carry every common Australian profile in stock and can source imports quickly." },
  ],

  "commercial-fridge-repairs-brisbane": [
    { q: "How fast can you come out?", a: "Same day across Greater Brisbane Mon to Sat. 24/7 emergency line for total breakdowns." },
    { q: "Do you service every brand?", a: "Yes. All major Australian and imported commercial brands, including display cabinets, prep tables, drink fridges and multi-decks." },
    { q: "Is the service call fee credited if I proceed?", a: "Yes. The flat rate service call is credited toward the repair cost if you proceed on the day." },
    { q: "Can you retrofit an old R22 or R404A fridge?", a: "Yes, where the plant supports it. We quote the retrofit versus full plant replacement side by side so you can make a numbers-based decision." },
  ],
};
