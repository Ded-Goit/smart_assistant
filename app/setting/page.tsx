// "user client"
// import Image from "next/image";
// import styles from "./setting.module.css";
// import Sidebar from "@/components/Sidebar/Sidebar";

// export default function SettingPage() {
//   return (
//     <>
//       <section className={styles.setting}>
//         <Sidebar />
//         <div className={styles.imagesBlock}>

//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
import styles from "./setting.module.css";
import UserInfo from "@/components/UserInfo/UserInfo";

export default function SettingPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <section className={styles.setting}>
      <Sidebar />
      <div className={styles.imagesBlock}>
<p> reset block</p>
          <ResetPasswordForm />
<UserInfo/>
      </div>
    </section>
  );
}
