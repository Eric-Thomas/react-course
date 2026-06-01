import { useState } from "react";
export default function Player() {
  const [entityName, setEntityName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEntityName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? entityName: "Unknown Entity"} </h2>
      <p>
        <input type="text" onChange={handleChange} value={entityName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
