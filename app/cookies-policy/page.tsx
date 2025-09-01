import Link from "next/link";
import styles from "./page.module.css";

export default function CookiesPolicyPage() {
  return (
    <section id="cookies" className={styles.pageWrapper}>
      <div className={styles.backBtnWrapper}>
        <Link href="/" className="btnfullcolor">
          ← Back to Home
        </Link>
      </div>

      <div className="content-block-pol">
        <h1 className={`${styles.title} h1`}>Cookies Policy</h1>
        <p className={`${styles.titleblock} text18medium`}>
          Last Updated: <span className="body-text-pol">2025-08-31</span>
        </p>
      </div>

      <div className={styles.contentblock}>
        <p className={styles.bodytext}>
          This Cookies Policy explains how{" "}
          <a href="https://smart-assistant-delta.vercel.app/">
            Smart Assistant
          </a>{" "}
          uses cookies and similar technologies to enhance user experience.
        </p>
      </div>

      <div className="content-block-pol">
        <p className={`${styles.titleblock} text18medium`}>
          1. What Are Cookies?
        </p>
        <p className={`${styles.bodytext} .text16`}>
          Cookies are small text files stored on your device when you visit a
          website. They help improve site functionality and remember
          preferences.
        </p>
      </div>

      <div className="content-block-pol">
        <p className={`${styles.titleblock} text18medium`}>
          2. How We Use Cookies
        </p>
        <ul className="list-pol body-text-pol">
          <li className={`${styles.listbodytext} text16`}>
            To enable essential website functions.
          </li>
          <li className={`${styles.listbodytext} text16`}>
            To analyze site traffic and performance.
          </li>
          <li className={`${styles.listbodytext} text16`}>
            To personalize your browsing experience.
          </li>
        </ul>
      </div>

      <div className="content-block-pol">
        <p className={`${styles.titleblock} text18medium`}>
          3. Types of Cookies We Use
        </p>
        <ul className="list-pol body-text-pol">
          <li className={`${styles.listbodytext} text16`}>
            <b>Essential Cookies:</b> Required for website operation.
          </li>
          <li className={`${styles.listbodytext} text16`}>
            <b>Performance Cookies:</b> Help us analyze website usage.
          </li>
          <li className={`${styles.listbodytext} text16`}>
            <b>Functional Cookies:</b> Remember user preferences.
          </li>
          <li className={`${styles.listbodytext} text16`}>
            <b>Advertising Cookies:</b> Deliver relevant ads and measure
            campaigns.
          </li>
        </ul>
      </div>

      <div className="content-block-pol">
        <p className={`${styles.titleblock} text18medium`}>
          4. Managing Cookies
        </p>
        <p className={`${styles.bodytext} .text16`}>
          You can manage or disable cookies through your browser settings.
          However, disabling some cookies may affect site functionality.
        </p>
      </div>

      <div className="content-block-pol">
        <p className={`${styles.titleblock} text18medium`}>
          5. Third-Party Cookies
        </p>
        <p className={`${styles.bodytext} .text16`}>
          We may use third-party services (e.g., Google Analytics) that use
          cookies to analyze traffic and improve services. These third parties
          have their own privacy policies.
        </p>
      </div>

      <div className="content-block-pol">
        <p className={`${styles.titleblock} text18medium`}>
          6. Updates to This Policy
        </p>
        <p className={styles.bodytext}>
          We may update this Cookies Policy periodically. Updates will be posted
          on this page with a revised “Last Updated” date.
        </p>
      </div>

      <div className="content-block-pol">
        <p className={`${styles.titleblock} text18medium`}>7. Contact Us</p>
        <p className={`${styles.bodytext} .text16`}>
          If you have any questions about this Cookies Policy, contact us at{" "}
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
