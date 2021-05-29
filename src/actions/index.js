export const addTask = (data) => {
  return {
    type: "AddTask",
    payload: data,
  };
};
export const deleteTask = (id) => {
  return {
    type: "DeleteTask",
    id,
  };
};
