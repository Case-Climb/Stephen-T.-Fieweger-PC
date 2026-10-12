import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { firm, fullAddress } from "@/lib/site";

export const metadata = pageMeta({
  title: "Legal Disclaimer | Stephen T. Fieweger, P.C.",
  description:
    "Legal disclaimer and attorney advertising notice for Stephen T. Fieweger, P.C., Davenport, Iowa. Website content is general information, not legal advice.",
  path: "/contact/disclaimer/",
});

export default function Disclaimer() {
  return (
    <LegalPage
      title="Legal Disclaimer"
      image="practice-hub"
      imageAlt="Courthouse columns in morning light"
      crumbs={[{ name: "Contact", path: "/contact/" }, { name: "Disclaimer", path: "/contact/disclaimer/" }]}
      updated="October 2026"
    >
      <h2>Attorney advertising</h2>
      <p>
        This website is attorney advertising under the Iowa Rules of Professional Conduct and the Illinois Rules of
        Professional Conduct. The attorney responsible for its content is {firm.attorney}, {firm.legalName},{" "}
        {fullAddress}.
      </p>
      <h2>No attorney-client relationship</h2>
      <p>
        Viewing this website, submitting a contact form, sending an email or leaving a voicemail does not create an
        attorney-client relationship. An attorney-client relationship is formed only after we have checked for
        conflicts of interest and agreed in writing to represent you. Until then, please do not send confidential or
        time-sensitive information. Information you send before we agree to represent you may not be treated as
        privileged or confidential.
      </p>
      <h2>Not legal advice</h2>
      <p>
        The content of this website is general information about the law and our practice. It is not legal advice
        and should not be relied on as such. Laws change and vary by state and by the facts of each case. You should
        consult an attorney about your specific situation before taking or refraining from any action.
      </p>
      <h2>No guarantee of results</h2>
      <p>
        Every case is different. Any description of past matters, appellate decisions or client experiences does
        not guarantee or predict a similar outcome in any future matter. Testimonials reflect individual experiences
        and do not guarantee a similar outcome.
      </p>
      <h2>Licensing and jurisdiction</h2>
      <p>
        {firm.attorney} is licensed to practice law in Iowa and Illinois. We do not seek to represent anyone based
        solely on visiting this website in a state where this website may not comply with all laws and ethical rules.
      </p>
      <h2>Deadlines</h2>
      <p>
        Legal claims are subject to strict time limits. If you believe you may have a claim, contact an attorney
        promptly. Do not rely on general statements about deadlines on this website.
      </p>
      <h2>Outside links</h2>
      <p>
        Links to third-party websites, including news articles, are provided for convenience. We do not control and
        are not responsible for their content.
      </p>
      <p>
        Questions? <Link href="/contact/">Contact us</Link> or call <a href={firm.phoneHref}>{firm.phone}</a>. See also
        our <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
