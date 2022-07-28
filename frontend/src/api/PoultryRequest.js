import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });

export const addPoultry = (data) => API.post("/poultry/new", data);
export const addChick = (data) => API.post("/chick/new", data);
export const getPoultry = () => API.get("/poultries");
export const getPoultryDetails = (id) => API.get(`/poultry/${id}`);
export const updatePoultry = (id, data) => API.put(`/poultry/${id}`, data);
