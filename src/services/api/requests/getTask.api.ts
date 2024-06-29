import { useEffect, useState } from "react";
import { TaskModel } from "../models/task.api-model";
import axios from "axios";

const TASKS_GET_ENDPOINT = "https://to-do-api.codelatte.es/assignment";

export const useGetTasks = () => {
  const [data, setData] = useState<TaskModel[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<TaskModel[]>(TASKS_GET_ENDPOINT, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        });
        if (response.status === 200) {
          setData(response.data);
        } else {
          console.error(
            `Get tasks failed with status code: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Get tasks failed: " + (error as Error).message);
      }
    };

    fetchData();
  }, []);

  return { data };
};
