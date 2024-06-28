export interface LoginInput {
  username: string;
  password: string;
}

export const createEmptyInput = (): LoginInput => ({
  username: "",
  password: "",
});
