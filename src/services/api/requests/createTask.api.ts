import Axios from "axios";
import { NewTaskRequest, TaskModel } from "../models/task.api-model";

const NEW_TASK_ENDPOINT = "https://to-do-api.codelatte.es/assignment";

export const createTask = async (
  request: NewTaskRequest
): Promise<TaskModel | null> => {
  try {
    const response = await Axios.post<TaskModel>(NEW_TASK_ENDPOINT, request, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
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
