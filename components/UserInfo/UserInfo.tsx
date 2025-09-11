"use client";

import { useEffect, useState } from "react";
import { getUserInfo} from "@/lib/api/apiClient";
import css from "./UserInfo.module.css";
import { FaRegCircleUser } from "react-icons/fa6";

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

  if (error) return <div className={css.button}>Error: {error}</div>;
  if (!user) return <div className={css.button}>Loading...</div>;

  return (
    <div className={css.button}>
      <div className={css.card}>
        <div className={css.photo}>
          {user.photo ? (
            <img
              src={user.photo}
              alt={`${user.name} image`}
              className={css.img}
              width="200"
            />
          ) : (
            <FaRegCircleUser className={css.altImg} size={64}/>
          )}
        </div>
      </div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
