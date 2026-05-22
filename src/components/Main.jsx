import Button from "./Button";
import TextArea from "./TextArea";
import TextField from "./textfield";

export default function Main({ className, setShowStatus }) {
  return (
    <div className={`flex flex-col w-full items-start pl-4   ${className}`}>
      <div className="flex justify-end gap-5 w-full ">
        <Button
          btnText="cancel"
          btnHandler={() => setShowStatus((prev) => !prev)}
        />
        <Button
          btnText="Save"
          btnClassName="bg-black text-white py-1 px-4 rounded"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <TextField inutType="text" />
        <TextArea labelName="DESCRIPTION" />
        <TextField inutType="date" labelName="Due Date" />
      </div>
    </div>
  );
}
