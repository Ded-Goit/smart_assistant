// "use client";

// import { useSearchParams } from "next/navigation";
// import { Suspense, useState } from "react";
// import { resetPassword } from "@/lib/api/apiClient";
// import css from './ResetPasswordForm.module.css';
// import Cookies from "js-cookie";

// export default function ResetPasswordForm() {
//   const searchParams = useSearchParams();
//   // const token = searchParams.get("token");
//   const token = Cookies.get("token");

//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password !== confirm) {
//       setMessage("The passwords do not match");
//       return;
//     }

//     try {
//       await resetPassword(password, token as string);
//       setMessage("Password was changed!");
//     } catch (err: any) {
//       setMessage(err.message);
//     }
//   };

//   return (
//     <div className={css.resetForm}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <h3 className={css.title}>Password</h3>
//         {!token ? (
//           <p className={css.errInfo}>Token not found</p>
//         ) : (
//           <form onSubmit={handleSubmit} className={css.form}>
//             <input
//               type="password"
//               placeholder="New password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={css.field}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Repeat new password"
//               value={confirm}
//               onChange={(e) => setConfirm(e.target.value)}
//               className={css.field}
//               required
//             />
//             <button type="submit" className={css.btn}>
//               Save
//             </button>
//           </form>
//         )}
//         {message && <p className="mt-4 text-sm">{message}</p>}
//       </Suspense>
//     </div>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { resetPassword } from "@/lib/api/apiClient";
import css from "./ResetPasswordForm.module.css";

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

    if (!token) {
      setMessage("Token not found");
      return;
    }

    try {
      await resetPassword(password, token);
      setMessage("✅ Password was successfully reset!");
    } catch (err: any) {
      setMessage(`❌ ${err.message}`);
    }
  };

  return (
    <div className={css.resetForm}>
      <Suspense fallback={<div>Loading...</div>}>
        <h3 className={css.title}>Reset password</h3>

        {!token ? (
          <p className={css.errInfo}>Token not found</p>
        ) : (
          <form onSubmit={handleSubmit} className={css.form}>
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={css.field}
              required
            />
            <input
              type="password"
              placeholder="Repeat new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={css.field}
              required
            />
            <button type="submit" className={css.btn}>
              Save
            </button>
          </form>
        )}

        {message && <p className={css.info}>{message}</p>}
      </Suspense>
    </div>
  );
}