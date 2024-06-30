interface EnvVariables {
  VITE_API_BASE_URL: string;
}

export const ENV_VARIABLES: EnvVariables = {
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
};
