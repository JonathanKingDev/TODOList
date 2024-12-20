export interface NewTaskInput {
  name: string;
  description: string;
  statusId: number;
}

export const createEmptyNewTaskInput = (): NewTaskInput => ({
  name: "",
  description: "",
  statusId: 1, //Todas las tareas se crean como Not Started
});
