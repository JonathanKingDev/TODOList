import { TaskModel } from "@/services/api/models/task.api-model";
import React from "react";

interface Props {
  tasks: TaskModel[];
  status: string;
}

export const List: React.FC<Props> = (props) => {
  const { tasks, status } = props;

  return (
    <>
      <div>
        <h1>TASK {status}</h1>
        <div>
          <ul>
            {tasks.map((task: TaskModel) => (
              <li key={task.id}>{task.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
