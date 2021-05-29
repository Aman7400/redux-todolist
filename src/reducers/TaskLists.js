const initialState = {
  tasks: [],
};

const TaskListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddTask":
      const newTask = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case "DeleteTask":
      const id = action.id;
      console.log(id);
      const remainingTasks = state.tasks.filter((item, index) => {
        return index !== id;
      });
      console.log(remainingTasks);
      return {
        ...state,
        tasks: [...remainingTasks],
      };

    default:
      return state;
  }
};

export default TaskListReducer;

// export const TaskListReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "AddTask":
//       return { ...state, payload };

//     case "DeleteTask":
//       return {};

//     default:
//       return state;
//   }
// };
