import React from "react";

import "./DoneTasks.scss";

const DoneTasks = ({ doneTasks, toggleDoneModal }) => (
  <div className="main-modal">
    <div
      style={{
        position: "absolute",
        fontSize: "20px",
        top: "40px",
        right: "40px",
        cursor: "pointer",
      }}
      onClick={toggleDoneModal}
    >
      X
    </div>
    <div className="tasks">
      <h1 style={{ marginBottom: "10px", marginTop: "5px", color: "#ee9090" }}>
        Done Tasks:
      </h1>
      {doneTasks.map((task, indx) => {
        return (
          <div
            key={indx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h3>{task.taskTitle}</h3>
              <p style={{ color: "#a2a2a2" }}>{task.taskDescription}</p>
            </div>
            <h4>{task.taskImportance}</h4>
          </div>
        );
      })}
    </div>
  </div>
);

export default DoneTasks;
