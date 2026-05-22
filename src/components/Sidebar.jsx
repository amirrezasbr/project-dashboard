import plus from "../assets/plus.png";

export default function Sidebar({ className, showForm }) {
  return (
    <div className={`flex flex-col bg-black  items-start pl-4  ${className}`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-xl">YOUR PROJECTS</h1>
        <button
          onClick={showForm}
          className="text-white font-regular text-sm bg-gray-700 p-2 rounded-md flex gap-2"
        >
          <img src={plus} className="contain" width="20px" height="20px" />
          Add Project
        </button>
      </div>
    </div>
  );
}
