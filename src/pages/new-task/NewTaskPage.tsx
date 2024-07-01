import React from "react";
import { FormNewTask } from "./components/FormNewTask";
import { useNewTask } from "./newTask-query";

export const NewTaskPage: React.FC = () => {
  const { handleCreateTaskSubmit } = useNewTask();

  return (
    <div>
      <FormNewTask onCreate={handleCreateTaskSubmit} />
    </div>
  );
};
