import React, { useState } from "react";

import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const App = (props) => {
  
  const [counter, setCounter] = useState(1);
  const [task, setTask] = useState([]);

  const deleteTask = (id) => {
    const tasks = [...task];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    setTask(tasks);
  };

  const changeTaskStatus = (id) => {
    const tasks = Array.from(task);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    setTask(tasks);
  };

  const addTask = (text, date, important) => {
      const tasks = {
      id: counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    setCounter(counter + 1)
    setTask((task) => [...task, tasks]);

    return true;
  };
  return (
    <div>
      <AddTask add={addTask} />
      <TaskList tasks={task} delete={deleteTask} change={changeTaskStatus} />
    </div>
  );
};

export default App;
