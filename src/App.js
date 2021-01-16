import React, { useState } from "react";
import "./global.css";
import Router from "./routes";
import Dasboard from "../src/pages/Dashboard/index";
import MenuCorrida from "./pages/Corridas/MenuCorrida/index";
import Corrida from "./pages/Corridas/index";
import Menu from "./pages/Menu/index";
import { Provider } from "react-redux";
import LuckyDip from "./LuckyDip/index";

import store from "./store";

function App() {
  document.title = "Tips";

  return (
    <div>
      {/* <Provider store={store}> */}
      {/* <Router></Router> */}
      {/* <Dasboard></Dasboard> */}
      <Menu></Menu>
      <Corrida></Corrida>
      <LuckyDip></LuckyDip>

      {/* <Teste></Teste> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
