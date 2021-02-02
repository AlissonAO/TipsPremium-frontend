import React, { useState, useEffect } from "react";
import "./style.css";
import { Card } from "reactstrap";
import swal from "sweetalert";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import api from "../../../Api/Api";

export default function MenuCorrida(props) {
  const [loading, setLoading] = useState(false);
  const [listCorrida, setCorridas] = useState([]);
  // const [contador, setContador] = useState(0)

  //  obterDetalheCorrida() {
  //         setContador(contador + 1)
  // }

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      width: "100%",
      height: "2px",
      marginTop: "200px",
    },
    colorPrimary: {
      backgroundColor: "#0a0a0a",
    },
    bar: {
      backgroundColor: "#4caf50",
    },
  }))(LinearProgress);

  async function obterlista() {
    const response = await api.get("/listarCorridas");
    // subscriberDadosPista((dadosAposta) => setCorridas(dadosAposta));
    console.log(response.data);
    if (response.data.length !== 0) {
      setCorridas(response.data);
    } else {
      return swal(
        "Não há corridas no momento, estamos processando aguarde....",
        "",
        "info",
        {
          className: "swal-footer",
        }
      );
    }
    setLoading(true);
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
      {loading ? (
        listCorrida.map((item) => (
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
        ))
      ) : (
        <BorderLinearProgress variant="indeterminate" value={loading} />
      )}
    </div>
  );
}
