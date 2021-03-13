import React, { useState, useEffect } from "react";
import "./style.css";
// import api from "../../Api/Api";
// import { connect, disconnect, subscriberDadosPista } from "../../Api/socket";

import Menu from "../Menu/index";
import Player from "../Dashboard/Player/index";
import MenuCorrida from "../Corridas/MenuCorrida/index";
import Dicas from "../Corridas/DicasInfo/index";
import Tabela from "../Corridas/Tabela/index";
import ListCorridas from "../Corridas/ListCorridas/index";
import api from "../../Api/Api";
function Corridas(props) {
  const [corrida, setCorrida] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleMarket = (item) => {
    setCorrida(item);
  };

  useEffect(() => {
    async function obterdadosPorID(id) {
      console.log("chamandooooo");
      const dados = await api.get("/listarCorridaID", {
        params: {
          id: String(id).replace("?", ""),
        },
      });
      setCorrida(dados.data[0]);
      setLoading(true);
    }
    obterdadosPorID(props.location.search);
  }, []); // eslint-disable-line

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      {loading ? (
        <div className="conteinerGlobal">
          <Menu></Menu>
          <MenuCorrida obterIdMarket={handleMarket}></MenuCorrida>
          <Player></Player>
          {corrida !== null ? (
            <>
              <Dicas valores={corrida}></Dicas>
              <Tabela corrida={corrida} atualizar={true}></Tabela>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
export default Corridas;
