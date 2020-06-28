import React from "react";
import { connect } from "react-redux";

import Task from "../Task/Task";

import "./ActiveTasks.scss";

const ActiveTasks = ({ toggleModal, activeTasks, toggleEditTask }) => {
  return (
    <div>
      {activeTasks.map((task, indx) => (
        <Task
          toggleModal={toggleModal}
          toggleEditTask={toggleEditTask}
          key={indx}
          task={task}
        />
      ))}
      <button className="add-task-btn" title="Add Task" onClick={toggleModal}>
        <div className="add-task-sign">&#10010;</div>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeTasks: state.tasks.activeTasks,
});

export default connect(mapStateToProps)(ActiveTasks);
