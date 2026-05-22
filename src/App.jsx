import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";
import NoProject from "./components/NoProject";
function App() {
  const [showFormFields, useShowFormFields] = useState(false);
  const showForm = () => {
    useShowFormFields(true);
  };
  return (
    <div className="grid grid-rows-[60px_1fr_50px] grid-cols-[300px_1fr] min-h-screen">
      <header className="col-span-2"></header>
      <Sidebar className="row-span-2 pt-9 rounded-e-xl " showForm={showForm} />
      <main
        className={
          showFormFields
            ? "flex justify-start w-[70%] items-center"
            : "flex justify-center items-center"
        }
      >
        {showFormFields ? (
          <Main setShowStatus={useShowFormFields} />
        ) : (
          <NoProject setShowStatus={useShowFormFields} />
        )}
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
