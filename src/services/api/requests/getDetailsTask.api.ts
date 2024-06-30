import { TaskModel } from "../models/task.api-model";
import api from "@/core/auth/api-base";

const TASKS_GET_ENDPOINT = "/assignment/";

export const getTaskDetails = async (id: number): Promise<TaskModel | null> => {
  try {
    const response = await api.get<TaskModel>(`${TASKS_GET_ENDPOINT}${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(
        `Get task ${id} failed with status code: ${response.status}`
      );
      return null;
    }
  } catch (error) {
    console.error("Get task failed: " + (error as Error).message);
    return null;
  }
};
