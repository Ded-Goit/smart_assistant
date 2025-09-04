"use client";

import { useEffect, useState } from "react";
import { getUserInfo } from "@/lib/api/apiClient";
import css from "./UserInfo.module.css";

export default function UserInfo() {
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

  if (error) return <div className={css.button}>Ошибка: {error}</div>;
  if (!user) return <div className={css.button}>Загрузка...</div>;

  return (
    <div className={css.button}>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
