import React, { useState, useEffect } from "react";
import "./style.css";
import Tabela from "../Tabela/index";
import { Button, Card, CardHeader, CardBody } from "reactstrap";

import api from "../../../Api/Api";
import { Redirect } from "react-router-dom";

export default function MenuCorrida(props) {
  const [click, setClick] = useState(false);
  // console.log(props);

  const [listCorrida, setCorridas] = useState([]);
  // const [contador, setContador] = useState(0)

  //  obterDetalheCorrida() {
  //         setContador(contador + 1)
  // }

  useEffect(() => {
    async function obterlista() {
      const response = await api.get("/listarCorridas");
      console.log(response.data);
      setCorridas(response.data);
    }
    obterlista();
  }, []);

  const handleMarketID = (item) => {
    props.obterIdMarket(item);
  };

  return (
    <div className="conteinerMenuCorrida">
      {listCorrida.map((item) => (
        <div onClick={() => handleMarketID(item)}>
          <Card className="card-corrida">
            <CardBody className="card-body-corridas">
              <h1 className="textoCorrida">{item.Grade} </h1>
              <h1 className="textoCorrida">{item.HoraCorridaBR} </h1>
            </CardBody>
          </Card>
        </div>
      ))}
      <div></div>
    </div>
  );
}
