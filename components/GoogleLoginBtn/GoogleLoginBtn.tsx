"use client"; 
import { getGoogleOAuthUrl } from "@/lib/api/apiClient";

export default function GoogleLoginBtn() {
  const handleGoogleLogin = async () => {
    const url = await getGoogleOAuthUrl();
    window.location.href = url;
  };

  return <button onClick={handleGoogleLogin}>Sign up with Google</button>;
}
