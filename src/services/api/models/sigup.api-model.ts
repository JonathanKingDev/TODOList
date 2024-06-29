export interface SignupRequest {
  email: string;
  username: string;
  password: string;
}

//Comprobar si la request está vacía
export const isEmptyRequest = (r: SignupRequest): boolean => {
  return (
    !r.username ||
    r.username.trim().length === 0 ||
    !r.password ||
    r.password.trim().length === 0 ||
    !r.email ||
    r.email.trim().length === 0
  );
};
