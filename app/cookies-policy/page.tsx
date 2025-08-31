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
        <h1 className="title-pol">Cookies Policy</h1>
        <p className="title-block-pol">
          Last Updated: <span className="body-text-pol">2025-08-31</span>
        </p>
      </div>

      <div className="content-block-pol">
        <p className="body-text-pol">
          This Cookies Policy explains how{" "}
          <a href="https://smart-assistant-delta.vercel.app/">
            Smart Assistant
          </a>{" "}
          uses cookies and similar technologies to enhance user experience.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">1. What Are Cookies?</p>
        <p className="body-text-pol">
          Cookies are small text files stored on your device when you visit a
          website. They help improve site functionality and remember
          preferences.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">2. How We Use Cookies</p>
        <ul className="list-pol body-text-pol">
          <li className="list-body-text-pol">
            To enable essential website functions.
          </li>
          <li className="list-body-text-pol">
            To analyze site traffic and performance.
          </li>
          <li className="list-body-text-pol">
            To personalize your browsing experience.
          </li>
        </ul>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">3. Types of Cookies We Use</p>
        <ul className="list-pol body-text-pol">
          <li className="list-body-text-pol">
            <b>Essential Cookies:</b> Required for website operation.
          </li>
          <li className="list-body-text-pol">
            <b>Performance Cookies:</b> Help us analyze website usage.
          </li>
          <li className="list-body-text-pol">
            <b>Functional Cookies:</b> Remember user preferences.
          </li>
          <li className="list-body-text-pol">
            <b>Advertising Cookies:</b> Deliver relevant ads and measure
            campaigns.
          </li>
        </ul>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">4. Managing Cookies</p>
        <p className="body-text-pol">
          You can manage or disable cookies through your browser settings.
          However, disabling some cookies may affect site functionality.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">5. Third-Party Cookies</p>
        <p className="body-text-pol">
          We may use third-party services (e.g., Google Analytics) that use
          cookies to analyze traffic and improve services. These third parties
          have their own privacy policies.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">6. Updates to This Policy</p>
        <p className="body-text-pol">
          We may update this Cookies Policy periodically. Updates will be posted
          on this page with a revised “Last Updated” date.
        </p>
      </div>

      <div className="content-block-pol">
        <p className="title-block-pol">7. Contact Us</p>
        <p className="body-text-pol">
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
