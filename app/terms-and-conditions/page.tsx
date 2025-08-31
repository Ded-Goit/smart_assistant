import Link from "next/link";
import styles from "./page.module.css";

export default function TermsAndConditionsPage() {
  return (
    <section id="terms" className={styles.pageWrapper}>
      <div className={styles.backBtnWrapper}>
        <Link href="/" className="btnfullcolor">
          ← Back to Home
        </Link>
      </div>

      <div className="content-block-pol">
        <h1 className="title-pol">Terms and Conditions</h1>
        <p className="title-block-pol">
          Last Updated: <span className="body-text-pol">2025-08-31</span>
        </p>
      </div>

      <div className="content-block-pol">
        <p className="body-text-pol">
          Welcome to{" "}
          <a href="https://smart-assistant-delta.vercel.app/">
            Smart Assistant
          </a>
          . By using our website, you agree to comply with the following Terms
          and Conditions. If you do not agree, please do not use our services.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">1. Use of the Website</p>
        <p className="body-text-pol">
          You agree to use the website only for lawful purposes and in a manner
          that does not violate the rights of others.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">2. Intellectual Property</p>
        <p className="body-text-pol">
          All content, trademarks, logos, and materials on this website are the
          property of Smart Assistant unless otherwise stated. Unauthorized use
          is strictly prohibited.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">3. Limitation of Liability</p>
        <p className="body-text-pol">
          We are not responsible for any damages resulting from the use or
          inability to use the website. The services are provided “as is”
          without warranties of any kind.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">4. Third-Party Links</p>
        <p className="body-text-pol">
          Our website may contain links to third-party sites. We are not
          responsible for their content, privacy policies, or practices.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">5. Termination</p>
        <p className="body-text-pol">
          We reserve the right to suspend or terminate access to the website if
          you violate these Terms and Conditions.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">6. Changes to the Terms</p>
        <p className="body-text-pol">
          We may update these Terms and Conditions at any time. Updates will be
          effective upon posting on this page. Continued use of the website
          means you accept the updated Terms.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">7. Governing Law</p>
        <p className="body-text-pol">
          These Terms are governed by the laws of your jurisdiction. Any
          disputes will be resolved in accordance with applicable laws.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">8. Contact Us</p>
        <p className="body-text-pol">
          For questions about these Terms and Conditions, contact us at{" "}
          <a
            className="links-pol policy-contact-link-pol"
            href="mailto:info@smartassistant.com"
          >
            info@smartassistant.com
          </a>
        </p>
      </div>
    </section>
  );
}
