import { TaskModel } from "@/core/models/task-model";
import api from "@/core/auth/api-base";

//const TASKS_GET_ENDPOINT = "https://to-do-api.codelatte.es/assignment";
const TASKS_GET_ENDPOINT = "/assignment";

export const getTasks = async (): Promise<TaskModel[] | null> => {
  try {
    const response = await api.get<TaskModel[]>(TASKS_GET_ENDPOINT, {});
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      console.error(`Get tasks failed with status code: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Get tasks failed: " + (error as Error).message);
    return null;
  }
};
