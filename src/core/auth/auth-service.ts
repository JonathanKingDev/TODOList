// authService.ts
let token: string = "";

export const setAxiosToken = (newToken: string) => {
  token = newToken;
};

export const getAxiosToken = (): string | null => {
  return token;
};
