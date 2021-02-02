import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Inicio from "./pages/Inicio/index";
import ResultadoCorrida from "./pages/ResultadoCorridas/ResultadoCorrida";
import Corridas from "./pages/Corridas/index";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio}></Route>
        <Route path="/ResultadoCorrida" component={ResultadoCorrida}></Route>
        <Route path="/Corridas" component={Corridas}></Route>
      </Switch>
    </BrowserRouter>
  );
}
