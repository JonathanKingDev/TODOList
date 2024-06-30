export interface TaskModel {
  id: number;
  name: string;
  description: string;
  statusId: number;
  createdAt: Date;
  user: User;
}

export interface User {
  id: string;
  username: string;
}
