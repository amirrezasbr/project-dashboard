import noPorject from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ className, setShowStatus }) {
  return (
    <div className={`flex flex-col  items-start pl-4  ${className}`}>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={noPorject} width="100px" height="100px" />
        <h1 className="text-white font-bold text-xl">No Projects Selected</h1>
        <p>Select a project or get started with a new one</p>

        <Button
          btnText="Create new project"
          btnClassName="text-gray-400 font-regular text-sm bg-gray-900 p-2 rounded-md flex gap-2"
          btnHandler={() => setShowStatus((prev) => !prev)}
        />
      </div>
    </div>
  );
}
