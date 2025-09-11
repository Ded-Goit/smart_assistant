"use client";

import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import styles from "./SettingBlock.module.css";
import UserInfo from "@/components/UserInfo/UserInfo";
import { Suspense } from "react";
import ChangeUserForm from "../ChangeUser/ChangeUser";

export default function SettingBlock() {
    return (
      <div className={styles.cover}>
        <div className={styles.header}></div>
        <div className={styles.mainBlock}>
          <div className={styles.textlock}>
            <h2 className={styles.titl}>Settings</h2>
            <p className={styles.blabla}>
              Update personal details, adjust notifications, and choose your
              language settings
            </p>
          </div>
          <div className={styles.bigBlock}>
            <div className={styles.pwdBlock}>
              <div className={styles.titleDecor}>
                <h2 className={styles.title}>Password</h2>
              </div>
              <div className={styles.pwdform}>
                <ResetPasswordForm />
              </div>
            </div>
            <div className={styles.personal}>
              <div className={styles.titleDecor}>
                <h2 className={styles.title}>Personal info</h2>
              </div>

              <ChangeUserForm />
            </div>
          </div>
        </div>
      </div>
    );
}
