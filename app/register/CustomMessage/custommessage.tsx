"use client";

import React from "react";
import { ErrorMessage } from "formik";
import style from "./CustomMessage.module.css";

interface CustomMessageProps {
  name: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
}

export default function CustomMessage({
  name,
  errors,
  touched,
}: CustomMessageProps) {
  return (
    <>
      {errors && touched && (
        <ErrorMessage name={name}>
          {(msg: string) => (
            <span className={style.errorMessage}>
              <svg width="16" height="16" className={style.signalDot}>
                <use href="/sprite.svg#icon-error"></use>
              </svg>
              {msg}
            </span>
          )}
        </ErrorMessage>
      )}

      {touched && !errors && (
        <span className={style.successMessage}>
          <svg width="16" height="16" className={style.signalDot}>
            <use href="/sprite.svg#icon-success"></use>
          </svg>
          Succsess {name}!
        </span>
      )}
    </>
  );
}
