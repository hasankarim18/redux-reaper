import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto md:mx-4">
          <h1 className="text-center mb-4">Redux Store</h1>
        </div>
      </div>
    </>
  );
}

export default App;
