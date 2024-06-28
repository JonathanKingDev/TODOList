import { Credentials } from "@/core/models/app.credentials-model";
import Axios from "axios";
import { SignupRequest } from "../models/sigup.api-model";

const SIGNUP_ENDPOINT = "https://to-do-api.codelatte.es/signup";

export const registerUser = async (
  request: SignupRequest
): Promise<Credentials | null> => {
  try {
    const response = await Axios.post<Credentials>(SIGNUP_ENDPOINT, request, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Sign up failed with status code: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Sign up failed:", error);
    return null;
  }
};
