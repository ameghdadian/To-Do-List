/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { connect } from "react-redux";

import Modal from "./components/Modal/Modal";
import TaskToAdd from "./components/TaskToAdd/TaskToAdd";
import ActiveTasks from "./components/ActiveTasks/ActiveTasks";

import "./App.css";

const App = ({ haveActiveTasks }) => {
  const [isFirstTask, setIsFirstTask] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addFirstTask = () => {
    setIsFirstTask(!isFirstTask);
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <div className="app-header">
        {haveActiveTasks && <a className="done-tasks">View Done Tasks</a>}
        <h2>Hello World</h2>
      </div>
      {isFirstTask && (
        <a className="intro-btn" onClick={addFirstTask}>
          Create Your First Task
        </a>
      )}
      {isModalOpen && (
        <Modal>
          <TaskToAdd toggleModal={toggleModal} />
        </Modal>
      )}
      {haveActiveTasks && <ActiveTasks toggleModal={toggleModal} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  haveActiveTasks: !!state.tasks.activeTasks.length,
});

export default connect(mapStateToProps)(App);
