import * as apiModel from "../../services/api/models/sigup.api-model";
import * as viewModel from "./signup.vm";

export const mapSignupToRequest = (
  credentials: viewModel.SignupInput
): apiModel.SignupRequest => ({
  username: credentials.username,
  password: credentials.password,
  email: credentials.email,
});
