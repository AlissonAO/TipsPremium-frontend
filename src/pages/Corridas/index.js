import React, { useState, useEffect, useContext, useRef } from "react";
import "./style.css";
import api from "../../Api/Api";
import { connect, disconnect, subscriberDadosPista } from "../../Api/socket";

import Menu from "../Menu/index";
import Player from "../Dashboard/Player/index";
import MenuCorrida from "../Corridas/MenuCorrida/index";
import Dicas from "../Corridas/DicasInfo/index";
import Tabela from "../Corridas/Tabela/index";
import LuckyDip from "../../pages/predicator/index";
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
        <Dicas valores={corrida}></Dicas>
        <Tabela corrida={corrida}></Tabela>
      </div>
      {/* <div>
        <LuckyDip></LuckyDip>
      </div> */}
    </>
  );
}
export default Corridas;
