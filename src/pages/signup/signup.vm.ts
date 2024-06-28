export interface SignupInput {
  username: string;
  password: string;
  email: string;
}

export const createEmptyInput = (): SignupInput => ({
  username: "",
  password: "",
  email: "",
});
