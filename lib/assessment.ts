import axios from "axios";
import { SubmitProps } from "../components/AssessmentForm";
import { getServerURL } from "./utils";
import { Assessment } from "@/types";

export async function createAssessment(props: SubmitProps): Promise<boolean> {
  try {
    const resp = await axios.post(getServerURL("api/assessments"), {
      ...props,
    });
    return resp.status === 201;
  } catch (error) {
    return false;
  }
}

export async function getAssessments(): Promise<Assessment[]> {
  const { data, status } = await axios.get(getServerURL("api/assessments"));

  if (status === 200) {
    return data;
  }

  return [];
}

export async function deleteAssessment(id: string): Promise<boolean> {
  const { status } = await axios.delete(getServerURL(`api/assessments/${id}`));
  return status === 200;
}
