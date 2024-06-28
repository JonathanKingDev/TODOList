export interface AppUser {
  username: string;
  password: string;
}

export const createEmptyInput = (): AppUser => ({
  username: "",
  password: "",
});

// export interface CredentialsFormErrors {
//   user: string;
//   password: string;
// }
