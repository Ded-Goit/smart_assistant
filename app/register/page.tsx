"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import css from "./register.module.css";
import { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import CustomMessage from "@/components/CustomMessage/CustomMessage";
import {
  showSuccess,
  showError,
} from "../../components/ToastComponent/ToastComponent";
import { registration } from "@/lib/api/apiClient";
import GoogleLoginBtn from "@/components/GoogleLoginBtn/GoogleLoginBtn";
import OAuthCallback from "@/components/OAuthCallback/OAuthCallback";
import Link from "next/link";
import ForgotPasswordPage from "../forgot-password/page";

function RegisterContent() {
  const params = useSearchParams();
  const ref = params.get("ref");

  return <div>Register {ref && `(ref: ${ref})`}</div>;
}


export default function RegisterPage() {
  const router = useRouter();
  const validationControl = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(3, " Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });
  const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
    try {
      const data = await registration(values);

      showSuccess({ message: "Registration successful!" });
      console.log("User registered:", data);

      actions.resetForm();
     router.push("/setting");
    } catch (error: any) {
      showError(error.message || "Server error, please try again later");
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

    interface registrationValues {
      email: string;
      password: string;
    }



  return (
    <>
      <section className={css.cover}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={css.block}>
            <h2 className={css.title}>Register</h2>
            <Formik
              initialValues={{
                name: "",
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
                      <p className={css.fieldName}>Name*</p>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className={`${css.field} ${
                          errors.name && touched.name
                            ? css.errorField
                            : touched.name && !errors.name
                              ? css.successField
                              : ""
                        }`}
                      />
                      <CustomMessage
                        name="name"
                        errors={errors.name}
                        touched={touched.name}
                      />
                    </div>
                    <div className={css.fieldPosition}>
                      <p className={css.fieldName}>Email*</p>
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
                        placeholder="Create a password"
                      />
                      <CustomMessage
                        name="password"
                        errors={errors.password}
                        touched={touched.password}
                      />
                    </div>
                  </div>
                  <button type="submit" className={css.btn}>
                    Create account
                  </button>
                  <Toaster />
                </Form>
              )}
            </Formik>
            <Link href="/forgot-password">Forgot password</Link>
            <OAuthCallback />
            <div>
              <p>Already have an account? </p>
              <Link href="/login">Sign up</Link>
            </div>
          </div>
          <div className={css.block}></div>
        </Suspense>
      </section>
    </>
  );
}
