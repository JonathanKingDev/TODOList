export interface TaskModel {
  id: number;
  name: string;
  description: string;
  statusId: number;
}

export interface NewTaskRequest {
  name: string;
  description: string;
  statusId: number;
}

//Comprobar si la request está vacía
export const isEmptyRequest = (r: NewTaskRequest): boolean => {
  return (
    !r.name ||
    r.name.trim().length === 0 ||
    !r.description ||
    r.description.trim().length === 0 ||
    !r.statusId ||
    r.statusId <= 0
  );
};
