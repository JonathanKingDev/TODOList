import { TaskModel } from "@/core/models/task-model";
import { EditTaskRequest } from "../models/task.api-model";
import api from "@/core/auth/api-base";

const TASK_PUT_ENDPOINT = "/assignment/";

export const editTask = async (
  request: EditTaskRequest
): Promise<TaskModel | null> => {
  try {
    const response = await api.put<TaskModel>(
      `${TASK_PUT_ENDPOINT}${request.id}`,
      request
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        `Put task ${request.id} failed with status code: ${response.status}`
      );
      return null;
    }
  } catch (error) {
    console.error("Put task failed: " + (error as Error).message);
    return null;
  }
};
