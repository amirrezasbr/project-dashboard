import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
function App() {
  return (
    <div className="grid grid-rows-[60px_1fr_50px] grid-cols-[300px_1fr] min-h-screen">
      <header className="col-span-2"></header>
      <Sidebar className="row-span-2 pt-9 rounded-e-xl " />
      <main className="">
        <Main />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
