import api from "../api";

const loginUser = async (user) => {
  const res = await api.LOGIN("/auth/login/", user);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.non_field_errors[0]);
  }
};

const loginCompany = async (company) => {
  const res = await api.LOGIN("/auth/company/login/", company);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.data.non_field_errors[0]);
  }
};

const registerUser = async (user) => {
  const res = await api.REGISTER("/auth/register/", user);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.data.non_field_errors[0]);
  }
};

const registerCompany = async (company) => {
  const res = await api.REGISTER("/auth/company/register/", company);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.data.non_field_errors[0]);
  }
};

export const authService = {
  loginUser,
  loginCompany,
  registerCompany,
  registerUser,
};
