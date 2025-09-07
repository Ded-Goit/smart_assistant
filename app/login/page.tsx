"use client";

import Image from "next/image";
import css from "../register/register.module.css";
import GoogleLoginBtn from "@/components/GoogleLoginBtn/GoogleLoginBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm/LoginForm";
import AuthCover from "@/components/AuthCover/AuthCover";

export default function LoginPage() {
  const router = useRouter();


  return (
    <section className={css.cover}>
      <AuthCover>
        <div className={css.mainPart}>
          <div className={css.loginText}>
            <h2 className={css.title}>Log in to your account</h2>
            <p className={css.blala}>
              Welcome back! Please enter your details.
            </p>
          </div>

          <LoginForm />
          <GoogleLoginBtn />
          <div className={css.otherPage}>
            <p className={css.otherTxt}>Don’t have an account? </p>
            <Link href="/register" className={css.otherLink}>
              Sign up
            </Link>
          </div>
        </div>
      </AuthCover>
      <div className={`${css.imgPart} ${css.imgPartLogin}`}></div>
    </section>
  );
}
