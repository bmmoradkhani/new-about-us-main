import React from "react";

import styles from "./CallToActionIntegration.module.scss";

export default function index() {
  return (
    <div>
      <section className={styles.call_to_action}>
        <div className={styles.title}>Let’s talk about integrations!</div>
        <div className={styles.description}>
          Interested in building an integration? We’d love to connect to help
          you get started.
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://calendly.com/persifund-support-team/30-minute-meeting`}
          className={`text-decoration-none ${styles.connect_store_button}`}
        >
          Book a Demo
        </a>
      </section>
    </div>
  );
}
