import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function ProjectCreation({ handleSaveProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();
  function handleSaveClick() {
    if (
      titleRef.current.value.trim() == "" ||
      descriptionRef.current.value.trim() == "" ||
      dueDateRef.current.value.trim() == ""
    ) {
      modalRef.current.open();
      return;
    }
    handleSaveProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      tasks: {},
    });
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
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
    </>
  );
}
