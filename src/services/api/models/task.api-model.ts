export interface TaskModel {
  id: number;
  name: string;
  description: string;
  statusId: number;
}

export interface NewTask {
  name: string;
  description: string;
  statusId: number;
}
