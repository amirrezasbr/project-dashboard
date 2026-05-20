export default function Sidebar({ className }) {
  return (
    <div className={`flex flex-col   items-start pl-4  ${className}`}>
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-xl">YOUR PROJECTS</h1>
        <p>Select a project or get started with a new one</p>

        <button className="text-white font-regular text-sm bg-gray-900 p-2 rounded-md flex gap-2">
          Create new project
        </button>
      </div>
    </div>
  );
}
