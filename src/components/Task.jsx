import React from "react";

const Task = (props) => {
  const style = {
    color: "gold",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <span style={important ? style : null}> {text} </span> - do
          <span> {date} </span>
        </p>
        <button onClick={() => props.change(id)}>zostało zrobione</button>
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
         {text} - zostało zrobione
          <span>{finish}</span>
          <br />
        </p>
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    );
  }
};

export default Task;
