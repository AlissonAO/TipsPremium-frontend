import React, { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardBody, Table } from "reactstrap";
// import DatePicker from "react-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { utils } from "react-modern-calendar-datepicker";
import DatePicker from "react-modern-calendar-datepicker";
import api from "../../Api/Api";
import "./style.css";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import Menu from "../../pages/Menu/index";
import { zonedTimeToUtc } from "date-fns-tz";

import trap1 from "../../asserts/trap/1.png";
import trap2 from "../../asserts/trap/2.png";
import trap3 from "../../asserts/trap/3.png";
import trap4 from "../../asserts/trap/4.png";
import trap5 from "../../asserts/trap/5.png";
import trap6 from "../../asserts/trap/6.png";

export default function ResultadoCorrida() {
  const [dateSelecionanda, setAutoClose] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [click, setClick] = useState(false);
  const imagens = ["trap0", trap1, trap2, trap3, trap4, trap5, trap6];
  const [selectedDay, setSelectedDay] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function carregarListar(valor) {
    if (valor) {
      setLoading(false);
    }
    var formattedDate = "";
    if (selectedDay !== null) {
      let dataFormatada =
        selectedDay.year +
        "-" +
        "0" +
        selectedDay.month +
        "-" +
        selectedDay.day;
      formattedDate = new Date(dataFormatada);
    } else {
      formattedDate = format(new Date(dateSelecionanda), "yyyy-MM-dd");
    }
    console.log(formattedDate);
    const response = await api.get("/listarResultados", {
      params: {
        data: formattedDate,
      },
    });

    if (response.data.length === 0) {
      limpaTela();
      setLoading(true);
      return swal("Não há registro para essa data ", "", "info", {
        className: "swal-footer",
      });
    } else {
      console.log("retorno" + response.data);
      setList(response.data);
    }
    if (valor) {
      setLoading(true);
    }
  }

  // UseEffect para as corridas
  useEffect(() => {
    carregarListar(true);
    setClick(true);
  }, []); // eslint-disable-line

  useEffect(() => {
    const interval = setInterval(async () => {
      if (click) {
        await carregarListar(false);
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [carregarListar, click]);

  function limpaTela() {
    setList([]);
    setAutoClose(new Date());
    setClick(false);
  }

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

  function isBigEnough(value) {
    return value.resultado !== "";
  }

  function obterResultado(list) {
    return list.dogs.filter(isBigEnough).sort(function (a, b) {
      return a.resultado - b.resultado;
    });
  }

  function obterTrap(valor) {
    return <img src={imagens[[valor]]} alt={""} width={20} height={20}></img>;
  }

  function clickk() {
    setClick(true);
    carregarListar(true);
  }
  // const autoClose = (date) => {
  //   console.log(date);
  //   selectedDay();
  // };

  const formatDate = () => {
    if (!selectedDay) return "";
    return `Dia: ${selectedDay.day}/${
      selectedDay.month !== 12 ? "0" + selectedDay.month : selectedDay.month
    }/${selectedDay.year}  `;
  };

  const minimumDate = {
    year: 2021,
    month: 2,
    day: 17,
  };
  return (
    <>
      <Menu></Menu>
      <div className="conteiner-result">
        <div className="conteiner-data">
          <div className="conteiner-texto"></div>
          <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            calendarClassName="responsive-calendar" // added this
            formatInputText={formatDate}
            inputPlaceholder="Selecione a Data" // placeholder
            minimumDate={minimumDate}
            maximumDate={utils().getToday()}
          />
        </div>
        <div className="conteiner-pesquisar-button">
          <Button onClick={clickk}>
            <span className="teste">Pesquisar</span>
          </Button>
        </div>
        <div className="conteiner-clear-button">
          <Button onClick={limpaTela}>
            <span className="teste">Limpar</span>
          </Button>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="conteiner-resultado">
            {list.map((valor) => (
              <Card className="conteiner-card-result">
                <CardHeader className="text-head-card">
                  {valor.TrackName +
                    " | " +
                    valor.HoraCorridaBR +
                    " | " +
                    valor.Grade +
                    " | " +
                    valor.Dis +
                    "m"}
                </CardHeader>
                <CardHeader className="conteiner-cabecalho">
                  <Table
                    className="container-tabela"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <thead>
                      <tr>
                        <th className="texto-cabecalho">Resultado</th>
                        <th className="texto-cabecalho">Trap</th>
                        <th className="texto-cabecalho-nome-dog">Galgo</th>
                        <th className="texto-cabecalho">ODD Back</th>
                        <th className="texto-cabecalho">ODD Lay</th>
                      </tr>
                    </thead>
                  </Table>
                </CardHeader>

                <CardBody>
                  {obterResultado(valor).map((dog) => (
                    <Table
                      className="container-tabela"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      {/* <thead>
                        <tr>
                          <th>Final</th>
                          <th>Trap</th>
                          <th>Nome</th>
                          <th>ODD back</th>
                          <th>ODD Lay</th>
                        </tr>
                      </thead> */}
                      <tbody>
                        <tr className="tr-table-resultado">
                          <td className="td-table-resultado text-colocacao ">
                            {dog.resultado !== "" ? dog.resultado + "º" : "-"}
                          </td>
                          <td className="td-table-resultado texto-track-result">
                            {obterTrap(dog.trap)}
                          </td>
                          <td className="td-table-resultado texto-nome-dog">
                            {dog.nome}
                          </td>
                          <td className="td-table-resultado texto-track-result">
                            {dog.odd_Back !== "" ? dog.odd_Back : "-"}
                          </td>
                          <td className="td-table-resultado texto-track-result">
                            {dog.odd_Lay !== "" ? dog.odd_Lay : "-"}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  ))}
                </CardBody>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <BorderLinearProgress variant="indeterminate" value={loading} />
          </div>
        )}
      </div>
    </>
  );
}
