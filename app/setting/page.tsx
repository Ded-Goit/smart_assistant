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
        <div className={styles.imagesBlock}>
          <p> reset block</p>
          <ResetPasswordForm />
          <UserInfo />
        </div>
      </Suspense>
    </section>
  );
}
