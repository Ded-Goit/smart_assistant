
"use client";

import { Field } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import css from "./PasswordField.module.css";

interface PasswordFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function PasswordField({
  name,
  label,
  placeholder,
  className = "",
}: PasswordFieldProps) {
  const [eyeOpen, setEyeOpen] = useState(true);

  const toggleEye = () => setEyeOpen((prev) => !prev);

  return (
    <div className={`${css.wrapper} ${className}`}>
      {label ? <p className={css.fieldName}>{label}</p> : null}

      <div className={css.eyerelative}>
        <button
          type="button"
          onClick={toggleEye}
          className={css.btnEye}
          aria-label={eyeOpen ? "Show password" : "Hide password"}        
        >
          {eyeOpen ? (
            < FiEyeOff size={20} className={css.eye} />
          ) : (
            < FiEye size={20} className={css.eye} />
          )}
        </button>
        <Field
          type={eyeOpen ? "password" : "text"}
          name={name}
          placeholder={placeholder || ""}
          className={`${css.field}`}
          autoComplete="new-password"
        />
      </div>
    </div>
  );
}