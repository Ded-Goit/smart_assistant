import { logout } from "@/lib/api/apiClient";
import css from "./LogOut.module.css";
import { Suspense } from "react";

export default function Logout() {
   const handleLogout = async () => {
     try {
       await logout();
       window.location.href = "/";
     } catch (err) {
       console.error("Logout failed", err);
     }
   };

  return (
    <div className={css.button}>
      <Suspense fallback={<div>Loading...</div>}>
        <button type="button" className={css.btn} onClick={handleLogout}>
          <svg className={css.logoutIcon}>
            <use href="/sprite.svg#icon-logout"></use>
          </svg>
          <p className={css.logoutTxt}>Logout</p>
        </button>
      </Suspense>
    </div>
  );
}