import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Inicio from './pages/Inicio/index';
import ResultadoCorrida from './pages/ResultadoCorridas/ResultadoCorrida';

export default function Routers(){

    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Inicio}  ></Route>
            <Route path="/ResultadoCorrida" component={ResultadoCorrida}></Route>
        </Switch>
        </BrowserRouter>
    )
}