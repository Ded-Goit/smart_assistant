"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import css from "./register.module.css";
import GoogleLoginBtn from "@/components/GoogleLoginBtn/GoogleLoginBtn";
import OAuthCallback from "@/components/OAuthCallback/OAuthCallback";
import Link from "next/link";
import ForgotPasswordPage from "../forgot-password/page";

import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import AuthCover from "@/components/AuthCover/AuthCover";

export default function RegisterPage() {
  return (
    <>
      <section className={css.cover}>
        <AuthCover>
          <div className={css.mainPart}>
            <div className={css.registerText}>
              <h2 className={`${css.title} h2`}>Register</h2>
            </div>

            <RegistrationForm />

            <OAuthCallback />
            <div className={css.otherPage}>
              <p className={css.otherTxt}>Already have an account? </p>
              <Link href="/login" className={css.otherLink}>
                Sign up
              </Link>
            </div>
          </div>
        </AuthCover>
        {/* <div className={`${css["imgPart imgPrtRegister"]}`}>
          <img
            src="/register/reg.webp"
            alt="page image"
            className={css.imgPage}
          />
        </div> */}
        <div className={`${css.imgPart} ${css.imgPrtRegister}`}></div>
      </section>
    </>
  );
}
