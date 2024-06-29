import { useGetTasks } from "@/services/api/requests/getTask.api";
import React, { useState } from "react";
import { List } from "./components/List";
import { TaskModel } from "@/services/api/models/task.api-model";
import { deleteCredentials } from "@/core/localstorage/localStorage.manager";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import plus from "@/assets/img/plus.png";

export const TaskListPage: React.FC = () => {
  const { data } = useGetTasks();

  const [filterStatus, setFilterStatus] = useState<number>(1);

  const navigate = useNavigate();

  const handleLogout = () => {
    deleteCredentials();
    navigate(appRoutes.ParentComponent);
  };

  const handleEventButton = (statusId: number) => {
    setFilterStatus(statusId);
  };

  const handleNewTask = () => {
    navigate(appRoutes.NewTask);
  };

  if (!data) {
    return <div>No tasks available</div>;
  }

  let filteredTasks: TaskModel[] = [];
  let statusTitle: string = "";

  switch (filterStatus) {
    case 1:
      filteredTasks = data.filter((task: TaskModel) => task.statusId === 1);
      statusTitle = "Not Started";
      break;
    case 2:
      filteredTasks = data.filter((task: TaskModel) => task.statusId === 2);
      statusTitle = "In Progress";
      break;
    case 3:
      filteredTasks = data.filter((task: TaskModel) => task.statusId === 3);
      statusTitle = "Finished";
      break;
    default:
      console.error("Assigment status not supported: " + filterStatus);
      break;
  }

  return (
    <>
      <div className="header-container">
        <button onClick={handleLogout}>Logout</button>
        <p>{localStorage.getItem("Username")}</p>
      </div>

      <div className="tasklist-container">
        <div className="tab-container">
          <button onClick={() => handleEventButton(1)}>Not Started</button>
          <button onClick={() => handleEventButton(2)}>In Progress</button>
          <button onClick={() => handleEventButton(3)}>Finished</button>
        </div>

        <div className="list-container">
          <div>
            <List tasks={filteredTasks} status={statusTitle} />
          </div>
        </div>
        <div className="add-task">
          <button onClick={handleNewTask}>
            <img src={plus} alt="Add new task" className="icon" />
          </button>
        </div>
      </div>
    </>
  );
};
