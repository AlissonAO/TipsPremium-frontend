import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody } from "reactstrap";
import DatePicker from "react-datepicker";
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

export default function ResultadoCorrida() {
  const [dateSelecionanda, setAutoClose] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [key, setKeys] = useState([]);

  async function carregarListar() {
    setLoading(false);
    const formattedDate = format(
      new Date(dateSelecionanda),
      "yyyy-MM-dd HH:mm:ss"
    );
    console.log(formattedDate);
    const response = await api.get("/listarResultados", {
      params: {
        data: formattedDate,
      },
    });

    if (response.data.length === 0) {
      setLoading(true);
      return swal("Não há registro para essa data ", "", "info", {
        className: "swal-footer",
      });
    } else {
      setList(response.data);
      setKeys(Object.keys(response.data[0]));
    }
    setLoading(true);
  }

  const autoClosee = (date) => {
    setAutoClose(date);
  };

  function limpaTela() {
    setList([]);
    setAutoClose(new Date());
    setKeys([]);
  }

  // const formataData = (data) => {
  //     // console.log(data)
  //     // "H:mm:ss a"
  //     const parsedDate = format(parseISO(data), "H:mm:ss a");
  //     console.log(parsedDate.toLocaleString())
  //     return parsedDate;
  // }

  const Rows = list.map((linha) => (
    <tr key={linha}>
      <td className="td-result td-texte">{linha.nomegalgo}</td>
      <td className="td-result">{linha.datainicio}</td>
      <td className="td-result">{linha.datafim}</td>
      <td className="td-result">{linha.pista}</td>
      <td className="td-result">{linha.grade}</td>
      <td className="td-result">{linha.trap}</td>
      <td className="td-result">{linha.odd_lay}</td>
      <td className="td-result">{linha.odd_back}</td>
      <td className="td-result">{linha.probabilidade}</td>
      <td className="td-result">{linha["Total Galgo"]}</td>
      <td className="td-result">{linha.win}</td>
      <td className="td-result">{linha["Total da corrida"]}</td>
    </tr>
  ));

  const DataPic = ({ title, children }) => (
    <Card>
      <CardHeader>
        <h5>{title}</h5>
      </CardHeader>
      <CardBody className="card-body"> {children}</CardBody>
    </Card>
  );

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
    <>
      <Menu></Menu>
      <div className="conteiner-result">
        <span className="texto-batfair">Consultar resultado Betfair</span>
        <div className="conteiner-texto">
          <span className="texto-data">Selecione a Data:</span>
          <DatePicker
            locale="ptBR"
            dateFormat="dd/MM/yyyy"
            selected={dateSelecionanda}
            onChange={(dateSelecionanda) => autoClosee(dateSelecionanda)}
            minDate={new Date("2020-07-19")}
            maxDate={new Date()}
            className="form-control"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "1px, 5px",
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: "viewport",
              },
            }}
          />
        </div>
        <div className="conteiner-pesquisar-button">
          <Button className="button" onClick={carregarListar}>
            Pesquisar
          </Button>
        </div>
        <div className="conteiner-clear-button">
          <Button onClick={limpaTela}>Limpa</Button>
        </div>
      </div>
      <div>
        {loading ? (
          <table className="table-result">
            <thead>
              <tr>
                {key.map((item) => (
                  <th className="th-result" key={item}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="card-table">{Rows}</tbody>
          </table>
        ) : (
          <div>
            <BorderLinearProgress variant="indeterminate" value={loading} />
          </div>
        )}
      </div>
    </>
  );
}
