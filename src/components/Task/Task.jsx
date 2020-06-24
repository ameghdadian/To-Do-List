import React from "react";

/*

*/

const Task = ({ task: { taskDescription, taskImportance, taskTitle } }) => {
  console.log(taskTitle);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "95%",
        border: "1px solid black",
        padding: "10px 20px",
        marginTop: "25px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ textAlign: "left", marginTop: "0" }}>{taskTitle}</h3>
        <p>{taskDescription.split(" ").slice(0, 10).join(" ") + " ..."}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <label style={{ marginRight: "15px" }}>{taskImportance}</label>
          <div
            style={{
              display: "flex",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "red",
              textAlign: "right",
            }}
          ></div>
        </div>

        <div>
          <button>Done Task</button>
          <button> Edit Task</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
