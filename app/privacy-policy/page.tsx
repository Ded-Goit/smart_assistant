import Link from "next/link";
import styles from "./page.module.css";

export default function PrivacyPolicyPage() {
  return (
    <section id="privacy" className={styles.pageWrapper}>
      <div className={styles.contentblock}>
        <h1 className={`${styles.title} h1`}>Privacy Policy</h1>
        <p className={`${styles.titleblock} text18medium`}>
          Last Updated:{" "}
          <span className={`${styles.bodytext} text18`}>2025-08-31</span>
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          This Privacy Policy applies to the{" "}
          <a
            className={`text22`}
            href="https://smart-assistant-delta.vercel.app/"
          >
            Website
          </a>
          . By accessing or using our services, you agree to the collection and
          use of information as described in this policy.
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>
          1. Information We Collect
        </p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          The Website may collect the following types of data:
        </p>
      </div>
      <div className={styles.contentblock}>
        <ul className={styles.list}>
          <li className={`${styles.titleblock} text18medium`}>
            Personal Information:
            <span className={`${styles.listbodytext} text18`}>
              Name, email address, and other details if voluntarily provided.
            </span>
          </li>
          <li className={`${styles.titleblock} text18medium`}>
            Technical Data:
            <span className={`${styles.listbodytext} text18`}>
              IP address, browser type, and device information for analytics
              purposes.
            </span>
          </li>
          <li className={`${styles.titleblock} text18medium`}>
            Cookies & Tracking:
            <span className={`${styles.listbodytext} text18`}>
              We use cookies to enhance user experience and track usage trends.
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>
          2. How We Use Your Information
        </p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          The data we collect may be used for:
        </p>
        <ul className={styles.list}>
          <li className={`${styles.listbodytext} text18`}>
            Providing and improving our services.
          </li>
          <li className={`${styles.listbodytext} text18`}>
            Enhancing website security and preventing fraud.
          </li>
          <li className={`${styles.listbodytext} text18`}>
            Analyzing trends and user behavior through analytics tools.
          </li>
        </ul>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>
          3. Cookies and Tracking Technologies
        </p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          We use cookies and similar technologies to personalize content, track
          website performance, and improve user experience. Users can manage or
          disable cookies through browser settings.
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>
          4. Third-Party Services
        </p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          We may use third-party services such as Google Analytics to monitor
          traffic and improve services. These services have their own privacy
          policies, which can be reviewed on their respective websites. Below
          are the links to the Privacy Policy of the third-party service
          providers used by the Application:
        </p>
        <ul className={styles.list}>
          <li className={`text22`}>
            <a href="https://policies.google.com/privacy" target="_blank">
              Google Play Services
            </a>
          </li>
          <li className={`text22`}>
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
            >
              Google Analytics for Firebase
            </a>
          </li>
          <li className={`text22`}>
            <a
              href="https://www.facebook.com/about/privacy/update/printable"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>5. Data Security</p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          We implement security measures to protect collected information from
          unauthorized access or misuse. However, no method of transmission over
          the internet is 100% secure.
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>
          6. Children's Privacy
        </p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          Our Website is not intended for children under 13, and we do not
          knowingly collect personal data from them. If we become aware that a
          child has provided information, we will take steps to delete it.
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>
          7. Changes to This Policy
        </p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          We may update this Privacy Policy periodically. Users will be notified
          of significant changes through the Website. Continued use of the
          Website after modifications implies acceptance of the updated policy.
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>8. Your Rights</p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          Under applicable laws (e.g., GDPR, CCPA), you have rights to:
        </p>
        <ul className={styles.list}>
          <li className={`${styles.listbodytext} text18`}>
            Access, update, or delete your personal data.
          </li>
          <li className={`${styles.listbodytext} text18`}>
            Withdraw consent for data collection.
          </li>
          <li className={`${styles.listbodytext} text18`}>
            Request a copy of the data we store about you.
          </li>
        </ul>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          To exercise your rights, contact us via email.
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={`${styles.titleblock} text18medium`}>9. Contact Us</p>
      </div>
      <div className={styles.contentblock}>
        <p className={`${styles.bodytext} text18`}>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a className={`text22`} href="mailto:info@smartassistant.com">
            info@smartassistant.com
          </a>
        </p>
      </div>
      <div className={styles.backBtnWrapper}>
        <Link href="/" className={`${styles.btn} btnfullcolor`}>Back to Home</Link>
      </div>
    </section>
  );
}
