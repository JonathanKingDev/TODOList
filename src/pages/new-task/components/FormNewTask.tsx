import React from "react";
import { NewTaskInput, createEmptyNewTaskInput } from "../newtask.vm";

interface Props {
  onCreate: (input: NewTaskInput) => void;
}

export const FormNewTask: React.FC<Props> = (props) => {
  const { onCreate } = props;

  const [userInput, setUserInput] = React.useState<NewTaskInput>(
    createEmptyNewTaskInput()
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(userInput);
  };

  return (
    <>
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <h1>Create New Task</h1>
          <input
            type="text"
            placeholder="Enter task name..."
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter task description..."
            name="description"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter status id..."
            name="statusId"
            onChange={handleChange}
          />
          <div>
            <h5>Possible Status Id:</h5>
            <div>
              <ol>
                <li>Not Started</li>
                <li>In Progress</li>
                <li>Finished</li>
              </ol>
            </div>
          </div>
          <button className="button-login" id="blue" type="submit">
            Create
          </button>
          <button className="button-login">Scape</button>
        </form>
      </div>
    </>
  );
};
