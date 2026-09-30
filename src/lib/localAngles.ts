// Small data map used by the /service-area/[city]/[service] pages so each page
// has a genuinely different opening paragraph and customer profile, not just
// a swapped city name. Every location has a note about its dominant industry
// mix, which we blend into the page copy. Real local project write-ups belong
// in the projects data + are surfaced when siteConfig.hasPublishedProjects
// becomes true. Until then the "sample project" slot renders a placeholder
// prompting Keith to send one over.

export const localAngles: Record<string, {
  customers: string;
  landmarks: string;
  climateNote: string;
}> = {
  "brisbane-cbd": {
    customers:
      "cafes, restaurants, hotels, hospitals and inner-city tenancies with strict body-corp fitout rules",
    landmarks: "Queen Street, Fortitude Valley, South Brisbane, Kangaroo Point and the Fish Lane precinct",
    climateNote: "CBD tenancies often already share power, so we spec inverter plant and check switchboard capacity first",
  },
  "gold-coast": {
    customers:
      "beachfront hospitality, resort kitchens, seafood retailers and industrial parks along the M1",
    landmarks: "Surfers Paradise, Broadbeach, Burleigh Heads, Robina and the Yatala industrial estate",
    climateNote: "coastal salt air and high humidity, so we default to marine-grade condensers and stainless-skin panels",
  },
  ipswich: {
    customers:
      "clubs, RSLs, growing retail centres and light industrial tenancies from Booval to Springfield Lakes",
    landmarks: "Ipswich CBD, Booval, Springfield Lakes, Ripley and the Rosewood corridor",
    climateNote: "the western climate range means condenser sizing is calculated to a hotter design ambient than the coast",
  },
  logan: {
    customers:
      "Asian grocers, halal butchers, restaurants and industrial estates from Springwood down to Beenleigh",
    landmarks: "Springwood, Beenleigh, Underwood, Browns Plains, Jimboomba and the Crestmead industrial estate",
    climateNote: "we quote three-phase upgrades where the existing tenancy sub-main will not carry the new load",
  },
  redlands: {
    customers:
      "bayside seafood retailers, cafes, medical centres, marine tenancies and small food processors",
    landmarks: "Cleveland, Capalaba, Victoria Point, Wellington Point, Birkdale and the bay islands",
    climateNote: "bayside humidity, so we default to corrosion-resistant condensers and stainless-skin panels",
  },
  "moreton-bay": {
    customers:
      "bakeries, franchise QSR, aged-care catering and light industrial fitouts from North Lakes to Bribie",
    landmarks: "North Lakes, Caboolture, Redcliffe, Strathpine, Bribie Island and Deception Bay",
    climateNote: "we run a fortnightly route north, so callouts are usually booked in within the same week",
  },
  "sunshine-coast": {
    customers:
      "boutique hospitality, breweries, hinterland grocers and holiday-park kitchens from Caloundra to Noosa",
    landmarks: "Maroochydore, Noosa, Caloundra, Mooloolaba, Buderim and the Sunshine Coast hinterland",
    climateNote: "coastal-grade plant on every install, and we bring hinterland-appropriate condensate management",
  },
  toowoomba: {
    customers:
      "regional butchers, IGA-style grocers, ag processors, feed-mill kitchens and Downs hospitality",
    landmarks: "Toowoomba CBD, Highfields, Drayton, Kearneys Spring, Wilsonton and Glenvale",
    climateNote: "the Downs' range climate from frost to 38°C summer afternoons dictates plant sizing",
  },
};
