export const appRoutes = {
  RootPage: "/",
  LoginPage: "/login",
  SignupPage: "/signup",
  TaskListPage: "/tasklist",
  NewTask: "/newtask",
  TaskDetails: (id: number) => `/${id}/details`,
};
