"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://timemanagement-back.onrender.com/auth/send-reset-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setMessage("Ссылка для сброса отправлена на почту!");
      } else {
        setMessage(data.message || "Ошибка");
      }
    } catch (err) {
      setMessage("Ошибка сети");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Забыли пароль?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Отправить ссылку
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
