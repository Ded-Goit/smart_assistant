"use client";

import { useState } from "react";
import { forgotPwd } from "@/lib/api/apiClient"; 

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
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Forgot password?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send link
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
