import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import home from "../../asserts/icons/home.svg";
import flecha from "../../asserts/icons/chevron-right.svg";
import filtro from "../../asserts/icons/filter.svg";
import box from "../../asserts/icons/box.svg";
export default function Menu() {
  return (
    <div>
      <nav className="conteinerMenu">
        <ul className="nav__links">
          <img className="icons" src={home} alt=""></img>
          <li>
            <Link to="/Corridas">Dashboard</Link>
          </li>
          <img className="space " src={flecha} alt=""></img>
          <img className="icons" src={box} alt=""></img>
          <li>
            <Link to="/ResultadoCorrida">Resultados</Link>
          </li>
          <img className="space" src={flecha} alt=""></img>
          <img className="icons" src={filtro} alt=""></img>
          <li>
            <Link className="disable" to="/null">
              Filtro
            </Link>
          </li>
          <img className="space" src={flecha} alt=""></img>
        </ul>
      </nav>
    </div>
  );
}
