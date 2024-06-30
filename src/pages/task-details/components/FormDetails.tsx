import React from "react";
import { EditTaskInput, createEmptyEditTaskInput } from "../edittask.vm";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

interface Props {
  onChangeDatails: (input: EditTaskInput) => void;
}

export const FormDetails: React.FC<Props> = (props) => {
  const { onChangeDatails } = props;

  const [userInput, setUserInput] = React.useState<EditTaskInput>(
    createEmptyEditTaskInput()
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

  const handleCancel = () => {
    navigate(appRoutes.TaskListPage);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChangeDatails(userInput);
  };

  return (
    <>
      <div className="datails-container">
        <form onSubmit={handleSubmit}>
          <h1>Task Details</h1>
          <label>OWNER</label>
          <input
            type="text"
            placeholder="Task name..."
            name="name"
            onChange={handleChange}
          />
          <textarea
            placeholder="Task description..."
            name="description"
            rows={10}
            cols={50}
            onChange={handleChangeArea}
          ></textarea>

          <label>DATE</label>
          <label>STATUS</label>

          <div className="buttons-details-container">
            <button className="button-login" id="blue" type="submit">
              Edit
            </button>
            <button className="button-login" onClick={handleCancel}>
              Return
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
