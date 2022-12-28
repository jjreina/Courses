import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
