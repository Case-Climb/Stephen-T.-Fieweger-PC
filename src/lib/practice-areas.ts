export type Faq = { q: string; a: string };
export type Block = { heading: string; paragraphs?: string[]; bullets?: string[] };
export type Step = { title: string; text: string };

export type PracticeArea = {
  slug: string;
  title: string;
  short: string; // one-line descriptor (nav, home grid)
  summary: string; // two-line summary (hub cards)
  h1: string;
  metaTitle: string;
  metaDescription: string;
  promise: string;
  image: string;
  imageAlt: string;
  icon: IconName;
  notice?: string;
  intro: string[];
  blocks: Block[];
  processTitle: string;
  process: Step[];
  faqs: Faq[];
  related: string[]; // practice slugs; hub + contact are always appended
};

export type IconName =
  | "injury" | "medical" | "briefcase" | "flag" | "family-leave" | "clock" | "building" | "home";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "personal-injury",
    title: "Personal Injury",
    short: "Car crashes, falls, dog bites and other injuries caused by negligence.",
    summary: "Auto accidents, slip-and-falls, dog bites and premises injuries in Iowa and Illinois. Straight answers about fault, deadlines and what your claim is worth pursuing.",
    h1: "Davenport Personal Injury Attorney",
    metaTitle: "Davenport Personal Injury | Stephen T. Fieweger, P.C.",
    metaDescription: "Hurt in a crash, fall or dog bite in the Quad Cities? Davenport personal injury attorney Stephen T. Fieweger handles Iowa and Illinois claims. Free consult.",
    promise: "When someone else's carelessness hurts you, we investigate, build the evidence and push for a fair result in Iowa or Illinois.",
    image: "pi-hero",
    imageAlt: "Rain-slick two-lane road at dusk with tail-lights, representing car accident claims handled by a Davenport personal injury attorney",
    icon: "injury",
    intro: [
      "Personal injury law covers a wide range of situations: a driver who runs a red light on Kimberly Road, a store that leaves a spill on the floor, a neighbor's dog that bites a child. What these cases share is a simple question with a complicated answer. Did someone fail to act with reasonable care, and did that failure cause your injury?",
      "Stephen T. Fieweger has represented injured people in Iowa and Illinois since 1987. He is licensed in both states, which matters in the Quad Cities, where a crash on one side of the river can involve a driver, an insurer or a business from the other side.",
    ],
    blocks: [
      {
        heading: "What we handle",
        bullets: [
          "Auto accidents, including truck and motorcycle collisions",
          "Slip-and-fall and trip-and-fall injuries",
          "Dog bites and animal attacks",
          "Premises liability: unsafe stores, rental property and public spaces",
          "Other injuries caused by negligence",
        ],
      },
      {
        heading: "Fault is rarely all-or-nothing",
        paragraphs: [
          "Many people assume that if they made a mistake, they have no case. That is often not true. Both Iowa and Illinois use comparative fault, which means a court looks at how much each person contributed to what happened. [ATTORNEY: verify] In general, an injured person can still recover as long as their share of the fault is not greater than the other side's, although their recovery is reduced by their percentage of fault.",
          "Consider someone who walked past a posted wet-floor sign and slipped. That person may still have a claim, depending on how visible the sign was, how long the hazard had been there and what the business did about it. The answer depends on how a court is likely to view the facts. Part of our job is to explain that honestly at the start, so you can make an informed decision.",
        ],
      },
      {
        heading: "Why experience matters",
        paragraphs: [
          "Insurance companies evaluate claims based on how likely they are to lose in court. An attorney who has won cases before the Iowa Supreme Court and the Seventh and Eighth Circuit Courts of Appeals, and has successfully argued before the Illinois Supreme Court, brings a different kind of leverage to the negotiating table than one who never steps into a courtroom. We prepare every case as if it will be tried. That preparation is what produces fair settlements, and it is what protects you if the case does go to trial.",
        ],
      },
    ],
    processTitle: "How a personal injury case works",
    process: [
      { title: "Free consultation", text: "Tell us what happened. We review the basics, explain the deadlines that apply, and give you a straight assessment of whether the claim is worth pursuing." },
      { title: "Investigation & evidence", text: "We gather police reports, photos, witness statements, medical records and bills, and we document how the injury has affected your work and daily life." },
      { title: "Negotiation or trial", text: "We present the claim to the insurer and negotiate from strength. If a fair offer does not come, we are prepared to file suit and try the case." },
    ],
    faqs: [
      { q: "How long do I have to file a personal injury claim?", a: "As a general rule, both Iowa and Illinois give injured people two years from the date of injury to file a lawsuit. [ATTORNEY: verify] There are exceptions, and some claims against government bodies have much shorter notice requirements. Do not wait to find out which rules apply to you." },
      { q: "What if I was partly at fault?", a: "You may still have a claim. Iowa and Illinois both reduce, rather than eliminate, recovery when an injured person shares some of the blame, so long as their share is not greater than the other side's. [ATTORNEY: verify] We will look at the facts and tell you how a court is likely to see them." },
      { q: "Do I need to talk to the other driver's insurance company?", a: "You are generally not required to give a recorded statement to the other side's insurer, and it is usually wise to speak with an attorney first. Adjusters are trained to ask questions that can minimize your claim. You should still notify your own insurer as your policy requires." },
      { q: "What should I do right after an accident?", a: "Get medical attention, even if you feel fine. Call the police and ask for a report. Take photos of the scene, the vehicles and your injuries. Get names and contact information for witnesses. Keep every medical bill and record. Then call us before signing anything." },
      { q: "Do you handle cases in Illinois too?", a: "Yes. Stephen Fieweger is licensed in both Iowa and Illinois and represents clients in Rock Island, Henry, Mercer and Whiteside counties, as well as Scott, Muscatine and Clinton counties in Iowa." },
      { q: "What does the free consultation cover?", a: "We listen to what happened, review any documents you have, explain the deadlines and legal standards that apply, and tell you honestly whether we believe you have a viable claim. There is no charge and no obligation." },
    ],
    related: ["medical-malpractice", "commercial-litigation"],
  },
  {
    slug: "medical-malpractice",
    title: "Medical Malpractice",
    short: "Harm caused by a medical professional's mistake or omission.",
    summary: "A bad outcome is not always malpractice. We help you find out whether a doctor, nurse or technician's mistake or omission caused your harm.",
    h1: "Davenport Medical Malpractice Attorney",
    metaTitle: "Iowa Medical Malpractice Lawyer | Stephen T. Fieweger, P.C.",
    metaDescription: "Harmed by a medical mistake or omission? Davenport attorney Stephen T. Fieweger reviews medical malpractice claims in Iowa and Illinois. Call (563) 424-1982.",
    promise: "We find out what actually happened in your care and whether a medical professional's mistake caused your harm.",
    image: "medmal-hero",
    imageAlt: "Quiet hospital corridor in soft light, representing Iowa and Illinois medical malpractice claims",
    icon: "medical",
    intro: [
      "Medicine is not perfect, and the law does not require it to be. A treatment can fail, a surgery can have complications and a patient can get worse even when every provider did their job well. That is why a mistake, or a bad result, is not automatically medical malpractice.",
      "To bring a malpractice claim, you generally have to show two things. First, a doctor or other medical professional, such as a nurse or technician, made a mistake. Second, you were harmed because of that mistake. Both parts matter. A clear error that caused no injury is not a viable case, and neither is a serious injury that would have happened anyway.",
    ],
    blocks: [
      {
        heading: "Mistakes can be acts or omissions",
        paragraphs: [
          "Most people picture malpractice as something a provider did wrong: operating on the wrong site, giving the wrong medication or the wrong dose. But malpractice can also be something a provider failed to do. Missing a diagnosis, failing to order an obvious test, ignoring abnormal results or not following up on a warning sign are all omissions. When an omission falls below the accepted standard of care and causes harm, it is medical negligence just as surely as a wrongful act.",
        ],
      },
      {
        heading: "Who can be responsible",
        bullets: [
          "Physicians and surgeons",
          "Nurses and nurse practitioners",
          "Medical technicians and other licensed providers",
          "Hospitals, clinics and other facilities, in some circumstances [ATTORNEY: confirm]",
        ],
      },
      {
        heading: "Why these cases need careful work early",
        paragraphs: [
          "Malpractice cases turn on medical records, timelines and the opinions of other medical professionals about what should have been done. They also carry short, strict filing deadlines that differ between Iowa and Illinois, along with special procedural requirements. Missing one can end a case before it starts. If you suspect something went wrong in your care or a family member's, call promptly so the records can be gathered and reviewed while there is still time to act.",
          "We will be candid with you. Malpractice cases are demanding and expensive to prepare, and not every case that feels wrong turns out to be one the law will remedy. Our goal is to give you a clear, honest answer about yours.",
        ],
      },
    ],
    processTitle: "How we evaluate a malpractice claim",
    process: [
      { title: "Listen and gather records", text: "We hear your account, then obtain the complete medical records, not just the summaries, so we can build an accurate timeline of your care." },
      { title: "Independent medical review", text: "We have the care reviewed against the accepted standard by qualified medical professionals, which these cases almost always require." },
      { title: "Decide and act", text: "If the review supports a claim, we explain the path forward, meet the procedural requirements and pursue it. If it does not, we tell you plainly." },
    ],
    faqs: [
      { q: "Is every bad outcome malpractice?", a: "No. Malpractice requires a mistake by a medical professional, whether an act or an omission, that fell below the accepted standard of care, and harm caused by that mistake. Complications and poor results can happen even with good care." },
      { q: "How long do I have to bring a claim?", a: "Medical malpractice deadlines are short and strict, and they differ between Iowa and Illinois. There are also outer time limits that can apply even if you did not discover the problem right away. [ATTORNEY: verify] Call promptly; delay can permanently bar a claim." },
      { q: "Will my case need a medical expert's review?", a: "Almost always, yes. Courts generally require testimony from qualified medical professionals to explain what the standard of care was and how it was breached. Part of our early work is arranging that independent review." },
      { q: "What is an \"omission\" in a malpractice case?", a: "It is a failure to do something a reasonably careful provider would have done, such as failing to diagnose a condition, order a test, act on abnormal results or make a needed referral. Omissions can be medical negligence just like affirmative errors." },
      { q: "Can I bring a claim for a family member who died?", a: "In some cases, yes. Wrongful death claims arising from medical negligence are possible in both Iowa and Illinois, but who may bring them and how they are handled differ by state. [ATTORNEY: verify] We can explain the rules that apply to your family." },
      { q: "What should I bring to a consultation?", a: "Bring whatever you have: provider names, dates of treatment, discharge papers, bills, and your own notes about what happened and when. You do not need complete records; we can request those." },
    ],
    related: ["personal-injury"],
  },
  {
    slug: "general-employment-law",
    title: "General Employment Law",
    short: "Discrimination, retaliation, wrongful termination and workplace policies.",
    summary: "Representation for employees facing discrimination, retaliation or wrongful termination, and practical counsel for employers who want to get it right.",
    h1: "Davenport Employment Lawyer",
    metaTitle: "Davenport Employment Attorney | Stephen T. Fieweger, P.C.",
    metaDescription: "Davenport employment attorney for employees and employers: discrimination, retaliation, wrongful termination and workplace policies. Free consultation.",
    promise: "Whether you were wronged at work or you run the business, we give you a clear read on the law and a plan to act on it.",
    image: "employment-hero",
    imageAlt: "Empty modern office after hours, representing employment law matters in Davenport and the Quad Cities",
    icon: "briefcase",
    intro: [
      "Employment law sits where people's livelihoods meet a dense web of state and federal rules. Stephen T. Fieweger has won or successfully resolved cases involving employment discrimination, wrongful termination and federal and state administrative agency employment issues. He represents both employees and employers, and that two-sided experience makes him better at each.",
    ],
    blocks: [
      {
        heading: "If you're an employee",
        paragraphs: [
          "You may have a claim if you were treated unfairly at work because of who you are, or punished for standing up for your rights. We handle claims involving:",
        ],
        bullets: [
          "Discrimination based on race, gender, age, disability, marital status, religion or national origin",
          "Retaliation for reporting discrimination, safety problems or other unlawful conduct",
          "Unpaid wages and overtime",
          "Breach of employment contracts",
          "Family and Medical Leave Act and wage-and-hour violations",
        ],
      },
      {
        heading: "We review the evidence before we promise anything",
        paragraphs: [
          "Not every unfair firing is illegal. Iowa and Illinois are both generally at-will employment states, which means the question is usually not whether the decision was fair, but whether it was made for an unlawful reason. When you contact us, we set an appointment to review the evidence: emails, evaluations, texts, timelines and the people involved. Then we tell you whether we believe there is a viable claim.",
          "Different states have different procedures, and many claims must first be filed with an administrative agency like the EEOC, the Iowa Civil Rights Commission or the Illinois Department of Human Rights before a lawsuit can be brought. The deadlines for those filings can be short.",
        ],
      },
      {
        heading: "If you're an employer",
        paragraphs: [
          "The cheapest employment lawsuit is the one that never gets filed. We help businesses and non-profit organizations develop employee policies that prevent conflicts, train managers to apply them consistently, and handle discipline and terminations fairly and lawfully under state and federal law. When a charge or lawsuit does arrive, we defend it with the same preparation we bring to every trial.",
          "Employers often call us at the moment a decision is being made: a long-time employee is underperforming, a manager has received a complaint, or a worker has asked for leave or an accommodation. A short conversation before acting can prevent a claim that takes years to resolve.",
        ],
      },
    ],
    processTitle: "How we approach an employment matter",
    process: [
      { title: "Listen & learn", text: "We hear the full story and collect the documents: offer letters, handbooks, evaluations, messages and termination paperwork." },
      { title: "Research & strategize", text: "We identify the claims or defenses that apply, the agency deadlines in play, and the most efficient path to a result." },
      { title: "Go to work", text: "We file the charge, negotiate, mediate or litigate, keeping you informed at every step." },
    ],
    faqs: [
      { q: "How long do I have to file a discrimination charge?", a: "As a general rule, a charge must be filed within 300 days of the discriminatory act with the EEOC, the Iowa Civil Rights Commission or the Illinois Department of Human Rights, though state deadlines can differ and change. [ATTORNEY: verify] Missing the deadline can end the claim, so call as soon as possible." },
      { q: "Was I wrongfully terminated?", a: "Possibly. In an at-will state, an employer can generally fire someone for any reason that is not illegal. A termination may be unlawful if it was based on a protected characteristic, was retaliation for protected activity, violated public policy, or breached a contract. We review the facts to see which, if any, applies." },
      { q: "What is retaliation?", a: "Retaliation is when an employer takes adverse action, such as firing, demoting or cutting hours, because an employee engaged in protected activity, like reporting discrimination, filing a complaint or taking protected leave. Retaliation can be unlawful even when the underlying complaint is not proven." },
      { q: "Do you only represent employees?", a: "No. We represent both employees and employers. For businesses, we focus on prevention: sound policies, consistent practices and lawful terminations, along with defending claims when they arise." },
      { q: "What should I bring to my first meeting?", a: "Bring your offer letter or contract, the employee handbook, performance reviews, any termination or discipline paperwork, and a written timeline of key events with names and dates. Save relevant emails and texts, but do not take confidential company documents you are not entitled to." },
      { q: "Does it matter whether I worked in Iowa or Illinois?", a: "Yes. Each state has its own civil rights agency, statutes and procedures in addition to federal law. Stephen Fieweger is licensed in both states and can tell you which rules apply." },
    ],
    related: ["federal-sector-employment-law", "family-leave-medical-act", "wage-and-hour-disputes"],
  },
  {
    slug: "federal-sector-employment-law",
    title: "Federal Sector Employment Law",
    short: "EEO and discrimination claims for federal employees and applicants.",
    summary: "Federal employees and applicants have their own rules and very short deadlines. We help you navigate the EEO process and protect your rights.",
    h1: "Federal Employee Discrimination Attorney",
    metaTitle: "Federal Employment Lawyer | Stephen T. Fieweger, P.C.",
    metaDescription: "Federal employee discrimination attorney in Davenport serving the Quad Cities: Title VII, ADEA, Equal Pay Act, ADA and Section 1983 claims. Call (563) 424-1982.",
    promise: "Federal workers face a different process and tighter deadlines. We help you use that process to protect your career.",
    image: "federal-hero",
    imageAlt: "Neoclassical government building with an American flag, representing federal sector employment law",
    icon: "flag",
    intro: [
      "If you work for, or applied to work for, a federal agency, your discrimination claim follows a different path than a private-sector worker's. Federal employees generally must start with their agency's Equal Employment Opportunity (EEO) process, and the first deadline is measured in days, not months.",
      "In the Quad Cities, where thousands of people work at the Rock Island Arsenal and other federal facilities, these rules affect a lot of families. Stephen T. Fieweger also represents people serving federal, state and local government organizations, and has won or successfully resolved cases involving federal and state administrative agency employment issues.",
    ],
    blocks: [
      {
        heading: "The federal laws that protect you",
        bullets: [
          "Title VII of the Civil Rights Act of 1964: discrimination based on race, color, religion, sex or national origin",
          "Equal Pay Act of 1963: unequal pay for substantially equal work based on sex",
          "Age Discrimination in Employment Act of 1967: protects workers age 40 and older",
          "Immigration Reform and Control Act of 1986: discrimination based on citizenship status or national origin",
          "Titles I and V of the Americans with Disabilities Act of 1990: disability discrimination and related retaliation",
        ],
      },
      {
        heading: "Constitutional rights claims under Section 1983",
        paragraphs: [
          "When a state or local government actor violates someone's constitutional rights, such as freedom of speech or equal protection, federal law allows a civil claim under 42 U.S.C. Section 1983. Stephen Fieweger has tried or resolved a number of Section 1983 cases involving the deprivation of constitutional rights, and has won cases before the Seventh and Eighth Circuit Courts of Appeals.",
        ],
      },
      {
        heading: "Administrative agencies and appeals",
        paragraphs: [
          "Federal and public-sector employment disputes often move through administrative bodies before they ever reach a courtroom. Knowing how those agencies operate, what record you are building and how a decision can be appealed shapes the outcome. We help you make the right moves at each stage, from the first counselor contact through hearings, appeals and federal court.",
          "Federal employees often worry that speaking up will hurt their careers. Federal law prohibits retaliation for using the EEO process, and acting early, with good documentation, is usually the most reliable way to protect both your claim and your position.",
        ],
      },
    ],
    processTitle: "How we handle a federal sector claim",
    process: [
      { title: "Act on the deadline", text: "We confirm the dates that matter right away, starting with the short window to contact an EEO counselor." },
      { title: "Build the record", text: "We help you document the facts, identify comparators and witnesses, and present the strongest possible complaint." },
      { title: "Advocate at every level", text: "We represent you through investigation, hearing, appeal and, when appropriate, federal court." },
    ],
    faqs: [
      { q: "How quickly do I need to act as a federal employee?", a: "Very quickly. Federal employees and applicants generally must contact an EEO counselor at their agency within 45 days of the discriminatory act or personnel action. [ATTORNEY: verify] Missing that window can forfeit the claim." },
      { q: "Is the federal process different from the private sector?", a: "Yes. Private-sector employees usually file a charge with the EEOC or a state agency. Federal employees go through their own agency's EEO office first, followed by an investigation and options for a hearing or final agency decision, and then appeal or federal court." },
      { q: "Am I protected from age discrimination?", a: "If you are 40 or older, the Age Discrimination in Employment Act protects you from discrimination based on age in hiring, promotion, pay, discipline and termination." },
      { q: "What is a Section 1983 claim?", a: "It is a federal civil rights claim against someone acting under state or local government authority who violated your constitutional rights. Stephen Fieweger has tried or resolved a number of these cases." },
      { q: "I work at the Rock Island Arsenal. Can you help?", a: "Yes. We represent federal employees and applicants throughout the Quad Cities. Call us as early as possible so the deadlines are protected." },
      { q: "Can I be retaliated against for filing an EEO complaint?", a: "Retaliation for participating in the EEO process, or for opposing discrimination, is prohibited. If you experienced adverse treatment after complaining, that may be a separate claim." },
    ],
    related: ["general-employment-law", "family-leave-medical-act"],
  },
  {
    slug: "family-leave-medical-act",
    title: "Family and Medical Leave Act (FMLA)",
    short: "Denied leave, interference and retaliation under the FMLA.",
    summary: "Up to 12 weeks of job-protected leave is your right if you qualify. If your leave was denied or you were punished for taking it, call us.",
    h1: "FMLA Attorney in Davenport, Iowa",
    metaTitle: "FMLA Lawyer, Iowa & Illinois | Stephen T. Fieweger, P.C.",
    metaDescription: "Denied FMLA leave or punished for taking it? Davenport FMLA attorney Stephen T. Fieweger helps employees and employers in Iowa and Illinois. Free consultation.",
    promise: "If you were denied protected leave, or punished for taking it, we help you enforce the rights the FMLA gives you.",
    image: "fmla-hero",
    imageAlt: "Kitchen table with calendar, coffee and reading glasses in morning light, representing family and medical leave",
    icon: "family-leave",
    intro: [
      "The Family and Medical Leave Act of 1993 lets eligible employees take up to 12 weeks of unpaid, job-protected leave in a 12-month period to deal with serious health and family needs without losing their jobs. It is one of the most important workplace protections in federal law, and one of the most frequently misunderstood.",
    ],
    blocks: [
      {
        heading: "What the FMLA covers",
        bullets: [
          "Your own serious health condition",
          "Caring for a spouse, child or parent with a serious health condition",
          "Pregnancy and the birth of a child",
          "Placement of a child for adoption or foster care",
        ],
      },
      {
        heading: "Who is covered",
        paragraphs: [
          "The FMLA applies to private employers with 50 or more employees, to public agencies regardless of size, and to public and private elementary and secondary schools. To be eligible, you must generally have worked for the employer for at least 12 months and for at least 1,250 hours in the 12 months before your leave, at a location with enough employees nearby. [ATTORNEY: verify]",
          "During leave, your employer must continue your group health insurance on the same terms as if you were working. When you return, you are generally entitled to your same job or an equivalent one. Your employer may not harass you, interfere with your leave or retaliate against you for using it.",
        ],
      },
      {
        heading: "Rights for military families",
        paragraphs: [
          "The FMLA also protects military families. An eligible employee may take up to 26 weeks of leave in a single 12-month period to care for a service member with a serious injury or illness. Eligible employees may also take up to 12 weeks for qualifying exigencies arising from a family member's call to active duty in the Reserve or National Guard.",
        ],
      },
      {
        heading: "This gets complicated quickly",
        paragraphs: [
          "Intermittent leave, medical certifications, overlapping state leave laws, points-based attendance policies and return-to-work disputes all create room for mistakes, on both sides. If you have been denied leave, disciplined for absences that should have been protected, or let go during or after leave, call us. If you are an employer trying to handle a difficult leave request correctly, we can help you get it right the first time.",
        ],
      },
    ],
    processTitle: "What happens when you call",
    process: [
      { title: "Check eligibility", text: "We confirm whether the employer is covered and whether you met the service and hours requirements." },
      { title: "Review what happened", text: "We look at your leave requests, certifications, attendance records and any discipline or termination." },
      { title: "Enforce your rights", text: "We pursue interference or retaliation claims, or advise employers on a lawful course, as the facts require." },
    ],
    faqs: [
      { q: "Am I eligible for FMLA leave?", a: "Generally, yes if your employer has 50 or more employees (or is a public agency or school), you have worked there at least 12 months, and you worked at least 1,250 hours in the past 12 months. [ATTORNEY: verify] There are additional location-based rules, so call if you are unsure." },
      { q: "Is FMLA leave paid?", a: "No. FMLA leave is unpaid, although you may be able, or required, to use accrued paid leave during it. Your employer must keep your group health coverage in place." },
      { q: "Can my employer fire me while I'm on FMLA leave?", a: "An employer cannot fire you because you took FMLA leave, and you are generally entitled to return to the same or an equivalent job. Terminations that happen during or right after leave deserve a close look." },
      { q: "Can I take FMLA leave a few days at a time?", a: "Yes, in many cases. Intermittent or reduced-schedule leave may be available when medically necessary, such as for ongoing treatment or flare-ups of a chronic condition." },
      { q: "What leave is available for military families?", a: "Up to 26 weeks in a 12-month period to care for a covered service member with a serious injury or illness, and up to 12 weeks for qualifying exigencies related to a family member's call to active duty in the Reserve or National Guard." },
      { q: "How long do I have to bring an FMLA claim?", a: "As a general rule, two years from the violation, or three years if the violation was willful. [ATTORNEY: verify] Earlier action usually means better evidence." },
    ],
    related: ["general-employment-law", "wage-and-hour-disputes"],
  },
  {
    slug: "wage-and-hour-disputes",
    title: "Wage and Hour Disputes",
    short: "Unpaid overtime, misclassification and off-the-clock work.",
    summary: "Unpaid overtime, off-the-clock work and exempt misclassification. Counsel for employees owed wages and employers who want to comply.",
    h1: "Wage and Hour Attorney in Davenport",
    metaTitle: "Unpaid Wages Lawyer, Davenport | Stephen T. Fieweger, P.C.",
    metaDescription: "Unpaid overtime, off-the-clock work or exempt misclassification? Davenport wage and hour attorney Stephen T. Fieweger helps workers and employers recover.",
    promise: "If you worked the hours, you should be paid for them. We help you recover what you are owed, or help your business stay compliant.",
    image: "wage-hero",
    imageAlt: "Vintage punch clock and stack of timesheets, representing wage and hour disputes in Davenport, Iowa",
    icon: "clock",
    intro: [
      "Wage and hour cases have been rising for years. Part of the reason is that the rules are technical, and small mistakes in how a job is classified or how time is recorded can add up to thousands of dollars over months or years. Another part is that many workers never realize they have been shortchanged.",
      "Stephen T. Fieweger counsels both employees and employers on these issues. Employees need someone who will track down what is owed. Employers need practical advice before a payroll practice becomes a lawsuit.",
    ],
    blocks: [
      {
        heading: "Claims we handle",
        bullets: [
          "Unpaid wages and unpaid overtime",
          "Off-the-clock work, including pre-shift and post-shift tasks",
          "Misclassification as exempt or as an independent contractor",
          "Non-competition and other employment agreements",
          "Wrongful termination and retaliation for raising pay complaints",
          "Workplace safety complaints and other unlawful employment practices",
        ],
      },
      {
        heading: "Hourly, salaried and \"exempt\" are not the same thing",
        paragraphs: [
          "Being paid a salary does not, by itself, make you exempt from overtime. Under federal law, exemption generally depends on both how you are paid and what your job duties actually are. A title like \"manager\" or \"coordinator\" does not settle the question. Many salaried workers are legally entitled to overtime for hours over 40 in a workweek.",
          "Off-the-clock work is another common problem: logging in before your shift, answering messages at home, working through an unpaid lunch, or finishing tasks after clocking out. If your employer knew or should have known you were working, that time generally must be paid.",
        ],
      },
      {
        heading: "State rules add another layer",
        paragraphs: [
          "Federal law sets a floor, but each state has its own minimum wage, overtime and wage-payment rules. Iowa and Illinois differ in meaningful ways, including how quickly final wages must be paid and what penalties apply. [ATTORNEY: verify] For employers operating on both sides of the river, those differences are easy to miss.",
          "Good records win wage cases. If you think you have not been paid correctly, start keeping your own log of the hours you work, the tasks you do before and after your shift, and any messages that show when you were working. Keep copies of your pay stubs. Then call us to talk through what you have.",
        ],
      },
    ],
    processTitle: "How a wage claim works",
    process: [
      { title: "Reconstruct the hours", text: "We review pay stubs, schedules, timekeeping data, emails and your own records to estimate what was worked and what was paid." },
      { title: "Apply the right law", text: "We determine which federal and state rules apply, whether an exemption is legitimate, and what damages may be available." },
      { title: "Recover or resolve", text: "We demand payment, negotiate, or file suit. For employers, we correct practices and resolve exposure." },
    ],
    faqs: [
      { q: "Was I misclassified as exempt?", a: "Possibly. Exempt status generally depends on salary level, how you are paid, and your actual job duties, not your job title. Many salaried employees are entitled to overtime. We can review your duties and pay to find out." },
      { q: "Can I get paid for off-the-clock work?", a: "Generally, yes. If your employer knew or should have known you were working before or after your shift, during meal breaks or from home, that time is usually compensable." },
      { q: "How far back can I recover unpaid wages?", a: "Under federal law, the general rule is two years, or three years if the violation was willful. [ATTORNEY: verify] Iowa and Illinois wage-payment laws may provide different time limits. Waiting can mean losing older wages permanently." },
      { q: "Can my employer retaliate against me for asking about my pay?", a: "Retaliating against an employee for complaining about unpaid wages or overtime is generally prohibited under federal and state law." },
      { q: "Are non-compete agreements enforceable?", a: "It depends on the state, the terms and the circumstances. Courts look at whether the restriction is reasonable in scope, duration and geography and whether it protects a legitimate business interest. Illinois also has specific statutory limits. [ATTORNEY: verify]" },
      { q: "I'm an employer. Can you audit our pay practices?", a: "Yes. We help employers review classifications, timekeeping and pay policies so problems are corrected before they turn into claims." },
    ],
    related: ["general-employment-law", "family-leave-medical-act"],
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    short: "Contract disputes, fraud and fiduciary claims for businesses.",
    summary: "Breach of contract, financial fraud and fiduciary disputes. Ethical, creative and effective representation to resolve business conflicts quickly.",
    h1: "Davenport Business & Commercial Litigation Attorney",
    metaTitle: "Commercial Litigation Davenport | Stephen T. Fieweger, P.C.",
    metaDescription: "Davenport commercial litigation attorney for contract disputes, fraud, fiduciary claims and tenant defense. Trial-ready counsel for Quad Cities businesses.",
    promise: "We resolve business disputes quickly and sensibly, in or out of court, while protecting what you have built.",
    image: "commercial-hero",
    imageAlt: "Boardroom table with contract documents and a fountain pen at dusk, representing commercial litigation in Davenport",
    icon: "building",
    intro: [
      "Commercial litigation is legal action arising from business transactions: a supplier that did not deliver, a partner who put their own interests first, a customer that will not pay, a lease that went wrong. For a small or mid-sized company, one dispute can consume time, money and focus that should be going into the business.",
      "Stephen T. Fieweger has helped small companies resolve complex business disputes both in and out of litigation. His approach is ethical, creative and effective: understand what the client actually needs, then find the fastest sensible route to it.",
    ],
    blocks: [
      {
        heading: "Disputes we handle",
        bullets: [
          "Breach of contract and contractual disputes of all kinds",
          "Financial fraud and misrepresentation",
          "Breach of fiduciary duty by partners, officers or managers",
          "Defending commercial tenants against breach-of-contract claims",
          "Defending commercial tenants against personal-injury claims",
        ],
      },
      {
        heading: "Litigation is a tool, not the goal",
        paragraphs: [
          "Most business owners do not want a lawsuit. They want to get paid, get out of a bad deal, or stop a loss from getting worse. Sometimes the right move is a well-timed demand letter or a structured negotiation. Sometimes it is a lawsuit filed quickly to protect your position. We help you choose, based on the facts, the costs and your business goals.",
          "We also pay attention to what happens after the dispute. If the relationship with a customer, vendor or partner is worth preserving, the strategy should reflect that. If it is not, the goal is a clean, enforceable resolution that lets you move on and put your attention back on running the business.",
        ],
      },
      {
        heading: "What experienced counsel brings",
        bullets: [
          "Better results, because cases are built on a realistic view of the evidence",
          "Improved settlement negotiations, because the other side knows we are prepared to try the case",
          "Sound business decisions, because you get candid advice about risk, cost and timing",
        ],
      },
      {
        heading: "Trial and appellate experience",
        paragraphs: [
          "When a dispute cannot be settled, it matters that your attorney is comfortable in a courtroom. Stephen Fieweger concentrates his practice in civil trials and appeals, and has won cases before the Iowa Supreme Court and the Seventh and Eighth Circuit Courts of Appeals.",
        ],
      },
    ],
    processTitle: "How we approach a business dispute",
    process: [
      { title: "Understand the business", text: "We learn the deal, the relationship and what outcome actually serves your company." },
      { title: "Assess leverage", text: "We review contracts, communications and financial records to identify strengths, risks and options." },
      { title: "Resolve efficiently", text: "We negotiate, mediate or litigate, choosing the path most likely to get a sound result at a sensible cost." },
    ],
    faqs: [
      { q: "Do all business disputes end up in court?", a: "No. Many are resolved through negotiation or mediation. We prepare as though the case will be tried, because that preparation is what drives favorable settlements." },
      { q: "What is a breach of fiduciary duty?", a: "It is when someone who owes a duty of loyalty and care to a business or its owners, such as a partner, officer, director or manager, puts their own interests first or acts in bad faith, causing harm." },
      { q: "We're a commercial tenant facing a claim. Can you help?", a: "Yes. We defend commercial tenants against both breach-of-contract claims from landlords and personal-injury claims arising on leased premises." },
      { q: "How quickly can you act if we need to protect our position?", a: "We can move quickly when time matters, such as when assets may disappear or a deadline is approaching. Call as soon as you see a problem developing." },
      { q: "Do you represent small businesses and non-profits?", a: "Yes. We represent individuals, small and mid-sized businesses and non-profit organizations throughout the Quad Cities." },
      { q: "What documents should we bring?", a: "Bring the contracts or agreements involved, key correspondence, invoices and payment records, and a short timeline of what happened. We will tell you what else we need." },
    ],
    related: ["personal-injury", "general-employment-law"],
  },
  {
    slug: "family-law",
    title: "Family Law",
    short: "Divorce, custody, support and property division.",
    summary: "Divorce, child custody, child support, spousal support and property division in Iowa and Illinois, handled with care and candor.",
    h1: "Davenport Family Law Attorney",
    metaTitle: "Davenport Family Law Attorney | Stephen T. Fieweger, P.C.",
    metaDescription: "Davenport family law attorney for divorce, child custody, child support, spousal support and property division in Iowa and Illinois. Call (563) 424-1982.",
    promise: "Clear guidance through divorce, custody and support questions, so you can make careful decisions about your family's future.",
    image: "family-hero",
    imageAlt: "Adult holding a child's hand at golden hour, representing family law matters in Davenport, Iowa",
    icon: "home",
    notice: "[ATTORNEY: confirm family law is offered and wording]",
    intro: [
      "Family law matters are personal, and the decisions made during them can shape a family's life for years. Divorce, custody and support cases involve both emotional weight and technical legal rules, and those rules differ between Iowa and Illinois. This page offers general information about how these matters work so you can come to a consultation prepared.",
      "Every family is different, and general information is no substitute for advice about your own circumstances.",
    ],
    blocks: [
      {
        heading: "Family law matters",
        bullets: [
          "Divorce (called \"dissolution of marriage\" in both Iowa and Illinois)",
          "Child custody and parenting time",
          "Child support",
          "Spousal support (alimony or maintenance)",
          "Division of property and debts",
        ],
      },
      {
        heading: "Divorce and property division",
        paragraphs: [
          "Iowa and Illinois both allow no-fault divorce, meaning a spouse generally does not need to prove wrongdoing to end the marriage. [ATTORNEY: verify] Property and debts are divided under each state's rules, which look at factors such as the length of the marriage, each spouse's contributions and their economic circumstances. Identifying what is marital property, what is separate, and what everything is actually worth is often the most important work in the case.",
        ],
      },
      {
        heading: "Children: custody, parenting time and support",
        paragraphs: [
          "In both states, decisions about children are guided by the best interests of the child. Courts consider a range of factors, including each parent's involvement, stability and ability to support the child's relationship with the other parent. Child support is calculated using state guidelines based largely on the parents' incomes and the parenting arrangement, and can be modified later if circumstances change substantially. [ATTORNEY: verify]",
        ],
      },
      {
        heading: "Spousal support",
        paragraphs: [
          "Spousal support, called alimony in Iowa and maintenance in Illinois, is not automatic. Whether it is awarded, how much and for how long depends on state law and the facts, such as the length of the marriage, each spouse's earning capacity and the standard of living during the marriage. [ATTORNEY: verify]",
        ],
      },
      {
        heading: "When cases cross the river",
        paragraphs: [
          "In the Quad Cities it is common for spouses or parents to live in different states. Which state's court can hear a case, and which state's law applies, can significantly affect the outcome. Stephen T. Fieweger is licensed in both Iowa and Illinois and can explain how these rules apply to your situation.",
        ],
      },
    ],
    processTitle: "What to expect",
    process: [
      { title: "Confidential consultation", text: "We listen to your situation, answer your questions and explain the process and timelines in your state." },
      { title: "Gather information", text: "We collect financial records, property information and details about your children's needs and routines." },
      { title: "Work toward resolution", text: "We pursue agreement where possible and prepare to present your case in court when necessary." },
    ],
    faqs: [
      { q: "Do I have to prove fault to get divorced?", a: "Generally, no. Both Iowa and Illinois allow divorce without proving fault, based on a breakdown of the marriage. [ATTORNEY: verify]" },
      { q: "How is child custody decided?", a: "Courts in both states decide custody and parenting time based on the best interests of the child, considering factors such as each parent's involvement, stability and willingness to support the child's relationship with the other parent." },
      { q: "How is child support calculated?", a: "Both states use guidelines based mainly on the parents' incomes and the parenting-time arrangement, with adjustments for items like health insurance and child care. [ATTORNEY: verify]" },
      { q: "Will I have to pay or receive spousal support?", a: "It depends. Spousal support is not automatic and depends on factors like the length of the marriage, each spouse's earning ability and the standard of living during the marriage." },
      { q: "Can custody or support orders be changed later?", a: "Often, yes, if there has been a substantial change in circumstances. The standards for modification differ by state and by the type of order. [ATTORNEY: verify]" },
      { q: "My spouse lives in Illinois and I live in Iowa. Which state handles the case?", a: "It depends on residency requirements, where the children have lived and other factors. Because Stephen Fieweger is licensed in both states, we can help you understand which court is the right place for your case." },
    ],
    related: ["general-employment-law", "personal-injury"],
  },
];

export const getPractice = (slug: string) => practiceAreas.find((p) => p.slug === slug);
export const practiceHref = (slug: string) => `/practice-areas/${slug}/`;
