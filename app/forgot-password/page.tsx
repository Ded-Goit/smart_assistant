"use client";

import { useState } from "react";
import { forgotPwd } from "@/lib/api/apiClient"; 
import css from ".//ForgotPasswordPage.module.css";
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        await forgotPwd(email);
        setMessage("Link for reset sent to your email!");
      } catch (err: any) {
        setMessage(err.message);
      }
    };

  return (
    <div className={css.cover}>
      <h1 className={css.title}>Forgot password?</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={css.field}
          required
        />
        <button type="submit" className={css.btn}>
          Send link
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
