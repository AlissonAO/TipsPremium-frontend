import React from "react";
import "./global.css";
import Router from "./routes";
import Dasboard from "../src/pages/Dashboard/index";
import MenuCorrida from "./pages/Corridas/MenuCorrida/index";
import Corrida from "./pages/Corridas/index";

function App() {
  document.title = "Tips";
  return (
    <div className="conteinerGlobal">
      {/* <Router></Router> */}
      {/* <Dasboard></Dasboard> */}
      <Corrida></Corrida>
    </div>
  );
}

export default App;
