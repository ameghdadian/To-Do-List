export const addToTasks = (currentTasks, taskToAdd) => {
  return [...currentTasks, taskToAdd];
};

export const removeFromTasks = (currentTasks, taskToRemove) => {
  return currentTasks.filter((task) => {
    return task.taskId !== taskToRemove.taskId;
  });
};

export const editTask = (currentTasks, taskToEdit) => {
  return currentTasks.map((task) => {
    if (task.taskId === taskToEdit.taskId) {
      return {
        ...taskToEdit,
        taskTitle: taskToEdit.taskTitle,
        taskDescription: taskToEdit.taskDescription,
        taskGifts: taskToEdit.taskGifts,
        taskImportance: taskToEdit.taskImportance,
      };
    } else {
      return task;
    }
  });
};
