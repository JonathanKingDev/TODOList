import { Credentials } from "@/core/models/app.credentials-model";
import { ApiCredentials } from "../models/login.api-model";
import Axios from "axios";

const url = "https://to-do-api.codelatte.es/login";

export const validationLogin = async (
  credentials: ApiCredentials
): Promise<Credentials | null> => {
  try {
    const response = await Axios.post<Credentials>(url, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    //Si el status es success
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Login failed with status code: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};
