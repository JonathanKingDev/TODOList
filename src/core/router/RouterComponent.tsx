import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, TaskListPage } from "@/pages";
import { appRoutes } from "./routes";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.LoginPage} element={<LoginPage />} />
        <Route path={appRoutes.TaskListPage} element={<TaskListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
