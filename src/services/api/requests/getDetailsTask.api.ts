import { TaskModel } from "../models/task.api-model";
import axios from "axios";

const TASKS_GET_ENDPOINT = "https://to-do-api.codelatte.es/assignment/";

export const getTaskDetails = async (id: number): Promise<TaskModel | null> => {
  try {
    const response = await axios.get<TaskModel>(TASKS_GET_ENDPOINT + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
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
