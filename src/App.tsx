import React, { useState } from "react";
import "./index.css";
import ModelViewer from "./components/ModelViewer";
import QRCodeGenerator from "./components/QRCodeGenerator";

const App: React.FC = () => {
  const [arUrl, setArUrl] = useState<string | null>(null);

  const handleARView = () => {
    const url = `${window.location.origin}/ar`;
    console.log("Generated AR URL:", url);
    setArUrl(url);
  };

  return (
    <div className="App">
      <h1>3D Model Viewer</h1>
      <button onClick={handleARView}>Generate AR QR Code</button>

      {arUrl && <QRCodeGenerator url={arUrl} />}
      <ModelViewer />
    </div>
  );
};

export default App;
