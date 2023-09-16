import axios from "axios";
import { SubmitProps } from "../components/ContactUs/Form";
import { getServerURL } from "./utils";

export async function createContact(props: SubmitProps): Promise<boolean> {
  try {
    const res = await axios.post(getServerURL("api/contacts"), {
      ...props,
    });

    console.log(res);

    return true;
  } catch (error) {
    return false;
  }
}
