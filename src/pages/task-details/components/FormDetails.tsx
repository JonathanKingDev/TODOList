import React, { useEffect, useState } from "react";
import { EditTaskInput, createEmptyEditTaskInput } from "../edittask.vm";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { getTaskDetails } from "@/services/api/requests/getDetailsTask.api";
import { TaskModel } from "@/services/api/models/task.api-model";
import { format } from "date-fns";

interface Props {
  onChangeDatails: (input: EditTaskInput) => void;
}

export const FormDetails: React.FC<Props> = (props) => {
  const [task, setTask] = useState<TaskModel | null>(null);
  const [userInput, setUserInput] = React.useState<EditTaskInput>(
    createEmptyEditTaskInput()
  );

  const { onChangeDatails } = props;
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  //el id de la ruta siempre es string y hace falta castear a number
  const taskId = id ? Number(id) : NaN;

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const Task = await getTaskDetails(taskId);
        if (Task) {
          setTask(Task);
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    // Solo llama fetchTask si taskId es un número válido
    if (!isNaN(taskId)) {
      fetchTask();
    }
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate(appRoutes.TaskListPage);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onChangeDatails(userInput);
  };

  const formattedDate = format(task.createdAt, "dd/MM/yyyy");

  return (
    <>
      <div className="datails-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Task Details</h1>
          <div>
            <label>Owner: {task.user.username}</label>
          </div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={task.name}
          />
          <textarea
            name="description"
            rows={10}
            cols={50}
            onChange={handleChangeArea}
            value={task.description}
          ></textarea>
          <div>
            <label>Created: {formattedDate}</label>
          </div>
          <label>Status: {task.statusId}</label>

          <div className="buttons-details-container">
            <button
              className="button-login"
              id="blue"
              type="button"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button className="button-login" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};