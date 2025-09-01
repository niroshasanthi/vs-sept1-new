/*
import axios from "axios";

const API_BASE = "http://localhost:8082/api/members"; // Adjust if needed

export const addMember = async (data) => {
  try {
    const res = await axios.post(`${API_BASE}/add`, data);
    return res.data;
  } catch (err) {
    console.error("Add Member Error:", err);
    throw err;
  }
};

export const setRestrictions = async (data) => {
  try {
    const res = await axios.post(`${API_BASE}/set-restrictions`, data);
    return res.data;
  } catch (err) {
    console.error("Set Restrictions Error:", err);
    throw err;
  }
};

export const viewMembersReports = async () => {
  try {
    const res = await axios.get(`${API_BASE}/view-members-reports`);
    return res.data;
  } catch (err) {
    console.error("View Members & Reports Error:", err);
    throw err;
  }
};

*/