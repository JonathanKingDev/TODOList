import { appRoutes } from "@/core/router";
import { TaskModel } from "@/core/models/task-model";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  tasks: TaskModel[];
  status: string;
}

export const List: React.FC<Props> = (props) => {
  const { tasks, status } = props;

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(appRoutes.TaskDetails(id));
  };

  return (
    <>
      <div className="title-tasks">
        <h1>{status} TASKS </h1>
      </div>
      <div className="task-list">
        <ul>
          {tasks.map((task: TaskModel) => (
            <li key={task.id}>
              <button onClick={() => handleClick(task.id)}>{task.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
