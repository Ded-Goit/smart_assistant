"use client";

import css from "./RegistrationForm.module.css";
import { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import PasswordField from "../PasswordField/PasswordField";
import CustomMessage from "../CustomMessage/CustomMessage";
import { showSuccess, showError } from "../ToastComponent/ToastComponent.jsx";
import { useRouter } from "next/navigation";
import { registration } from "@/lib/api/apiClient";
import { Suspense } from "react";

export default function RegistrationForm() {
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
    <Suspense fallback={<div>Loading...</div>}>
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
            <div className={`${css.fialdStyle} ${css.regField}`}>
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
                <CustomMessage name="name" />
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
                <CustomMessage name="email" />
              </div>
              <PasswordField />
            </div>
            <button type="submit" className={css.btn}>
              Create account
            </button>
            <Toaster />
          </Form>
        )}
      </Formik>
    </Suspense>
  );
}
