import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    alert("Ya completaste el todo " + props.text);
  };

  const onDelete = () => {
    alert("Borraste el todo " + props.text);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };