import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { EditTaskInput } from "./edittask.vm";
import { mapEditTaskToRequest } from "./edittask.mapper";
import { editTask } from "@/services/api/requests/editTask.api";

export const useDetailsQuery = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showAlert) {
      alert("Task edited!");
      setTimeout(() => {
        navigate(appRoutes.TaskListPage);
      }, 100);
    }
  }, [showAlert, navigate]);

  const handleEditTaskSubmit = (input: EditTaskInput) => {
    const task = mapEditTaskToRequest(input);
    console.log(task); // Para depuración

    editTask(task).then((Task) => {
      if (Task) {
        setShowAlert(true);
      } else {
        alert("Error in edit task");
      }
    });
  };

  return { handleEditTaskSubmit };
};
