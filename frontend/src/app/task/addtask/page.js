export default function AddTask() {
  const [task, setTask] = React.useState("");
  const [tasks, setTasks] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <div className="w-full min-h-screen bg-zinc-300 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Add Task</h1>
      <form onSubmit={handleSubmit} className="w-1/2 mt-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
        >
          Add Task
        </button>
      </form>
      <ul className="w-1/2 mt-4">
        {tasks.map((task, i) => (
          <li key={i} className="bg-white p-2 border-b border-gray-200">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
