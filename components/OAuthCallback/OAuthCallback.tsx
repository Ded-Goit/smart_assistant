"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { loginWithGoogle } from "@/lib/api/apiClient";

export default function OAuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return;

    const confirmOAuth = async () => {
      try {
        await loginWithGoogle(code);
        router.push("/"); 
      } catch (err) {
        console.error("err Google:", err);
      }
    };

    confirmOAuth();
  }, [searchParams, router]);

  return <p>Sign up with Google</p>;
}
