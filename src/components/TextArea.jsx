export default function TextArea({ labelName = "title", inutType = "text" }) {
  return (
    <>
      <label>{labelName}</label>
      <textarea type={inutType} className="bg-slate-200" />
    </>
  );
}
