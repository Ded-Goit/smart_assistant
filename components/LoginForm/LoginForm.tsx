"use client";

import css from "../RegistrationForm/RegistrationForm.module.css";
import { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import PasswordField from "../PasswordField/PasswordField";
import CustomMessage from "../CustomMessage/CustomMessage";
import { showSuccess, showError } from "../ToastComponent/ToastComponent.jsx";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api/apiClient";
import { Suspense } from "react";
import Link from "next/link";

export default function LoginForm() {
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

const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
  try {
    const data = await apiClient("/auth/login", {
      method: "POST",
      body: JSON.stringify(values),
    });

    showSuccess({ message: "Login successful!" });
    actions.resetForm();
    router.push("/setting");
  } catch (error: any) {
    showError(error.message || "Server error, please try again later");
    console.error(error);
  } finally {
    actions.setSubmitting(false);
  }
};
  interface loginValues {
    email: string;
    password: string;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            <div className={`${css.fialdStyle} ${css.loginField}`}>
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
                <CustomMessage name="email" />
              </div>
              <PasswordField />
            </div>
            <Link href="/forgot-password" className={css.forgotPwd}>
              Forgot password
            </Link>
            <button type="submit" className={css.btn}>
              Sign in
            </button>
            <Toaster />
          </Form>
        )}
      </Formik>
    </Suspense>
  );
}
