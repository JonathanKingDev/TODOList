import api from "@/core/auth/api-base";
import { NewTaskRequest } from "../models/task.api-model";
import { TaskModel } from "@/core/models/task-model";

const NEW_TASK_ENDPOINT = "/assignment";

export const createTask = async (
  request: NewTaskRequest
): Promise<TaskModel | null> => {
  try {
    const response = await api.post<TaskModel>(NEW_TASK_ENDPOINT, request);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Create Task failed with status code: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Create Task failed:", error);
    return null;
  }
};
