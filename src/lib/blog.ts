export type BlogCategory = "Personal Injury" | "Employment" | "Medical Malpractice" | "Business";

export type Post = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  image: string;
  imageAlt: string;
  practice: string; // related practice slug
  outline: string[];
  featured?: boolean;
};

// Starter articles. Full posts are written in phase two; until then each
// article URL renders a summary page that is excluded from indexing.
export const posts: Post[] = [
  {
    slug: "what-to-do-after-a-car-accident-in-iowa",
    title: "What to Do After a Car Accident in Iowa",
    category: "Personal Injury",
    excerpt: "The first days after a crash shape the claim that follows. A practical checklist for protecting your health, your evidence and your rights.",
    image: "pi-hero-card",
    imageAlt: "Wet road at dusk with tail-lights, illustrating what to do after a car accident in Iowa",
    practice: "personal-injury",
    outline: [
      "Get medical care, even if you feel fine",
      "Call the police and request a copy of the report",
      "Document the scene, the vehicles and your injuries",
      "Be careful what you say to the other driver's insurer",
      "Know the general two-year filing deadline",
    ],
    featured: true,
  },
  {
    slug: "do-i-have-an-fmla-claim",
    title: "Do I Have an FMLA Claim? Who Is Covered and for How Long",
    category: "Employment",
    excerpt: "Employer size, hours worked and the reason for leave all matter. How to tell whether the Family and Medical Leave Act protects you.",
    image: "fmla-hero-card",
    imageAlt: "Kitchen table with calendar and coffee, illustrating FMLA leave eligibility",
    practice: "family-leave-medical-act",
    outline: [
      "Which employers the FMLA covers",
      "The 12-month and 1,250-hour eligibility rules",
      "Qualifying reasons for leave, including military family leave",
      "Interference versus retaliation claims",
    ],
  },
  {
    slug: "unpaid-overtime-exempt-or-hourly",
    title: "Unpaid Overtime: Are You Exempt or Hourly?",
    category: "Employment",
    excerpt: "A salary and a manager title do not automatically mean you lose overtime. What actually determines exempt status.",
    image: "wage-hero-card",
    imageAlt: "Vintage punch clock and timesheets, illustrating unpaid overtime and exempt status",
    practice: "wage-and-hour-disputes",
    outline: [
      "Why job duties matter more than job titles",
      "Off-the-clock work that must be paid",
      "How Iowa and Illinois rules add to federal law",
      "How far back you can recover",
    ],
  },
  {
    slug: "what-counts-as-medical-malpractice-in-iowa",
    title: "What Counts as Medical Malpractice in Iowa?",
    category: "Medical Malpractice",
    excerpt: "A bad outcome is not always negligence. The two things every malpractice claim must show, and why omissions count too.",
    image: "medmal-hero-card",
    imageAlt: "Hospital corridor in soft light, illustrating what counts as medical malpractice in Iowa",
    practice: "medical-malpractice",
    outline: [
      "A mistake, by act or omission, below the standard of care",
      "Harm caused by that mistake",
      "The role of independent medical review",
      "Why the deadlines are short",
    ],
  },
];

export const categories: BlogCategory[] = ["Personal Injury", "Employment", "Medical Malpractice", "Business"];

// Legacy "News & Events" items from the old site, linked out and worded neutrally.
// [ATTORNEY: approve news links and descriptions before launch]
export const inTheNews = [
  {
    title: "Trial begins in political-discrimination lawsuit against former University of Iowa law dean",
    source: "WQAD News 8",
    year: "2012",
    href: "https://www.wqad.com/article/news/local/drone/8-in-the-air/trial-starts-in-liberal-bias-lawsuit-against-former-university-of-iowa-law-dean/526-969b486b-bcb5-4dc4-bec7-329eb788b993",
  },
  {
    title: "Jury returns split result on claims in University of Iowa law school hiring case",
    source: "The Chronicle of Higher Education",
    year: "2012",
    href: "https://www.chronicle.com/article/jury-splits-on-claims-in-case-alleging-liberal-bias-in-hiring-at-iowa-law-school/",
  },
  {
    title: "Eighth Circuit opinion in Wagner v. Jones",
    source: "U.S. Court of Appeals for the Eighth Circuit",
    year: "2014",
    href: "https://ecf.ca8.uscourts.gov/opndir/14/07/131650P.pdf",
  },
];
