"use client";

import Image from "next/image";
import styles from "./login.module.css";
import css from "../register/register.module.css";
import { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import CustomMessage from "@/components/CustomMessage/CustomMessage";
import {
  showSuccess,
  showError,
} from "../../components/ToastComponent/ToastComponent";
import { apiClient } from "@/lib/api/apiClient";
import { Suspense, useEffect, useState } from "react";
import CowerCreateShop from "@/components/LoginCover/LoginCover";

import GoogleLoginBtn from "@/components/GoogleLoginBtn/GoogleLoginBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const validationControl = Yup.object().shape({
    email: Yup.string()
      .min(3, " Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });

  interface LoginValues {
    email: string;
    password: string;
  }

  const handleSubmit = async (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    try {
      const data = await apiClient("/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      showSuccess({ message: "Login successful!" });
      console.log("User logged in:", data);

      actions.resetForm();
      router.push("/setting");
    } catch (error: any) {
      showError({ message: error.message || "Login failed" });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <CowerCreateShop>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={css.cover}>
          <div className={styles.imagesBlock}>
            <h2 className={`${styles.title} h2`}>Log in to your account</h2>
            <p className={`${styles.text} text24`}>
              Welcome back! Please enter your details.
            </p>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationControl}
            >
              {({ errors, touched }) => (
                <Form className={css.form} autoComplete="off">
                  <div className={css.fialdStyle}>
                    <div className={css.fieldPosition}>
                      <p className={`${css.fieldName} text14`}>
                        Email or phone number*
                      </p>
                      <Field
                        type="email"
                        name="email"
                        className={`${css.field} ${
                          errors.email && touched.email
                            ? css.errorField
                            : touched.email && !errors.email
                              ? css.successField
                              : ""
                        }`}
                        placeholder="Enter your email"
                      />
                      <CustomMessage
                        name="email"
                        errors={errors.email}
                        touched={touched.email}
                      />
                    </div>
                    <div className={css.fieldPosition}>
                      <p className={`$${css.fieldName} text14`}>Password*</p>
                      <Field
                        type="password"
                        name="password"
                        className={`${css.field} ${
                          errors.password && touched.password
                            ? css.errorField
                            : touched.password && !errors.password
                              ? css.successField
                              : ""
                        }`}
                        placeholder="Enter your password"
                      />
                      <CustomMessage
                        name="password"
                        errors={errors.password}
                        touched={touched.password}
                      />
                    </div>
                  </div>
                  <button type="submit" className={css.btn}>
                    Sign in
                  </button>
                  <Toaster />
                </Form>
              )}
            </Formik>
          </div>
          <Link className={`${styles.forgot} text14`} href="/forgot-password">
            Forgot password
          </Link>
          <GoogleLoginBtn />
          <div>
            <p className={`${styles.text} text14`}>Don’t have an account?</p>
            <Link className={`${styles.link} text14`} href="/register">
              Sign up
            </Link>
          </div>
          <Image
            src="/login/time_touch-gay.jpg"
            alt="Time touch gay"
            width={513}
            height={513}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </section>
      </Suspense>
    </CowerCreateShop>
  );
}
