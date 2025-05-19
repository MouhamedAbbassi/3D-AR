import React from "react";
import QRCode from "react-qr-code";

interface QRCodeGeneratorProps {
  url: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ url }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Scan to View in AR</h2>
      <QRCode value={url} size={200} />
    </div>
  );
};

export default QRCodeGenerator;
