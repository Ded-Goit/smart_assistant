"use client";

import { useState } from "react";
import css from "@/app/forgot-password/ForgotPasswordPage.module.css";
import OAuthCallback from "@/components/OAuthCallback/OAuthCallback";

export default function GoogleAuthPage() {
  return (
     <div className={css.cover}>
      <OAuthCallback />
    </div>
  );
}
