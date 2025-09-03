import { logout } from "@/lib/api/apiClient";
import css from "./LogOut.module.css";

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
      <button type="button" className={css.btn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
