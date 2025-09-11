"use client";

import css from "@/app/forgot-password/ForgotPasswordPage.module.css";
import OAuthCallback from "@/components/OAuthCallback/OAuthCallback";

export default function GoogleAuthPage() {
  return (
     <div className={css.cover}>
      {/* <OAuthCallback /> */}
    </div>
  );
}
// "use client";

// import css from "@/app/forgot-password/ForgotPasswordPage.module.css";
// import { useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function OAuthCallback() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const code = searchParams.get("code");
//     if (!code) return;

//     const confirmOAuth = async () => {
//       try {
//         await fetch("/api/auth/google", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ code }),
//         });

//         router.push("/setting");
//       } catch (err) {
//         console.error("Google OAuth error:", err);
//         router.push("/login");
//       }
//     };

//     confirmOAuth();
//   }, [searchParams, router]);

//   return (
//     <div className={css.cover}>
//       <p>Authorizing with Google...</p>
//     </div>
//   );
// }
