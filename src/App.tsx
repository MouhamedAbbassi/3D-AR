import "./index.css";
import ModelViewer from "./components/ModelViewer";
import ARViewer from "./components/ARViewer";
import { useState } from "react";

function App() {
  const [isAR, setIsAR] = useState(false);

  return (
    <div className="App">
      <h1>AR / 3D Model Viewer</h1>
      <button onClick={() => setIsAR(!isAR)} style={{ marginBottom: "20px" }}>
        {isAR ? "Exit AR" : "Enter AR"}
      </button>
      {isAR ? <ARViewer /> : <ModelViewer />}
    </div>
  );
}

export default App;
