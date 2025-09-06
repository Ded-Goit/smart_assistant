"use client";

import css from "./PasswordField.module.css";
import { Field, useFormikContext } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import CustomMessage from "../CustomMessage/CustomMessage";

export default function PasswordField() {
  const [eyeOpen, setEyeOpen] = useState(true);

  const { touched, errors } = useFormikContext<any>();

  const handleEyeToggle = () => {
    setEyeOpen((prev) => !prev);
  };

  return (
    <div className={css.eyerelative}>
      <button type="button" className={css.btnEye} onClick={handleEyeToggle}>
        {eyeOpen ? (
          <FiEyeOff size={19} className={css.eye} />
        ) : (
          <FiEye size={19} className={css.eye} />
        )}
      </button>
      <p className={css.fieldName}>Password*</p>
      <Field
        type={eyeOpen ? "password" : "text"}
        name="password"
        className={`${css.field} ${
          errors.password && touched.password
            ? css.errorField
            : touched.password && !errors.password
              ? css.successField
              : ""
        }`}
        placeholder="Password"
      />

      <CustomMessage name="password" />
    </div>
  );
}
