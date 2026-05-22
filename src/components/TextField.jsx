export default function TextField({ labelName = "title", inutType = "text" }) {
  return (
    <>
      <label>{labelName}</label>
      <input type={inutType} className="bg-slate-200" />
    </>
  );
}
