import { useRef } from "react";
export default function Tasks({ project, projectId, handleAddTask }) {
  const inputRef = useRef();

  function handleAddTaskButtonClick() {
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
      {project.tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task) => {
            return (
              <li className="flex justify-between my-4">
                <span>{task}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
