import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentName, setCurrentName] = useState(name);

  function handleEdit() {
    console.log("handling edit");
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    setCurrentName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={currentName}
            onChange={handleChange}
          ></input>
        ) : (
          <span className="player-name">{currentName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
