import { Credentials } from "@/core/models/app.credentials-model";
import Axios from "axios";
import { SignUp } from "../models/sigup.api-model";

const url = "https://to-do-api.codelatte.es/signup";

export const validationLogin = async (
  credentials: SignUp
): Promise<Credentials | null> => {
  try {
    const response = await Axios.post<Credentials>(url, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};
