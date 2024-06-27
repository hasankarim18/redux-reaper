import "./App.css";
import Counter from "./app/apps/Counter";

function App() {
  return (
    <>
      <div className="">
        <div className="max-w-7xl px-4 lg:px-0 min-h-screen  mx-auto  bg-gray-100">
          <h1 className="text-center mb-4">Redux Store</h1>
          <div className="mt-4">
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
