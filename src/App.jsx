import React from "react";
import Button from "./components/Button";

function App() {
  const colors = ["red", "green", "blue"];

  const containerStyles = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%", // Add this line to set the width to 100%
    height: "100vh", // Example height for illustration purposes
    backgroundColor: "#f2f2f2", // Example background color for illustration purposes
  };

  return (
    <div style={containerStyles}>
      {colors.map((color, index) => (
        <Button key={index} color={color} />
      ))}
    </div>
  );
}

export default App;
