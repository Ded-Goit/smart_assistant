import axios from "axios";

interface GetResursesParams {
  page?: number;
  perPage?: number;
  filter?: {
    resurseName?: string;
    category?: string;
  };
}

export interface ApiClientOptions extends RequestInit {
  accessToken?: string | null;
}

const BASE_URL = "https://timemanagement-back.onrender.com/resurse";

export const getAllResurses = async (params: GetResursesParams = {}) => {
  const { page = 1, perPage = 10, filter = {} } = params;

  const query = new URLSearchParams();
  query.append("page", String(page));
  query.append("perPage", String(perPage));

  if (filter.resurseName) query.append("resurseName", filter.resurseName);
  if (filter.category) query.append("category", filter.category);

  const response = await axios.get(`${BASE_URL}?${query.toString()}`, {
    withCredentials: true,
  });
  return response.data.data;
};

export const getResurseId = async (resurseId: string) => {
  const res = await fetch(`${BASE_URL}/${resurseId}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "get resurse failed");
  }

  return res.json();
};

export const changeResurse = async (values: any, resurseId: string) => {
  console.log("chg_value", values);

  const res = await fetch(`${BASE_URL}/${resurseId}`, {
    method: "PATCH",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Change resurse failed");
  }

  const data = await res.json();
  console.log("response", data);
  return data;
};

export const createResurse = async (payload: {
  resurseName: string;
  category?: string;
  resurse?: string;
}) => {
  const res = await fetch(`${BASE_URL}/`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Create resurse failed");
  }

  return res.json();
};

export const delResurseId = async (resurseId: string) => {
  const res = await fetch(`${BASE_URL}/${resurseId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    if (res.status === 204) return;
    const errorData = await res.json();
    throw new Error(errorData.message || "Delete resurse failed");
  }

  if (res.status === 204) return { message: "Deleted" };
  return res.json();
};
