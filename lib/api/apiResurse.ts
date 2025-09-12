// export interface ApiClientOptions extends RequestInit {
//   accessToken?: string | null;
// }

// const BASE_URL = "https://timemanagement-back.onrender.com/resurse";

// export const getAllResurses = async () => {
//   const res = await fetch(`${BASE_URL}`, {
//     method: "GET",
//     credentials: "include",
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "get rerurses failed");
//   }

//   return res.json();
// };

// export const getResurseId = async (resurseId: string) => {
//   const res = await fetch(`${BASE_URL}/${resurseId}`, {
//     method: "GET",
//     credentials: "include",
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "get rerurses failed");
//   }

//   return res.json();
// };

// export const changeResurse = async (values: any, resurseId: string) => {
//   const formData = new FormData();

//   if (values.category) formData.append("category", values.category);
//   if (values.resurseName) formData.append("resurseName", values.resurseName);
//   if (values.resurse) formData.append("resurse", values.resurse);

//   const res = await fetch(`${BASE_URL}/${resurseId}`, {
//     method: "PATCH",
//     credentials: "include",
//     body: formData,
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "Change resurse failed");
//   }

//   return res.json();
// };

// export const delResurseId = async (resurseId: string) => {
//   const res = await fetch(`${BASE_URL}/${resurseId}`, {
//     method: "DELETE",
//     credentials: "include",
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "get rerurses failed");
//   }

//   return res.json();
// };

// export const createResurse = async (values: any, resurseId: string) => {
//   const formData = new FormData();

//   const res = await fetch(`${BASE_URL}/`, {
//     method: "POST",
//     credentials: "include",
//     body: formData,
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "Add resurse failed");
//   }

//   return res.json();
// };
export interface ApiClientOptions extends RequestInit {
  accessToken?: string | null;
}

const BASE_URL = "https://timemanagement-back.onrender.com/resurse";

// GET all
export const getAllResurses = async () => {
  const res = await fetch(`${BASE_URL}/`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "get resurses failed");
  }

  return res.json();
};

// GET by id
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

// PATCH (Исправлено: удалён двоеточие)
export const changeResurse = async (values: any, resurseId: string) => {
  const formData = new FormData();

  if (values.category) formData.append("category", values.category);
  if (values.resurseName) formData.append("resurseName", values.resurseName);
  if (values.resurse) formData.append("resurse", values.resurse);

  const res = await fetch(`${BASE_URL}/${resurseId}`, {
    method: "PATCH",
    credentials: "include",
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Change resurse failed");
  }

  return res.json();
};

// POST create
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