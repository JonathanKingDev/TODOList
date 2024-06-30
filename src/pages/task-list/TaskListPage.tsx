import { getTasks } from "@/services/api/requests/getTasks.api";
import React, { useEffect, useState } from "react";
import { List } from "./components/List";
import { TaskModel } from "@/services/api/models/task.api-model";
import { deleteCredentials } from "@/core/localstorage/localStorage.manager";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import plus from "@/assets/img/plus.png";

export const TaskListPage: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<number>(1);
  const [tabName, setTabName] = useState<string>("Not Started");
  const [checkMyTasks, setCheckMyTasks] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const navigate = useNavigate();

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

  const handleLogout = () => {
    deleteCredentials();
    navigate(appRoutes.ParentComponent);
  };

  const handleEventButton = (
    statusId: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setFilterStatus(statusId);
    setTabName(e.currentTarget.innerText); //Coge el texto del boton clicado
  };

  const handleNewTask = () => {
    navigate(appRoutes.NewTask);
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckMyTasks(e.target.checked);
  };

  let filteredTasks: TaskModel[] = tasks.filter(
    (task: TaskModel) => task.statusId === filterStatus
  );

  //Si el toggle está marcado, filtra por usuario actual
  if (checkMyTasks) {
    filteredTasks = filteredTasks.filter(
      (task: TaskModel) =>
        task.user.username === localStorage.getItem("Username")
    );
  }

  console.log(tasks);

  return (
    <>
      <div className="header-container">
        <button onClick={handleLogout}>Logout</button>
        <p>{localStorage.getItem("Username")}</p>
      </div>

      <div className="main-container">
        <div className="tab-container">
          <button onClick={(e) => handleEventButton(1, e)}>Not Started</button>
          <button onClick={(e) => handleEventButton(2, e)}>In Progress</button>
          <button onClick={(e) => handleEventButton(3, e)}>Finished</button>
        </div>

        <div className="list-container">
          <div>
            <List tasks={filteredTasks} status={tabName} />
          </div>
        </div>

        <div className="footer-tasklist">
          <div className="toggle-container">
            <label>Only my tasks</label>
            <input
              className="toggle"
              type="checkbox"
              id="my-toggle"
              onChange={handleToggle}
            />
          </div>

          <div className="add-task">
            <button onClick={handleNewTask}>
              <img src={plus} alt="Add new task" className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
