import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, TaskListPage } from "@/pages";
import { appRoutes } from "./routes";
import { SignupPage } from "@/pages/signup";
import { ParentLoginComponent } from "@/pages/ParentLoginComponent";
import { NewTaskPage } from "@/pages/new-task/NewTaskPage";
import { TaskDetails } from "@/pages/task-details/TaskDatails";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={appRoutes.ParentComponent}
          element={<ParentLoginComponent />}
        />

        <Route path={appRoutes.LoginPage} element={<LoginPage />} />
        <Route path={appRoutes.SignupPage} element={<SignupPage />} />

        <Route path={appRoutes.TaskListPage} element={<TaskListPage />} />
        <Route path={appRoutes.NewTask} element={<NewTaskPage />} />
        <Route path={"/:id/details"} element={<TaskDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
