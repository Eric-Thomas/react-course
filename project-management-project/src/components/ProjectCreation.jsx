export default function ProjectCreation() {
  return (
    <div>
      <label className="text-sm font-bold uppercase text-stone-500">
        Title
      </label>
      <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
      <label className="text-sm font-bold uppercase text-stone-500">
        Description
      </label>
      <textArea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
      <label className="text-sm font-bold uppercase text-stone-500">
        Due Date
      </label>
      <input
        type="date"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </div>
  );
}
