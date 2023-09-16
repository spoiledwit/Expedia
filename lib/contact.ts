import axios from "axios";
import { SubmitProps } from "../components/ContactUs/Form";
import { getServerURL } from "./utils";
import { Contact } from "@/types";

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

export async function getContacts(): Promise<Contact[]> {
  const resp = await fetch(getServerURL("api/contacts"), {
    cache: "no-store",
  });

  const data = await resp.json();
  const status = resp.status;

  if (status === 200) {
    return data;
  }
  return [];
}

export async function deleteContact(id: string): Promise<boolean> {
  const { status } = await axios.delete(getServerURL(`api/contacts/${id}`));
  return status === 200;
}
