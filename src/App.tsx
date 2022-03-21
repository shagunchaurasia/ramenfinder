import React from "react";
import "./App.scss";
import Homepage from "pages/Homepage";

function App() {
  return (
    <div className="App container" data-testid="appContainer">
      <Homepage></Homepage>
    </div>
  );
}

export default App;
