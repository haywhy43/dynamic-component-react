import "./App.css";
import DynamicComponent from "./components/DynamicComponent";
import { useState } from "react";

function App() {
  const [activeComponent, setActiveComponent] = useState("SayHello");
  return (
    <div className="App">
      <header className="App-header">
        <DynamicComponent is={activeComponent} name="Sholademi Ayomikun" />

        <button
          onClick={() =>
            // Note that `SayHello` and `SayGoodbye` have been defined in the components folder
            setActiveComponent(
              activeComponent === "SayHello" ? "SayGoodbye" : "SayHello"
            )
          }
        >
          Toggle Component
        </button>
      </header>
    </div>
  );
}

export default App;
