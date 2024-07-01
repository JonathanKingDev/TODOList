import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { TaskListPage } from "@/pages";
import { appRoutes } from "./routes";
import { ParentLoginComponent } from "@/pages/ParentLoginComponent";
import { NewTaskPage } from "@/pages/new-task/NewTaskPage";
import { TaskDetails } from "@/pages/task-details/TaskDatails";
import { AppLayout } from "@/layout/app.layout";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.RootPage} element={<ParentLoginComponent />} />

        <Route
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        >
          <Route path={appRoutes.TaskListPage} element={<TaskListPage />} />
          <Route path={appRoutes.NewTask} element={<NewTaskPage />} />
          <Route path={"/:id/details"} element={<TaskDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
