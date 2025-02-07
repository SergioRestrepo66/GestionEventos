import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const InicioSesion = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
