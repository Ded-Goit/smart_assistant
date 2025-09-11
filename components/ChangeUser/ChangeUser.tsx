"use client";

import css from "./ChangeUser.module.css";
import { Toaster } from "react-hot-toast";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import CustomMessage from "../CustomMessage/CustomMessage";
import { showSuccess, showError } from "../ToastComponent/ToastComponent.jsx";
import { useRouter } from "next/navigation";
import { changeUserInfo, getUserInfo } from "@/lib/api/apiClient";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function ChangeUserForm() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserInfo();
        setUser(userData.data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUser();
  }, []);

  if (error) return <div className={css.button}>Error: {error}</div>;
  if (!user) return <div className={css.button}>Loading...</div>;

  const validationControl = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(30, "Too Long!"),
    email: Yup.string().email("Invalid email").max(50, "Too Long!"),
    photo: Yup.mixed().nullable(),
  });

  const handleSubmit = async (values: any, actions: FormikHelpers<any>) => {
    try {
      const data = await changeUserInfo(
        { name: values.name, email: values.email },
        values.photo instanceof File ? values.photo : undefined
      );

      showSuccess({ message: "Change user info successful!" });
      console.log("User changed:", data);
      const updatedUser = await getUserInfo();
      setUser(updatedUser.data);
      actions.resetForm();
    } catch (error: any) {
      showError(error.message || "Server error, please try again later");
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={css.userInfo}>
        <div className={css.card}>
          <div className={css.photo}>
            {user.photo ? (
              <img
                src={user.photo}
                alt={`${user.name} image`}
                className={css.img}
                width="64"
              />
            ) : (
              <FaRegCircleUser className={css.altImg} size={64} />
            )}
          </div>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            photo: null,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationControl}
        >
          {({ errors, touched, setFieldValue, resetForm }) => (
            <Form className={css.form} autoComplete="off">
              <div className={`${css.fialdStyle} ${css.regField}`}>
                <div className={css.fieldPosition}>
                  <p className={css.fieldName}>Name*</p>
                  <Field
                    type="text"
                    name="name"
                    placeholder={user.name}
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
                    placeholder={user.email}
                    className={`${css.field} ${
                      errors.email && touched.email
                        ? css.errorField
                        : touched.email && !errors.email
                          ? css.successField
                          : ""
                    }`}
                  />
                  <CustomMessage name="email" />
                </div>

                <div className={css.fieldPosition}>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      if (e.currentTarget.files && e.currentTarget.files[0]) {
                        setFieldValue("photo", e.currentTarget.files[0]);
                      }
                    }}
                  />

                  <label htmlFor="photo" className={css.uploadBtn}>
                    <div className={css.cloud}>
                      <IoCloudUploadOutline size={20} />
                    </div>

                    <p>
                      <span className={css.span}> Click to upload</span>
                      or drag and drop
                    </p>
                    <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                  </label>

                  {errors.photo && touched.photo && (
                    <div className={css.errorField}>{errors.photo}</div>
                  )}
                </div>
              </div>
              <div className={css.btnBlock}>
                <button
                  type="button"
                  onClick={() => resetForm()}
                  className={css.btnCancel}
                >
                  Cancel
                </button>
                <button type="submit" className={css.btn}>
                  Save Changes
                </button>
              </div>

              <Toaster />
            </Form>
          )}
        </Formik>
      </div>
    </Suspense>
  );
}
