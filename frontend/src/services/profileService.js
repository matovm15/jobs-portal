import api from "../api";

const getProfile = async (id) => {
  const res = await api.GET(`/profiles/user/${id}/`);
  const user = await res.json();
  return user;
};

const getProfiles = async () => {
  const res = await api.GET("/profiles/");
  const data = await res.json();
  return data;
};

const updateProfile = async (id, userData) => {
  const res = await api.PUT(`/profiles/${id}/`, userData);
  const update = await res.json();
  return update;
};

const deleteProfile = async (id) => {
  const res = await api.DELETE(`/profiles/${id}/`);
  const data = await res.json();
  return data;
};

const createProfile = async (userData) => {
  const res = await api.POST("/profiles/", userData);
  const data = await res.json();
  return data;
};

export const profileService = {
  getProfile,
  updateProfile,
  deleteProfile,
  createProfile,
  getProfiles
};
