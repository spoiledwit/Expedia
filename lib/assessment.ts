import axios from "axios";
import { SubmitProps } from "../components/AssessmentForm";
import { getServerURL } from "./utils";

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
