import Logout from "../Logout/Logout";
import css from "./LoginCover.module.css";

export default function LoginCover({ children }) {
  return (
    <div className={css.position}>
      <div className={css.form}>
        {children}
        {/* <Logout /> */}
          </div>

    </div>
  );
}
