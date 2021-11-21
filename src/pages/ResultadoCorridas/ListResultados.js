import React, { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardBody, Table } from "reactstrap";
// import DatePicker from "react-datepicker";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { utils } from "react-modern-calendar-datepicker";
// import DatePicker from "react-modern-calendar-datepicker";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import api from "../../Api/Api";
import "./style.css";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import swal from "sweetalert";
import Menu from "../../pages/Menu/index";

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
  const [selectedDate, setDateChange] = useState(new Date());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function carregarListar(valor) {
    if (valor) {
      setLoading(false);
    }
    const formattedDate = format(dateSelecionanda, "yyyy-MM-dd ");

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
    if (value !== null) {
      return value.resultado !== "";
    }
  }

  function obterResultado(list) {
    return list.dogs.filter(isBigEnough).sort(function (a, b) {
      return a.resultado - b.resultado;
    });
  }

  function obterTrap(valor) {
    if (valor !== null) {
      return <img src={imagens[[valor]]} alt={""} width={20} height={20}></img>;
    } else {
      return "";
    }
  }

  function clickk() {
    setClick(true);
    carregarListar(true);
  }

  const handleDateChange = (date) => {
    setAutoClose(date);
  };

  const materialTheme = createMuiTheme({
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: "#43a047",
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          // backgroundColor: lightBlue.A200,
          // color: "white",
        },
      },
      MuiPickersDay: {
        day: {
          color: "black",
        },
        daySelected: {
          backgroundColor: "#43a047",
        },
        dayDisabled: {
          color: "gray",
        },
        current: {
          color: "black",
        },
      },
      MuiInputBase: {
        root: {
          color: "white",
          // backgroundColor: "red",
          borderRadius: "5px",
          textAlign: "center",
          padding: "10px 10px 10px 10px",
          margin: "10px",
          fontSize: "20px",
          border: "1px white solid",
        },
      },
      MuiFormLabel: {
        root: {
          color: "red",
          fontSize: "20px",
          padding: "1px 15px 15px 60px",
          margin: "10px",
        },
      },
      MuiInput: {
        root: {
          underline: {
            before: {
              color: "red",
            },
            after: {
              color: "red",
            },
          },
        },
      },
      MuiFormControl: {
        root: {
          color: "white",
        },
      },

      MuiPickersModal: {
        dialogAction: {
          // color: lightBlue["400"],
        },
      },
    },
  });

  class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
      return format(date, "d MMM yyyy", { locale: this.locale });
    }
  }
  return (
    <>
      <Menu></Menu>
      <div className="conteiner-result">
        <div className="conteiner-data">
          <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={LocalizedUtils} locale={ptBR}>
              <DatePicker
                autoOk
                format="dd/MM/yyyy"
                clearable
                value={dateSelecionanda}
                onChange={handleDateChange}
                disableFuture
                minDate={new Date("2021-08-20")}
              />
            </MuiPickersUtilsProvider>
          </ThemeProvider>

          {/* <DatePicker
            value={selectedDay}
            onChange={setSelectedDay}
            calendarClassName="responsive-calendar" // added this
            formatInputText={formatDate}
            inputPlaceholder="Selecione a Data" // placeholder
            minimumDate={minimumDate}
            maximumDate={utils().getToday()}
          /> */}
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
                <div className="conteiner-header-card">
                  <div className="conteiner-load">
                    <div className="conteiner-header">
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
                    </div>
                    <div
                      className={
                        valor.statusResultado !== "C" ? "loader" : null
                      }
                    ></div>
                  </div>
                </div>
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