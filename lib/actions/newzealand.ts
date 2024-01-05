import axios from "axios";

export const sendApplication = async (data: any) => {
  const response = await axios.post("/api/newzealand", data);
  return response.data;
};
