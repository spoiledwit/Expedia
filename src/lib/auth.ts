import axios from "axios";

export const login = async (email: string, password: string) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_BASE_URI}/user/login`,
    { email, password }
  );
  localStorage.setItem("token", data.token);
  return data;
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_BASE_URI}/user/register`,
    { name, email, password }
  );
  localStorage.setItem("token", data.token);
  return data;
};
