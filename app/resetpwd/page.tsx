"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setMessage("Пароли не совпадают");
      return;
    }

    try {
      const res = await fetch(
        "https://timemanagement-back.onrender.com/auth/reset-pwd",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, token }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setMessage("Пароль успешно изменён!");
      } else {
        setMessage(data.message || "Ошибка");
      }
    } catch (err) {
      setMessage("Ошибка сети");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Сброс пароля</h1>
      {!token ? (
        <p className="text-red-500">Токен не найден в ссылке</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Новый пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Сохранить
          </button>
        </form>
      )}
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
