import useAuthStore from "@/store/authStore";
import axios from "axios";

export const storeInitializer = async () => {
  try {
    useAuthStore.setState({
      status: "loading",
    })
    const { data } = await axios.get(`/api/users`);
    const { name, email, id, countries, isAdmin } = data.result;
    useAuthStore.setState({
      status: "success",
      auth: {
        id,
        countries,
        name,
        isAdmin,
        email,
      },
    });
  } catch (error: any) {
    console.log(error);
    useAuthStore.setState({
      status: "error",
    });
  }
};
