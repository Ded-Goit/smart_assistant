"use client";

import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import styles from "./SettingBlock.module.css";
import UserInfo from "@/components/UserInfo/UserInfo";
import { Suspense } from "react";

export default function SettingBlock() {
    return (
      <div className={styles.cover}>
        <div className={styles.header}></div>
        <div className={styles.mainBlock}>
          <div className={styles.textlock}>
            <h2 className={styles.title}>Settings</h2>
            <p className={styles.blabla}>
              Update personal details, adjust notifications, and choose your
              language settings
            </p>
          </div>
          <div className={styles.bigBlock}>
            {/* <div className={styles.generalBlock}>
              <h2 className={styles.title}>General</h2>
            </div> */}
            {/* <div className={styles.generalBlock}>
              <h2 className={styles.title}>Notification</h2> */}
            <div className={styles.pwdBlock}>
              <h2 className={styles.titleDecor}> Password</h2>
              <ResetPasswordForm />
            </div>
            {/* </div> */}
          </div>

          <div className={styles.personal}>
            <h2 className={styles.title}>Personal info</h2>
            <UserInfo />
          </div>
        </div>
      </div>
    );
}
