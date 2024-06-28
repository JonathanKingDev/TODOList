import * as apiModel from "../../services/api/models/login.api-model";
import * as viewModel from "./login.vm";

export const mapCredentialsFormToRequest = (
  credentials: viewModel.LoginInput
): apiModel.LoginRequest => ({
  usernameOrEmail: credentials.username,
  password: credentials.password,
});
