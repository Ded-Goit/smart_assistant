"use client";

import Image from "next/image";
import styles from "./login.module.css";
import css from "../register/register.module.css";
import { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import CustomMessage from "../register/CustomMessage/CustomMessage";
import {
  showSuccess,
  showError,
} from "../../components/ToastComponent/ToastComponent";
import { apiClient } from "@/lib/api/apiClient";
import { useEffect, useState } from "react";
import CowerCreateShop from "@/components/LoginCover/LoginCover";
import UserInfo from "@/components/UserInfo/UserInfo";
import GoogleLoginBtn from "@/components/GoogleLoginBtn/GoogleLoginBtn";
import Link from "next/link";

export default function LoginPage() {
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
    } catch (error: any) {
      showError({ message: error.message || "Login failed" });
    } finally {
      actions.setSubmitting(false);
    }
  };


  return (
    <CowerCreateShop>
      <section className={styles.login}>
        <div className={styles.imagesBlock}>
          <h2 className={css.title}>Log in to your account</h2>
          <p className={css.blala}>Welcome back! Please enter your details.</p>
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
                    <p className={css.fieldName}>Email or phone number*</p>
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
                    <p className={css.fieldName}>Password*</p>
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
        <GoogleLoginBtn />
        <div>
          <p>Don’t have an account? </p>
          <Link href="/register">Sign up</Link>
        </div>
      </section>
    </CowerCreateShop>
  );
}
