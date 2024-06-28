import { Credentials } from "../models/app.credentials-model";

export const saveCredentials = (credentials: Credentials) => {
  localStorage.setItem("Token", credentials.token);
  localStorage.setItem("Username", credentials.username);
  localStorage.setItem("Email", credentials.email);
};

export const deleteCredentials = () => {
  localStorage.clear();
};
