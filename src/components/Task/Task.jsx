import React from "react";
import { connect } from "react-redux";

import { doneTask } from "../../Redux/Tasks/tasks.actions";

import "./Task.scss";

const Task = ({
  task,
  finishTask,
  toggleEditTask,
  toggleOnClickToShowTask,
}) => {
  const { taskDescription, taskImportance, taskTitle, taskId } = task;
  return (
    <div className="task">
      <div
        className="task-title-description"
        onClick={() => toggleOnClickToShowTask(task)}
      >
        <h3 className="task-title">{taskTitle}</h3>
        <p className="task-decription">
          {taskDescription.split(" ").slice(0, 10).join(" ") + " ..."}
        </p>
      </div>
      <div className="task-importance-operations">
        <div className="task-importance">
          <label className="task-importance-label">{taskImportance}</label>
          <div
            className={`${
              taskImportance === "Low"
                ? "Low"
                : taskImportance === "Medium"
                ? "Medium"
                : "High"
            } task-importance-emergency`}
          ></div>
        </div>

        <div className="task-importance-btns">
          <button
            onClick={() => {
              finishTask({
                taskId,
                taskDescription,
                taskImportance,
                taskTitle,
                finishTask,
              });
            }}
          >
            Done Task
          </button>
          <button onClick={() => toggleEditTask(task)}>Edit Task</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  finishTask: (task) => dispatch(doneTask(task)),
});

export default connect(null, mapDispatchToProps)(Task);
