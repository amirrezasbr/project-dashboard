export default function Button({ btnText, btnHandler, btnClassName }) {
  return (
    <div className={`${btnClassName}`}>
      <button onClick={btnHandler}>{btnText}</button>
    </div>
  );
}
