import React from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState, useEffect } from "react";
import data from "../helper/starterData";

const Home = () => {
  // const [tasks, setTasks] = useState(data);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // const [isBool, setIsBool] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // tasks.map((item) => {
  //   const {id, task, day} = item
  //   console.log(id, task, day);
  // })
  const changeIsDone = (id) => {
    const newTasks = [...tasks];
    newTasks.forEach((element) => {
      if (element.id === id) {
        element.isDone = !element.isDone;
      }
    });
    setTasks(newTasks);
  };

  const handleRemove = (e) => {
    if (e.target.className === "removeIcon") {
      // console.log(e.target.parentNode.parentElement);
      e.target.parentNode.parentNode.remove();
    }
  };

  // console.log(tasks[0].isDone);
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      {tasks.map((item, index) => {
        const { id, task, day, isDone } = item;
        console.log(isDone);
        return (
          <ShowTasks
            key={index}
            id={id}
            task={task}
            day={day}
            isDone={isDone}
            changeIsDone={changeIsDone}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};

export default Home;
