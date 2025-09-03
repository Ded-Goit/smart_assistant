import { ReactNode } from "react";
import css from "./LoginCover.module.css";

interface LoginCoverProps {
  children: ReactNode;
}

export default function LoginCover({ children }: LoginCoverProps) {
  return (
    <div className={css.position}>
      <div className={css.form}>{children}</div>
    </div>
  );
}
