import React, { useState, useEffect } from "react";
import "./style.css";
// import MenuCorrida from "../MenuCorrida/index";
// import Tabela from "./Tabela";
import Menu from "../Menu/index";
// import Player from "../../pages/Dashboard/Player";

import { connect, disconnect, subscriberDadosPista } from "../../Api/socket";

export default function DashBoard() {
  const [corrida, setCorrida] = useState([]);
  const [dadosAposta, setDadosAposta] = useState([]);
  const [listGalgosNome, setListGalgosNome] = useState([]);
  const [clicou, setclicou] = useState(false);
  // useEffect(() => {
  //   subscriberDadosPista((dadosAposta) => setDadosAposta(dadosAposta), corrrida)
  // }, [corrrida])

  const handleMarket = (item) => {
    // for (let key in item.runners) {
    // }
    setclicou(true);
    setCorrida(item);
    // setListGalgosNome(item.runners)
    //disconnect()
    // connect(item.marketId)
  };

  return (
    <div>
      <div className="conteiner-dashboard">
        <Menu></Menu>
        {/* <MenuCorrida obterIdMarket={handleMarket}></MenuCorrida>
        <Player></Player>
        <Tabela marketDados={corrida}></Tabela> */}
      </div>
    </div>
  );
}
