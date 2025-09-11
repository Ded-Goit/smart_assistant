// "use client";

// import { useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { loginWithGoogle } from "@/lib/api/apiClient";

// export default function OAuthCallback() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const code = searchParams.get("code");
//     if (!code) return;

//     const confirmOAuth = async () => {
//       try {
//         await loginWithGoogle(code);
//         router.push("/setting");
//       } catch (err) {
//         console.error("Google OAuth error:", err);
//         router.push("/login");
//       }
//     };

//     confirmOAuth();
//   }, [searchParams, router]);

//   return <p>Authorizing with Google...</p>;
// }

"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OAuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return;

    const confirmOAuth = async () => {
      try {
        await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        router.push("/setting");
      } catch (err) {
        console.error("Google OAuth error:", err);
        router.push("/login");
      }
    };

    confirmOAuth();
  }, [searchParams, router]);

  return <p>Authorizing with Google...</p>;
}