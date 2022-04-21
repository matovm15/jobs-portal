import api from "../api/api";

const loginUser = async (user) => {
  const res = await api.POST("/login", user);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.message);
  }
};

const loginCompany = async (company) => {
  const res = await api.POST("/company/login", company);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.message);
  }
};


const registerUser = async (user) => {
  const res = await api.POST("/register", user);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.message);
  }
};


const registerCompany = async (company) => {
  const res = await api.POST("/company/register", company);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.message);
  }
};


export const authService = {
  loginUser,
  loginCompany,
  registerCompany,
  registerUser
}