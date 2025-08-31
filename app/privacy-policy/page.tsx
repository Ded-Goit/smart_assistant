import Link from "next/link";
import styles from "./page.module.css";

export default function PrivacyPolicyPage() {
  return (
    <section id="privacy" className={styles.pageWrapper}>
      <div className={styles.backBtnWrapper}>
        <Link href="/" className="btnfullcolor">
          ← Back to Home
        </Link>
      </div>

      <div className="content-block-pol">
        <h1 className="title-pol">Privacy Policy</h1>
        <p className="title-block-pol">
          Last Updated: <span className="body-text-pol">2025-08-31</span>
        </p>
      </div>

      <div className="content-block-pol">
        <p className="body-text-pol">
          This Privacy Policy applies to the{" "}
          <a href="https://smart-assistant-delta.vercel.app/">Website</a>. By
          accessing or using our services, you agree to the collection and use
          of information as described in this policy.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">1. Information We Collect</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          The Website may collect the following types of data:
        </p>
      </div>
      <div className="content-block-pol">
        <ul className="list-pol">
          <li className="title-block-pol">
            Personal Information:
            <span className="list-body-text-pol">
              Name, email address, and other details if voluntarily provided.
            </span>
          </li>
          <li className="title-block-polisy-pol">
            Technical Data:
            <span className="list-body-text-pol">
              IP address, browser type, and device information for analytics
              purposes.
            </span>
          </li>
          <li className="title-block-pol">
            Cookies & Tracking:
            <span className="list-body-text-pol">
              We use cookies to enhance user experience and track usage trends.
            </span>
          </li>
        </ul>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">2. How We Use Your Information</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">The data we collect may be used for:</p>
        <ul className="list-pol body-text-pol">
          <li className="list-body-text-pol">
            Providing and improving our services.
          </li>
          <li className="list-body-text-pol">
            Enhancing website security and preventing fraud.
          </li>
          <li className="list-body-text-pol">
            Analyzing trends and user behavior through analytics tools.
          </li>
        </ul>
      </div>

      <div className="content-block-pol">
        <p className="title-block-polisy-pol">
          3. Cookies and Tracking Technologies
        </p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          We use cookies and similar technologies to personalize content, track
          website performance, and improve user experience. Users can manage or
          disable cookies through browser settings.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-polisy-pol">4. Third-Party Services</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          We may use third-party services such as Google Analytics to monitor
          traffic and improve services. These services have their own privacy
          policies, which can be reviewed on their respective websites. Below
          are the links to the Privacy Policy of the third-party service
          providers used by the Application:
        </p>
        <ul className="list-pol eight-pol">
          <li className="manage-list-item-pol">
            <a href="https://policies.google.com/privacy" target="_blank">
              Google Play Services
            </a>
          </li>
          <li className="manage-list-item-pol">
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
            >
              Google Analytics for Firebase
            </a>
          </li>
          <li className="manage-list-item-pol">
            <a
              href="https://www.facebook.com/about/privacy/update/printable"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">5. Data Security</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          We implement security measures to protect collected information from
          unauthorized access or misuse. However, no method of transmission over
          the internet is 100% secure.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">6. Children's Privacy</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          Our Website is not intended for children under 13, and we do not
          knowingly collect personal data from them. If we become aware that a
          child has provided information, we will take steps to delete it.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">7. Changes to This Policy</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          We may update this Privacy Policy periodically. Users will be notified
          of significant changes through the Website. Continued use of the
          Website after modifications implies acceptance of the updated policy.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">8. Your Rights</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          Under applicable laws (e.g., GDPR, CCPA), you have rights to:
        </p>
        <ul className="list-pol body-text-pol">
          <li className="list-body-text-pol">
            Access, update, or delete your personal data.
          </li>
          <li className="list-body-text-pol">
            Withdraw consent for data collection.
          </li>
          <li className="list-body-text-pol">
            Request a copy of the data we store about you.
          </li>
        </ul>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          To exercise your rights, contact us via email.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">9. Contact Us</p>
      </div>
      <div className="content-block-pol">
        <p className="body-text-pol">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
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
