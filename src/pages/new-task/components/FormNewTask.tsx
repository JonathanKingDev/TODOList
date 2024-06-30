import React from "react";
import { NewTaskInput, createEmptyNewTaskInput } from "../newtask.vm";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

interface Props {
  onCreate: (input: NewTaskInput) => void;
}

export const FormNewTask: React.FC<Props> = (props) => {
  const { onCreate } = props;

  const [userInput, setUserInput] = React.useState<NewTaskInput>(
    createEmptyNewTaskInput()
  );

  const navigate = useNavigate();

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

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(userInput);
  };

  const handleCancel = () => {
    navigate(appRoutes.TaskListPage);
  };

  return (
    <>
      <div className="new-task-container">
        <form onSubmit={handleSubmit}>
          <h1>Create New Task</h1>
          <input
            type="text"
            placeholder="Enter task name..."
            name="name"
            onChange={handleChange}
          />
          <textarea
            placeholder="Enter task description..."
            name="description"
            rows={10}
            cols={50}
            onChange={handleChangeArea}
          ></textarea>

          <button className="button-login" id="blue" type="submit">
            Create
          </button>
          <button className="button-login" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};
