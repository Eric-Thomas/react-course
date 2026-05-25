function UserInput({ label, id, ...inputProps }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps}></input>
    </div>
  );
}

export default UserInput;
