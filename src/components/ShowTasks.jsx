import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const ShowTasks = ({ id, task, day, isDone, changeIsDone, handleRemove, handleRemove1 }) => {
  // console.log(isDone);
  return (
    <div className="task" onClick={(e) => changeIsDone(id,e)}>
      {/* buradaki onclick ile remove'daki onclick conflict olusturmus  */}
      {/* <p>{id}</p> */}
      <div>
        <h1 style={isDone ? { color: "grey", textDecoration:'line-through' } : { color: "green" }}>{task}</h1>
        <h3>{day}</h3>
      </div>
      <div>
        <i className="removeIcon" onClick={() => handleRemove1(id)}><AiFillDelete /></i>
      </div>
    </div>
  );
};

export default ShowTasks;
