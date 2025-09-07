"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import styles from "./setting.module.css";
import UserInfo from "@/components/UserInfo/UserInfo";
import { Suspense } from "react";

export default function SettingPage() {
  return (
    <section className={styles.setting}>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />

        <div className={styles.mainBlock}>
          <div className={styles.textlock}>
            <h2 className={styles.title}>Settings</h2>
            <p className={styles.blabla}>
              Update personal details, adjust notifications, and choose your
              language settings
            </p>
          </div>
          <div className={styles.bigBlock}>
            <div className={styles.generalBlock}>
              <h2 className={styles.title}>General</h2>
            </div>
            <div className={styles.generalBlock}>
              <h2 className={styles.title}>Notification</h2>
              <div className={styles.imagesBlock}>
                <p> reset block</p>
                <ResetPasswordForm />
              </div>
            </div>
          </div>

          <div className={styles.personal}>
            <h2 className={styles.title}>Personal info</h2>
            <UserInfo />
          </div>
        </div>
      </Suspense>
    </section>
  );
}
