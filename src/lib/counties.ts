export type County = {
  id: string;
  name: string;
  state: "Iowa" | "Illinois";
  stateAbbr: "IA" | "IL";
  seat: string;
  courthouse: string;
  towns: string[];
  image: string;
  imageAlt: string;
  copy: string[];
  related: string[]; // practice-area slugs
};

// County seats and courthouse names are listed for orientation only and are
// flagged on the pre-launch checklist for verification before publishing.
export const counties: County[] = [
  {
    id: "scott-county-ia",
    name: "Scott County",
    state: "Iowa",
    stateAbbr: "IA",
    seat: "Davenport",
    courthouse: "Scott County Courthouse, Davenport",
    towns: ["Davenport", "Bettendorf", "Eldridge", "Walcott", "Le Claire"],
    image: "county-4",
    imageAlt: "Steel bridge over the Mississippi River in morning fog near Davenport, Scott County, Iowa",
    copy: [
      "Scott County is home base. Our office sits on Utica Ridge Road in north Davenport, a short drive from Bettendorf, Eldridge, Walcott and Le Claire, and minutes from the county courthouse downtown. Davenport is also where the federal court for the Southern District of Iowa sits, which matters for the employment, civil-rights and federal-sector matters Stephen Fieweger handles.",
      "Whether you were hurt on Interstate 80, let go from a job in the Bettendorf business corridor, or are running a company with a contract dispute, you can meet with us in person, close to home. Scott County residents get the advantage of an attorney who has practiced in these courtrooms since 1987 and knows how local judges and juries tend to approach a case.",
    ],
    related: ["personal-injury", "general-employment-law", "commercial-litigation"],
  },
  {
    id: "muscatine-county-ia",
    name: "Muscatine County",
    state: "Iowa",
    stateAbbr: "IA",
    seat: "Muscatine",
    courthouse: "Muscatine County Courthouse, Muscatine",
    towns: ["Muscatine", "Wilton", "West Liberty"],
    image: "county-1",
    imageAlt: "Mississippi River lock and dam at sunrise in Muscatine County, Iowa",
    copy: [
      "Muscatine County stretches from the river city of Muscatine west to Wilton and West Liberty. It is a working county, with manufacturing, food processing and agriculture employing a large share of residents. That means wage-and-hour questions, overtime disputes, workplace injuries and FMLA leave problems come up often.",
      "We represent Muscatine County employees and employers alike, along with people injured in crashes on Highway 61 and Highway 38 or hurt on someone else's property. Cases filed here are typically heard at the county courthouse in Muscatine, and federal employment claims go to the Southern District of Iowa. Our Davenport office is about a 40-minute drive, and we can often handle early conversations by phone. If your matter is a fit, we will explain the process, the deadlines and your options before you commit to anything.",
    ],
    related: ["wage-and-hour-disputes", "family-leave-medical-act", "personal-injury"],
  },
  {
    id: "clinton-county-ia",
    name: "Clinton County",
    state: "Iowa",
    stateAbbr: "IA",
    seat: "Clinton",
    courthouse: "Clinton County Courthouse, Clinton",
    towns: ["Clinton", "DeWitt", "Camanche"],
    image: "county-2",
    imageAlt: "Rolling farmland and a red barn at golden hour in Clinton County, Iowa",
    copy: [
      "Clinton County sits north of the Quad Cities along the Mississippi, with Clinton, Camanche and DeWitt as its principal communities. Its mix of industrial employers, rail, river commerce and family farms produces a steady range of legal problems: on-the-job disputes, business contract fights and serious injuries on rural roads.",
      "Stephen Fieweger represents Clinton County individuals, small businesses and non-profit organizations. County matters are generally heard at the courthouse in Clinton. Because Clinton sits directly across the river from Fulton and Whiteside County, Illinois, some disputes cross the state line. Being licensed in both Iowa and Illinois lets us handle those cases without handing you off to another firm. We will tell you early which state's law applies, which deadlines matter and what a realistic path forward looks like for your situation.",
    ],
    related: ["general-employment-law", "commercial-litigation", "personal-injury"],
  },
  {
    id: "rock-island-county-il",
    name: "Rock Island County",
    state: "Illinois",
    stateAbbr: "IL",
    seat: "Rock Island",
    courthouse: "Rock Island County Justice Center, Rock Island",
    towns: ["Rock Island", "Moline", "East Moline", "Milan", "Silvis"],
    image: "county-5",
    imageAlt: "Arched bridge over the Mississippi River at dusk, connecting the Quad Cities in Rock Island County, Illinois",
    copy: [
      "Rock Island County is the Illinois half of the Quad Cities: Rock Island, Moline, East Moline, Milan and Silvis. Thousands of residents work at the Rock Island Arsenal and other federal facilities, which makes federal-sector employment law especially relevant here. Discrimination, retaliation and EEO process questions for federal workers are a core part of what we do.",
      "Illinois law differs from Iowa law in important ways, including deadlines, fault rules and employment statutes. Stephen Fieweger is licensed in Illinois, has argued before the Illinois Supreme Court, and practiced for more than 25 years at his father's Quad Cities firm. Rock Island County cases are typically heard in Rock Island, and our Davenport office is just across the river. For most clients, it is a shorter drive than crossing their own county.",
    ],
    related: ["federal-sector-employment-law", "general-employment-law", "personal-injury"],
  },
  {
    id: "henry-county-il",
    name: "Henry County",
    state: "Illinois",
    stateAbbr: "IL",
    seat: "Cambridge",
    courthouse: "Henry County Courthouse, Cambridge",
    towns: ["Kewanee", "Geneseo", "Cambridge"],
    image: "county-6",
    imageAlt: "Interstate highway through cornfields at golden hour in Henry County, Illinois",
    copy: [
      "Henry County, Illinois, lies east of the Quad Cities along Interstate 80 and Interstate 74, with Kewanee, Geneseo and the county seat of Cambridge as its principal towns. Agriculture, manufacturing and small business drive the local economy, and highway traffic brings its share of serious crashes.",
      "We help Henry County residents with personal injury claims, employment problems and business disputes under Illinois law. County matters are usually heard in Cambridge. Many clients prefer to start with a phone call to (563) 424-1982; if your matter is a fit, we will set a time to review your documents and explain how Illinois courts are likely to view your situation before you make any decisions. There is no charge for that first conversation.",
    ],
    related: ["personal-injury", "commercial-litigation", "wage-and-hour-disputes"],
  },
  {
    id: "mercer-county-il",
    name: "Mercer County",
    state: "Illinois",
    stateAbbr: "IL",
    seat: "Aledo",
    courthouse: "Mercer County Courthouse, Aledo",
    towns: ["Aledo", "Viola", "Keithsburg"],
    image: "county-3",
    imageAlt: "Brick small-town main street at dusk in Mercer County, Illinois",
    copy: [
      "Mercer County is a rural county south of Rock Island County, anchored by the county seat of Aledo along with Viola and the river town of Keithsburg. Residents here often work for small employers, farms or public agencies, or commute into the Quad Cities.",
      "Small-town cases deserve the same preparation as big-city ones. We represent Mercer County residents in personal injury, employment and family matters, and we advise local businesses and non-profits on disputes before they grow. Cases in the county are typically heard in Aledo. Because many Mercer County families also have ties across the river in Iowa, it helps to work with an attorney licensed in both states who can explain how each state's rules apply. We return calls promptly and keep you informed.",
    ],
    related: ["personal-injury", "general-employment-law", "family-law"],
  },
  {
    id: "whiteside-county-il",
    name: "Whiteside County",
    state: "Illinois",
    stateAbbr: "IL",
    seat: "Morrison",
    courthouse: "Whiteside County Courthouse, Morrison",
    towns: ["Sterling", "Rock Falls", "Morrison", "Fulton"],
    image: "county-7",
    imageAlt: "Rock River dam and riverside town at sunset in Whiteside County, Illinois",
    copy: [
      "Whiteside County runs from Fulton on the Mississippi east to the twin cities of Sterling and Rock Falls on the Rock River, with Morrison as the county seat. It is a region of manufacturers, distribution centers and family farms, along with a sizable public workforce.",
      "We handle Whiteside County employment disputes, wage claims, injury cases and business litigation under Illinois law, for workers and employers alike. Local matters are generally heard at the courthouse in Morrison. Fulton sits directly across the river from Clinton, Iowa, so cross-border questions come up regularly. Stephen Fieweger is licensed in both states and has practiced in the region since 1987, so he can explain early on which state's rules apply and what that means for your case.",
    ],
    related: ["general-employment-law", "wage-and-hour-disputes", "commercial-litigation"],
  },
];
