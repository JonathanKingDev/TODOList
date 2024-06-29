export interface NewTaskInput {
  name: string;
  description: string;
  statusId: number;
}

export const createEmptyNewTaskInput = (): NewTaskInput => ({
  name: "",
  description: "",
  statusId: 0,
});
