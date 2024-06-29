import { NewTaskRequest } from "@/services/api/models/task.api-model";
import * as viewModel from "./newtask.vm";

export const mapNewTaskToRequest = (
  task: viewModel.NewTaskInput
): NewTaskRequest => ({
  name: task.name,
  description: task.description,
  statusId: task.statusId,
});
