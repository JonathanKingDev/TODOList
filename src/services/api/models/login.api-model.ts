export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

//Comprobar si la request está vacía
export const isEmptyRequest = (r: LoginRequest): boolean => {
  return (
    !r.usernameOrEmail ||
    r.usernameOrEmail.trim().length === 0 ||
    !r.password ||
    r.password.trim().length === 0
  );
};
