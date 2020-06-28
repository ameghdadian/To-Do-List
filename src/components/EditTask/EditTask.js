/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { connect } from "react-redux";

import { editTask } from "../../Redux/Tasks/tasks.actions";

import "./EditTask.scss";

const EditTask = ({ toggleEditTask, editTask, task }) => {
  const [taskTitle, setTaskTitle] = useState(task.taskTitle);
  const [taskDescription, setTaskDescription] = useState(task.taskDescription);
  const [taskGifts, setTaskGifts] = useState(task.taskGifts);
  const [taskImportance, setTaskImportance] = useState(task.taskImportance);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTaskTitle(value);
        return;
      case "description":
        setTaskDescription(value);
        return;
      case "gifts":
        setTaskGifts(value);
        return;
      case "task-importance":
        setTaskImportance(value);
        return;
      default:
        return;
    }
  };

  const onSubmitTask = () => {
    editTask({
      taskId: task.taskId,
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      taskGifts: taskGifts,
      taskImportance: taskImportance,
    });
  };

  return (
    <div className="main-modal">
      <div className="task-modal">
        <input
          type="text"
          placeholder="Task Title"
          name="title"
          value={taskTitle}
          onChange={onInputChange}
        />
        <textarea
          placeholder="Task Description"
          name="description"
          value={taskDescription}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Gifts and KPI for this task"
          name="gifts"
          value={taskGifts}
          onChange={onInputChange}
        />
        <div className="radio-group">
          <div className="radio-btns">
            <input
              type="radio"
              name="task-importance"
              value="Low"
              id="radio-1"
              onChange={onInputChange}
              checked={taskImportance === "Low"}
            />
            <label htmlFor="radio-1">Low</label>
          </div>
          <div className="radio-btns">
            <input
              type="radio"
              name="task-importance"
              value="Medium"
              id="radio-2"
              onChange={onInputChange}
              checked={taskImportance === "Medium"}
            />
            <label htmlFor="radio-2">Medium</label>
          </div>
          <div className="radio-btns">
            <input
              type="radio"
              name="task-importance"
              value="High"
              id="radio-3"
              onChange={onInputChange}
              checked={taskImportance === "High"}
            />
            <label htmlFor="radio-3">High</label>
          </div>
        </div>
        <a
          className="add-btn"
          onClick={() => {
            toggleEditTask();
            onSubmitTask();
          }}
        >
          Edit Task
        </a>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editTask: (task) => dispatch(editTask(task)),
});

export default connect(null, mapDispatchToProps)(EditTask);
