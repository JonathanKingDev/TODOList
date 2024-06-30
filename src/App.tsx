import React from "react";
import { Router } from "./core/router";
import { AuthProvider } from "./core/auth/auth.provider";

export const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
};
