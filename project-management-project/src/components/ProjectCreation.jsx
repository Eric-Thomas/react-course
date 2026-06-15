import Input from "./Input";
export default function ProjectCreation() {
  return (
    <div>
      <Input label="Title" type="text"></Input>
      <Input label="Description" type="textArea"></Input>
      <Input label="Due Date" type="date"></Input>
    </div>
  );
}
