import React from "react";
import { connect } from "react-redux";

import { doneTask, removeTask } from "../../Redux/Tasks/tasks.actions";

import "./TaskToShow.scss";

const TaskToShow = ({
  task,
  toggleOnClickToShowTask,
  toggleEditTask,
  doneTask,
  removeTask,
}) => {
  const importanceColor = {
    color:
      task.taskImportance === "High"
        ? "red"
        : task.taskImportance === "Low"
        ? "green"
        : "yellow",
  };
  const importanceBackgroundColor = () => {
    switch (task.taskImportance) {
      case "High":
        return "red";
      case "Medium":
        return "yellow";
      case "Low":
        return "green";
      default:
        return;
    }
  };

  return (
    <div className="main-modal">
      <div
        style={{
          width: "70%",
          borderRadius: "25px",
          border: "1px solid black",
          padding: "20px",
          backgroundColor: "lightgrey",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "5px",
              backgroundColor: importanceBackgroundColor(),
            }}
          ></div>
          <h3 style={importanceColor}>{task.taskImportance}</h3>
        </div>
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2 style={{ marginBottom: "40px" }}>{task.taskTitle}</h2>
          <div
            style={{
              width: "70%",
              margin: "0 auto",
              textAlign: "justify",
              lineHeight: 1.8,
            }}
          >
            {task.taskDescription}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        >
          <button
            className="show-task-btn"
            onClick={() => {
              toggleOnClickToShowTask();
              toggleEditTask(task);
            }}
          >
            Edit Task
          </button>
          <button
            className="show-task-btn"
            onClick={() => {
              toggleOnClickToShowTask();
              doneTask(task);
            }}
          >
            Done Task
          </button>
          <button
            className="show-task-btn"
            onClick={() => {
              toggleOnClickToShowTask();
              removeTask(task);
            }}
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  doneTask: (task) => dispatch(doneTask(task)),
  removeTask: (task) => dispatch(removeTask(task)),
});

export default connect(null, mapDispatchToProps)(TaskToShow);
