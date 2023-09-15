import axios from "axios";
import { SubmitProps } from "../components/AssessmentForm";

export async function createAssessment(props: SubmitProps): Promise<boolean> {
  try {
    // const res = await axios.post(`${import.meta.env.VITE_BASE_URI}/assessments`, {
    //   ...props,
    // });
    // return res.status === 201
    return true;
  } catch (error) {
    return false;
  }
}
