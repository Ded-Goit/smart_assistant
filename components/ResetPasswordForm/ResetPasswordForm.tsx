"use client";

import { changePassword } from "@/lib/api/apiClient";
import css from "./ResetPasswordForm.module.css";
import { Toaster } from "react-hot-toast";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import PasswordField from "../PasswordField/PasswordField";
import { showSuccess, showError } from "../ToastComponent/ToastComponent.jsx";

export default function ResetPasswordForm() {
  const passwordField = Yup.string()
    .min(1, "Too short")
    .max(18, "Too long")
    .required("Required");

  const validationControl = Yup.object().shape({
    oldPassword: passwordField,
    newPassword: passwordField,
    confirm: Yup.string()
      .oneOf([Yup.ref("newPassword")], "❌ Passwords do not match")
      .required("Required"),
  });

  const handleSubmit = async (
    values: { oldPassword: string; newPassword: string; confirm: string },
    actions: FormikHelpers<any>
  ) => {
    const { oldPassword, newPassword } = values;

    try {
      await changePassword(oldPassword, newPassword);
      showSuccess({ message: "Change password successful!" });
      actions.resetForm();
    } catch (error: any) {
      showError(error.message || "Server error, please try again later");
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  interface registrationValues {
    oldPassword: string;
    newPassword: string;
    confirm: string;
  }
  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        confirm: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      {({ errors, touched }) => (
        <Form className={css.form} autoComplete="off">
          <div className={css.fialdStyle} style={{ marginBottom: "24px" }}>
            <PasswordField
              name="oldPassword"
              label="Old Password*"
              placeholder="Enter old password"
              className={css.mb}
            />
            <PasswordField
              name="newPassword"
              label="New Password*"
              placeholder="Enter new password"
              className={css.mb}
            />
            <PasswordField
              name="confirm"
              label="Confirm Password*"
              placeholder="Repeat new password"
              className={css.mb}
            />
          </div>
          <div className={css.btnMb}>
            <button type="submit" className={css.btn}>
              Save Changes
            </button>
          </div>

          <Toaster />
        </Form>
      )}
    </Formik>
  );
}
