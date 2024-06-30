export interface EditTaskInput {
  id: number;
  name: string;
  description: string;
  statusId: number;
}

export const createEmptyEditTaskInput = (): EditTaskInput => ({
  id: 0,
  name: "",
  description: "",
  statusId: 0,
});
