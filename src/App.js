/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { connect } from "react-redux";

import Modal from "./components/Modal/Modal";
import TaskToAdd from "./components/TaskToAdd/TaskToAdd";
import ActiveTasks from "./components/ActiveTasks/ActiveTasks";
import EditTask from "./components/EditTask/EditTask";
import DoneTasks from "./components/DoneTasks/DoneTasks";

import "./App.scss";

const App = ({ haveActiveTasks, doneTasks }) => {
  const [isFirstTask, setIsFirstTask] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskToBeEdited, setIsTaskToBeEdited] = useState(false);
  const [currentTaskToBeEdited, setCurrentTaskToBeEdited] = useState(null);
  const [showDoneModal, setShowDoneModal] = useState(false);

  const addFirstTask = () => {
    setIsFirstTask(!isFirstTask);
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDoneModal = () => {
    setShowDoneModal(!showDoneModal);
  };

  const toggleEditTask = (taskToBeEdited) => {
    setCurrentTaskToBeEdited(taskToBeEdited);
    setIsTaskToBeEdited(!isTaskToBeEdited);
  };

  return (
    <div className="App">
      <div className="app-header">
        {(haveActiveTasks || !!doneTasks.length) && (
          <a
            className="done-tasks"
            onClick={() => {
              toggleDoneModal();
            }}
          >
            View Done Tasks
          </a>
        )}
        <h2>Hello World</h2>
      </div>
      {!haveActiveTasks && !doneTasks.length && (
        <a className="intro-btn" onClick={addFirstTask}>
          Create Your First Task
        </a>
      )}
      {isModalOpen && (
        <Modal>
          <TaskToAdd toggleModal={toggleModal} />
        </Modal>
      )}
      {(haveActiveTasks || !!doneTasks.length) && (
        <ActiveTasks
          toggleModal={toggleModal}
          toggleEditTask={toggleEditTask}
        />
      )}
      {isTaskToBeEdited && (
        <Modal>
          <EditTask
            toggleEditTask={toggleEditTask}
            task={currentTaskToBeEdited}
          />
        </Modal>
      )}
      {showDoneModal && (
        <Modal>
          <DoneTasks doneTasks={doneTasks} toggleDoneModal={toggleDoneModal} />
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  haveActiveTasks: !!state.tasks.activeTasks.length,
  doneTasks: state.tasks.doneTasks,
});

export default connect(mapStateToProps)(App);
