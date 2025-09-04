// "use client";

// import { useState } from "react";

// export default function ResetPasswordForm() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Запрос на сброс пароля для: ${email}`);
//   };

//   return (
//     <div>
//       <h2>Сброс пароля</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Введите email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Сбросить</button>
//       </form>
//     </div>
//   );
// }


 "use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { resetPassword } from "@/lib/api/apiClient";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setMessage("The passwords do not match");
      return;
    }

    try {
      await resetPassword(password, token as string);
      setMessage("Password was changed!");
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
      <h1 className="text-xl font-bold mb-4">Reset password</h1>
      {!token ? (
        <p className="text-red-500">Token not found in link</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Repeat new password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Save
          </button>
        </form>
      )}
      {message && <p className="mt-4 text-sm">{message}</p>}
        </Suspense>
    </div>
  );
}