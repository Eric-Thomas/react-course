import { useRef } from "react";
export default function Tasks({
  project,
  projectId,
  handleAddTask,
  handleDeleteTask,
}) {
  const inputRef = useRef();

  function handleAddTaskButtonClick() {
    if (inputRef.current.value.trim() == "") {
      return;
    }
    handleAddTask(projectId, inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          ref={inputRef}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleAddTaskButtonClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {Object.keys(project.tasks).length === 0 ? (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {Object.entries(project.tasks).map(([taskId, task]) => {
            return (
              <li key={taskId} className="flex justify-between my-4">
                <span>{task}</span>
                <button
                  onClick={() => handleDeleteTask(projectId, taskId)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
