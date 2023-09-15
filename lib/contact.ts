import axios from "axios";
import { SubmitProps } from "../components/ContactUs/ContactFrom";

export async function createContact(props: SubmitProps): Promise<boolean> {
  try {
    // const res = await axios.post(`${import.meta.env.VITE_BASE_URI}/contacts`, {
    //   ...props,
    // });
    // return res.status === 201
    return true;
  } catch (error) {
    return false;
  }
}
