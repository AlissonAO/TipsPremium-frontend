import React, { useState, useEffect } from "react";
import "./style.css";
// import MenuCorrida from "../MenuCorrida/index";
// import Tabela from "./Tabela";
import Menu from "../Menu/index";
import { Link } from "react-router-dom";
// import Player from "../../pages/Dashboard/Player";

// import { connect, disconnect, subscriberDadosPista } from "../../Api/socket";

import ListCorridas from "../Corridas/ListCorridas/index";

export default function DashBoard() {
  const [dadosAposta, setDadosAposta] = useState([]);
  const [listGalgosNome, setListGalgosNome] = useState([]);
  const [clicou, setclicou] = useState(false);
  const [corrida, setCorrida] = useState("");
  // useEffect(() => {
  //   subscriberDadosPista((dadosAposta) => setDadosAposta(dadosAposta), corrrida)
  // }, [corrrida])

  // const handleMarket = (item) => {
  //   // for (let key in item.runners) {
  //   // }
  //   setclicou(true);
  //   setCorrida(item);
  // setListGalgosNome(item.runners)
  //disconnect()
  // connect(item.marketId)
  // };

  const obterMercado = (valor) => {
    setCorrida(valor);
  };

  return (
    <div>
      <Menu></Menu>
      <div className="conteiner-dashboard">
        <ListCorridas listCorridas={obterMercado}></ListCorridas>
        {/* {corrida !== "" ? <Link to="/Corridas"></Link> : null} */}
        {/* <MenuCorrida obterIdMarket={handleMarket}></MenuCorrida>
        <Player></Player>
        <Tabela marketDados={corrida}></Tabela> */}
      </div>
    </div>
  );
}
