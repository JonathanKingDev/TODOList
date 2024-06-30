import { EditTaskRequest } from "@/services/api/models/task.api-model";
import * as viewModel from "./edittask.vm";

export const mapEditTaskToRequest = (
  task: viewModel.EditTaskInput
): EditTaskRequest => ({
  id: task.id,
  name: task.name,
  description: task.description,
  statusId: task.statusId,
});
