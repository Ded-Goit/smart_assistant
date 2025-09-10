"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import styles from "./setting.module.css";
import UserInfo from "@/components/UserInfo/UserInfo";
import { Suspense } from "react";
import SettingBlock from "@/components/SettingBlock/SettingBlock";

export default function SettingPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={styles.setting}>
          <Sidebar />
          <SettingBlock />
        </section>
      </Suspense>
    </>
  );
}
