export const appRoutes = {
  RootPage: "/",
  TaskListPage: "/tasklist",
  NewTask: "/newtask",
  TaskDetails: (id: number) => `/${id}/details`,
};
