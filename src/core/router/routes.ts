export const appRoutes = {
  ParentComponent: "/",
  LoginPage: "/login",
  SignupPage: "/signup",
  TaskListPage: "/tasklist",
  NewTask: "/newtask",
  TaskDetails: (id: number) => `/${id}/details`,
};
