import React from "react";
import { useDetailsQuery } from "./taskDetails-query";
import { FormDetails } from "./components/FormDetails";

export const TaskDetails: React.FC = () => {
  const { handleEditTaskSubmit } = useDetailsQuery();

  return (
    <>
      <FormDetails onChangeDatails={handleEditTaskSubmit} />
    </>
  );
};
