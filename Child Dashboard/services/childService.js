import apiClient from "../api/api";

export const fetchApps = () =>
  apiClient.get(`/child-dashboard/dashboard/apps`).then((res) => res.data);

export const fetchRestrictions = () =>
  apiClient.get(`/child-dashboard/restrictions`).then((res) => res.data);

export const logoutUser = () =>
  apiClient.post(`/child-dashboard/logout`);
