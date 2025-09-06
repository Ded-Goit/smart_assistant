"use client"; 
import { getGoogleOAuthUrl } from "@/lib/api/apiClient";
import css from "./GoogleLoginBtn.module.css"

export default function GoogleLoginBtn() {
  const handleGoogleLogin = async () => {
    const url = await getGoogleOAuthUrl();
    window.location.href = url;
  };

  return (
    <button onClick={handleGoogleLogin} className={css.googleBtn}>
      <svg className={css.googlIcon}>
        <use href="/sprite.svg#icon-google"></use>
      </svg>
      <p className={css.googlTxt}> Sign up with Google</p>
    </button>
  );
}
