export interface ApiClientOptions extends RequestInit {
  accessToken?: string | null;
}

const BASE_URL = "https://timemanagement-back.onrender.com";

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.message || "Request failed");
  }
  return res.json();
}

export const logout = async () => {
  const res = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Logout failed");
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
};

export const registration = async (values: any) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return res.json();
};

export const getUserInfo = async () => {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "get info failed");
  }

  return res.json();
};

export const changeUserInfo = async (values: any, file?: File) => {
  const formData = new FormData();

  if (values.name) formData.append("name", values.name);
  if (values.email) formData.append("email", values.email);
  if (file) formData.append("photo", file); 

  const res = await fetch(`${BASE_URL}/auth/change-user`, {
    method: "PATCH", 
    credentials: "include",
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Change user info failed");
  }

  return res.json();
};
export const getGoogleOAuthUrl = async () => {
  const res = await fetch(`${BASE_URL}/auth/get-oauth-url`, {
    credentials: "include",
  });
  const data = await res.json();
  return data.data.url;
};

export const loginWithGoogle = async (code: string) => {
  const res = await fetch(`${BASE_URL}/auth/confirm-oauth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "OAuth login failed");
  }

  return res.json();
};

export async function changePassword(oldPassword: string, newPassword: string) {
  const res = await fetch(`${BASE_URL}/auth/change-pwd`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ oldPassword, newPassword }),
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return data;
}

export async function forgotPwd(email: string) {
  try {
    const res = await fetch(
      "https://timemanagement-back.onrender.com/auth/send-reset-email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }
    return data;
  } catch (err: any) {
    throw new Error(err.message || "Network error");
  }
}

export async function resetPassword(password: string, token: string) {
  try {
    const res = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, token }),
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Request failed");
    }
    return data;
  } catch (err: any) {
    throw new Error(err.message || "Network error");
  }
}