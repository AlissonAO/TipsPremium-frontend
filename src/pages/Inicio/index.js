import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <div>
      <div className="conteiner-logon">
        <h1 className="texto">Divirta-se estamos em constante evolução</h1>
        <div className="conteiner-inicio">
          <Link className="btn-logon" to="/Corridas">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
