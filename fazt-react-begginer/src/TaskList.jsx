import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
