import React, { useEffect, useState, useContext } from "react";
import swal from "sweetalert";
import api from "../../../Api/Api";
import { Card, CardBody, CardHeader } from "reactstrap";

import "./style.css";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import BR from "../../../asserts/pais/Brazil.png";
import UK from "../../../asserts/pais/England.png";

import trap1 from "../../../asserts/trap/1.png";
import trap2 from "../../../asserts/trap/2.png";
import trap3 from "../../../asserts/trap/3.png";
import trap4 from "../../../asserts/trap/4.png";
import trap5 from "../../../asserts/trap/5.png";
import trap6 from "../../../asserts/trap/6.png";

export default function ListCorridas() {
  const [listCorrida, setListCorridas] = useState([]);
  const imagens = ["trap0", trap1, trap2, trap3, trap4, trap5, trap6];
  const [loading, setLoading] = useState(true);

  const pais = {
    BR: BR,
    UK: UK,
  };

  async function obterlista() {
    setLoading(false);
    const response = await api.get("/listarTodasCorridas");
    if (response.data.length !== 0) {
      setListCorridas(response.data);
    } else {
      return swal(
        "Não há corrida no momento, estamos processando aguarde....",
        "",
        "info",
        {
          className: "swal-footer",
        }
      );
    }
    setLoading(true);
  }

  useEffect(() => {
    obterlista();
    // }
  }, []);

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      width: "100%",
      height: "2px",
    },
    colorPrimary: {
      backgroundColor: "#0a0a0a",
    },
    bar: {
      backgroundColor: "#4caf50",
    },
  }))(LinearProgress);

  return (
    <div>
      {loading ? (
        <div class="listCorrida-conteinerList">
          <div className="listCorrida-conteiner-header-card">
            <CardHeader className="listCorrida-text">
              Todas as Corridas
            </CardHeader>
          </div>
          {listCorrida !== null
            ? listCorrida.map((valor) => (
                <>
                  <div className="listCorrida-conteiner-card">
                    <Card className="teste">
                      <Link
                        to={{
                          pathname: "/Corridas",
                          search: valor._id,
                        }}
                      >
                        <CardBody className="listCorrida-conteiner-card-body">
                          <div className="listCorrida-conteiner-horario">
                            <div className="listCorrida-conteiner-pais">
                              <img
                                className="listCorrida-pais"
                                src={pais.BR}
                                alt={""}
                                width={15}
                                height={15}
                              ></img>
                              <h1 className="listCorrida-text-horario">
                                {valor.HoraCorridaBR}
                              </h1>
                            </div>
                            <div className="listCorrida-conteiner-pais">
                              <img
                                className="listCorrida-pais"
                                src={pais.UK}
                                alt={""}
                                width={15}
                                height={15}
                              ></img>
                              <h1 className="listCorrida-text-horario">
                                {valor.HoraCorridaUK}
                              </h1>
                            </div>
                          </div>
                          <div className="listCorrida-conteiner-conteudo">
                            <h3 className="listCorrida-h1-texto-estadio">
                              {valor.TrackName}
                            </h3>
                            <div className="listCorrida-conteiner-conteudo-corrida">
                              <h1 className="listCorrida-h1-texto-track">
                                {valor.Grade}
                              </h1>
                              <h1 className="listCorrida-h1-texto-dis">
                                {valor.Dis + "M"}
                              </h1>
                            </div>
                          </div>
                          {typeof valor.Favoritos !== "undefined" ? (
                            <div className="listCorrida-conteiner-favoritos">
                              <h3 className="listCorrida-h1-texto-favorito ">
                                Favoritos
                              </h3>
                              <div className="listCorrida-conteiner-favoritos-imagem">
                                {valor.Favoritos.map((f) => {
                                  return (
                                    <div className="listCorrida-imagen-listaCorrida">
                                      <img
                                        src={imagens[f]}
                                        alt={""}
                                        width={15}
                                        height={15}
                                      ></img>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ) : null}
                          <div className="listCorrida-conteiner-icons">
                            <FiChevronRight
                              size="25px"
                              color="#00ff00"
                            ></FiChevronRight>
                          </div>
                        </CardBody>
                      </Link>
                    </Card>
                  </div>
                </>
              ))
            : null}
        </div>
      ) : (
        <div>
          <BorderLinearProgress variant="indeterminate" value={loading} />
        </div>
      )}
    </div>
  );
}
