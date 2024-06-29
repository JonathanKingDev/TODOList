import { TaskModel } from "@/services/api/models/task.api-model";
import { useGetTasks } from "@/services/api/requests/getTask.api";
import React from "react";

export const TaskListPage: React.FC = () => {
  const { data } = useGetTasks();
  console.log(data);
  return (
    <>
      <div>
        <h1>TASK LIST</h1>
        <div>
          <ul>
            {data?.map((task: TaskModel) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

//TODO: añadir un header con el nombre del usuario y un boton de logout
