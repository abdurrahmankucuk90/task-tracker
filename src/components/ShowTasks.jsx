import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const ShowTasks = ({ id, task, day, isDone, changeIsDone, handleRemove }) => {
  // console.log(isDone);
  return (
    <div className="task" onClick={() => changeIsDone(id)}>
      {/* <p>{id}</p> */}
      <div>
        <h1 style={isDone ? { color: "grey" } : { color: "green" }}>{task}</h1>
        <h3>{day}</h3>
      </div>
      <div>
        <i className="removeIcon" onClick={(e) => handleRemove(e)}><AiFillDelete /></i>
      </div>
    </div>
  );
};

export default ShowTasks;
