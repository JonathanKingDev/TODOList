import { TaskModel } from "@/core/models/task-model";
import { getTasks } from "@/services/api/requests/getTasks.api";
import { useEffect, useState } from "react";

export const useTaskList = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const fetchTasks = () => {
    getTasks().then((Tasks) => {
      if (Tasks) {
        setTasks(Tasks);
      }
    });
  };

  useEffect(() => {
    //Llamar API cuando se monta el componente
    fetchTasks();
  }, []);

  return { tasks };
};
