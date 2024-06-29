import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewTaskInput } from "./newtask.vm";
import { mapNewTaskToRequest } from "./newtaks.mapper";
import { isEmptyRequest } from "@/services/api/models/task.api-model";
import { createTask } from "@/services/api/requests/createTask.api";
import { appRoutes } from "@/core/router";
import { FormNewTask } from "./components/FormNewTask";

export const NewTaskPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showAlert) {
      alert("New task created!");
      setTimeout(() => {
        navigate(appRoutes.TaskListPage);
      }, 100);
    }
  }, [showAlert, navigate]);

  const handleCreateTaskSubmit = (input: NewTaskInput) => {
    const newTask = mapNewTaskToRequest(input);

    //Método para evitar llamar a la api si la request está vacía
    if (isEmptyRequest(newTask)) return;

    createTask(newTask).then((Task) => {
      if (Task) {
        setShowAlert(true);
      } else {
        alert("Error in create new task");
      }
    });
  };

  return (
    <div>
      <FormNewTask onCreate={handleCreateTaskSubmit} />
    </div>
  );
};
