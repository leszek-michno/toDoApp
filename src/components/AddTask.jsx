import React, { useState } from "react";

const AddTask = (props) => {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleClick = () => {
    const add = props.add(text, date,checked);
    if (add) {
      setDate(new Date().toISOString().slice(0, 10));
      setText("");
      setChecked(false);
    }
  };

  return (
    <div>
      <h1>Dodaj zadanie</h1>
      <input
        type="text"
        placeholder="dodaj zadanie"
        value={text}
        onChange={handleText}
      />

      <input
        type="checkbox"
        checked={checked}
        id="important"
        onChange={handleCheckbox}
      />

      <label htmlFor="important">Priorytet</label>
      <br />
      <br />
      <label htmlFor="data">Do kiedy zrobić </label>
      <input type="date" value={date} onChange={handleDate} />

      <button onClick={handleClick}>DODAJ</button>

      <hr />
    </div>
  );
};

export default AddTask;
