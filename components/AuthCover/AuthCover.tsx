import { ReactNode, Suspense } from "react";
import css from "./AuthCover.module.css";
import Logo from "../Logo/logo";

interface AuthCoverProps {
  children: ReactNode;
}

export default function AuthCover({ children }: AuthCoverProps) {
  return (
    <div className={css.txtPart}>
      <div className={css.hederPart}>
        <Logo/>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <>{children}</>
      </Suspense>
      <div className={css.footerPart}>
        <svg className={css.mailIcon}>
          <use href="/sprite.svg#icon-mail"></use>
        </svg>
        <p className={css.footerTxt}>help@smartassistant.com</p>
      </div>
    </div>
  );
}
