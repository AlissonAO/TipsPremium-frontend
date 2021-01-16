import React, { useState, useEffect } from "react";
import "./style.css";
import Tabela from "../Tabela/index";
import { Button, Card, CardHeader, CardBody } from "reactstrap";

import api from "../../../Api/Api";

export default function MenuCorrida(props) {
  const [click, setClick] = useState(false);

  const [listCorrida, setCorridas] = useState([]);
  // const [contador, setContador] = useState(0)

  //  obterDetalheCorrida() {
  //         setContador(contador + 1)
  // }

  async function obterlista() {
    const response = await api.get("/listarCorridas");
    // subscriberDadosPista((dadosAposta) => setCorridas(dadosAposta));

    setCorridas(response.data);
  }
  // UseEffect para as corridas
  useEffect(() => {
    // if (habitarPredicator) {
    if (listCorrida.length === 0) {
      obterlista();
    } else {
      const interval = setInterval(async () => {
        obterlista();
      }, 60000);
      return () => {
        clearInterval(interval);
      };
      // }
    }
  }, [listCorrida.length]);

  const handleMarketID = (item) => {
    props.obterIdMarket(item);
  };

  return (
    <div className="conteinerMenuCorrida">
      {listCorrida.map((item) => (
        <Card
          className="card-corrida cardMenu:hover"
          onClick={() => handleMarketID(item)}
        >
          <div>
            <h1 className="textoTrack colorTexto">{item.TrackName} </h1>
            <div className="conteiner-corrida">
              <h1 className="textoCorrida colorTexto">{item.Grade}</h1>
              <h1 className="textoCorrida colorTexto">{item.Dis + "m"} </h1>
            </div>
            <h1 className="textohora colorTexto">{item.HoraCorridaBR} </h1>
          </div>
        </Card>
      ))}
    </div>
  );
}
