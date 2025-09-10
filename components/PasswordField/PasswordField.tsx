// "use client";

// import { Field } from "formik";
// import { useState } from "react";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import css from "./PasswordField.module.css";

// interface PasswordFieldProps {
//   name: string;
//   label?: string;
//   placeholder?: string;
//   className?: string;
// }

// export default function PasswordField({
//   name,
//   label,
//   placeholder,
//   className = "",
// }: PasswordFieldProps) {
//   const [eyeOpen, setEyeOpen] = useState(true);

//   const toggleEye = () => setEyeOpen((prev) => !prev);

//   return (
//     <div className={`${css.wrapper} ${className}`}>
//       {label ? <p className={css.fieldName}>{label}</p> : null}

//       <div className={css.eyerelative}>
//         <button
//           type="button"
//           onClick={toggleEye}
//           className={css.btnEye}
//           aria-label={eyeOpen ? "Show password" : "Hide password"}
//         >
//           {eyeOpen ? (
//             < FiEyeOff size={20} className={css.eye} />
//           ) : (
//             < FiEye size={20} className={css.eye} />
//           )}
//         </button>
//         <Field
//           type={eyeOpen ? "password" : "text"}
//           name={name}
//           placeholder={placeholder || ""}
//           className={`${css.field}`}
//           autoComplete="new-password"
//         />
//       </div>
//     </div>
//   );
// }

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