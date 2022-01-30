import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <div>
      <div>
        <h2>Lista zadań do zrobienia ({active.length})</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Masz dzisiaj wolne!</p>}
      </div>
      <hr />
      <div>
        <h3>Lista zadań zrobionych ({done.length})</h3>
        {doneTasks.slice(0, 10)}
      </div>
    </div>
  );
};

export default TaskList;
