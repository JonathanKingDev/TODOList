import { EditTaskRequest, TaskModel } from "../models/task.api-model";
import axios from "axios";

const TASK_PUT_ENDPOINT = "https://to-do-api.codelatte.es/assignment/";

export const editTask = async (
  request: EditTaskRequest
): Promise<TaskModel | null> => {
  try {
    const response = await axios.put<TaskModel>(
      TASK_PUT_ENDPOINT + request.id,
      request,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
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
