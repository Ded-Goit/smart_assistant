"use client";

import { useEffect } from "react";
import { apiClient } from "@/lib/api/apiClient";

export default function ProfileLoader() {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    apiClient("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((user) => console.log("User:", user))
      .catch((err) => console.error("Failed to fetch user", err));
  }, []);

  return null;
}