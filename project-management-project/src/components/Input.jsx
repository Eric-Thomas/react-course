export default function Input({ label, type }) {
  let classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {type == "textArea" ? (
        <textarea className={classes} />
      ) : (
        <input type={type} className={classes} />
      )}
    </>
  );
}
