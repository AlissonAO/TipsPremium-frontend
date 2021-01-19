import React, { useState, useEffect, useContext, useRef } from "react";
import "./style.css";
import api from "../../Api/Api";
import { connect, disconnect, subscriberDadosPista } from "../../Api/socket";

import Menu from "../Menu/index";
import Player from "../Dashboard/Player/index";
import MenuCorrida from "../Corridas/MenuCorrida/index";
import Dicas from "../Corridas/DicasInfo/index";
import Tabela from "../Corridas/Tabela/index";
function Corridas({ isOpenHist, dispatch }) {
  const [corrida, setCorrida] = useState("");

  const handleMarket = (item) => {
    setCorrida(item);
  };

  return (
    <>
      <div className="conteinerGlobal">
        <MenuCorrida obterIdMarket={handleMarket}></MenuCorrida>
        <Player></Player>
        {corrida !== "" ? (
          <>
            <Dicas valores={corrida}></Dicas>
            <Tabela corrida={corrida}></Tabela>
          </>
        ) : null}
      </div>
    </>
  );
}
export default Corridas;
