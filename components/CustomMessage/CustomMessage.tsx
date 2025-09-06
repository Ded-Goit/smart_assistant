"use client";

import React from "react";
import { ErrorMessage, useFormikContext } from "formik";
import css from "./CustomMessage.module.css";

interface CustomMessageProps {
  name: string;

}

export default function CustomMessage({ name }: CustomMessageProps) {
  const { touched, errors } = useFormikContext<any>();

  const fieldTouched = touched?.[name];
  const fieldError = errors?.[name];
  return (
    <>
      {errors && touched && (
        <ErrorMessage name={name}>
          {(msg: string) => (
            <span className={css.errorMessage}>
              <svg width="16" height="16" className={css.signalDot}>
                <use href="/sprite.svg#icon-error"></use>
              </svg>
              {msg}
            </span>
          )}
        </ErrorMessage>
      )}

      {touched && !errors && (
        <span className={css.successMessage}>
          <svg width="16" height="16" className={css.signalDot}>
            <use href="/sprite.svg#icon-success"></use>
          </svg>
          Succsess {name}!
        </span>
      )}
    </>
  );
}
