import { useRef } from "react";
import Input from "./Input";
export default function ProjectCreation({ handleSaveProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  function handleSaveClick() {
    handleSaveProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSaveClick}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <Input ref={titleRef} label="Title" type="text"></Input>
      <Input ref={descriptionRef} label="Description" type="textArea"></Input>
      <Input ref={dueDateRef} label="Due Date" type="date"></Input>
    </div>
  );
}
