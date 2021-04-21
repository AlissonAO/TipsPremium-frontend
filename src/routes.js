import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Inicio from "./pages/Inicio/index";
import ResultadoCorrida from "./pages/ResultadoCorridas/ResultadoCorrida";
import Corridas from "./pages/Corridas/index";
import ListResultados from "./pages/ResultadoCorridas/ListResultados";
import DashBoard from "./pages/Dashboard/index";
import Filtro from "./pages/Filtro/filtro";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio}></Route>
        <Route path="/ResultadoCorrida" component={ListResultados}></Route>
        <Route path="/Corridas" component={Corridas}></Route>
        <Route path="/DashBoard" component={DashBoard}></Route>
        <Route path="/Filtro" component={Filtro}></Route>
        {/* <Route path="/ListResultados" component={ListResultados}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}
