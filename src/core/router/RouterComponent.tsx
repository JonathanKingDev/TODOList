import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, TaskListPage } from "@/pages";
import { appRoutes } from "./routes";
import { SignupPage } from "@/pages/signup";
import { ParentComponent } from "@/ParentComponent";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.LoginPage} element={<LoginPage />} />
        <Route path={appRoutes.SignupPage} element={<SignupPage />} />
        <Route path={appRoutes.TaskListPage} element={<TaskListPage />} />
        <Route path={appRoutes.ParentComponent} element={<ParentComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
