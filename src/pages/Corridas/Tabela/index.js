import React, { useState, useEffect, useContext, useRef } from "react";
import "./style.css";
import api from "../../../Api/Api";
import { connect, disconnect, subscriberDadosPista } from "../../../Api/socket";

import { addDays, format } from "date-fns";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LoadingOverlay from "react-loading-overlay";
import swal from "sweetalert";

import Predicator from "../../predicator/index";

import trap1 from "../../../asserts/trap/1.png";
import trap2 from "../../../asserts/trap/2.png";
import trap3 from "../../../asserts/trap/3.png";
import trap4 from "../../../asserts/trap/4.png";
import trap5 from "../../../asserts/trap/5.png";
import trap6 from "../../../asserts/trap/6.png";

import BE from "../../../asserts/dogs/BE.png";
import BEW from "../../../asserts/dogs/BEW.png";
import BK from "../../../asserts/dogs/BK.png";
import DKBD from "../../../asserts/dogs/DKBD.png";
import F from "../../../asserts/dogs/F.png";
import FW from "../../../asserts/dogs/FW.png";
import WBK from "../../../asserts/dogs/WBK.png";
import BD from "../../../asserts/dogs/BD.png";
import BKW from "../../../asserts/dogs/BKW.png";
import WF from "../../../asserts/dogs/WF.png";
import ptBR from "date-fns/locale/pt-BR";

function Corridas(props) {
  const [listCorrida, setCorridas] = useState([]);
  const [listGalgos, setListGalgos] = useState([]);
  const [listGalgosBetfair, setListGalgosBetfair] = useState([]);
  const [value, setValue] = useState(0);
  const [habitarPredicator, sethabitarPredicator] = useState(true);
  const [buscaCorrida, setBuscaCorrida] = useState(true);
  const [loading, setLoading] = useState(false);
  // console.log("lista betfair " + JSON.stringify(listGalgosBetfair));

  const imagens = ["trap0", trap1, trap2, trap3, trap4, trap5, trap6];
  const corDogs = {
    BE: BE,
    BEW: BEW,
    BK: BK,
    DKBD: DKBD,
    F: F,
    FW: FW,
    WBK: WBK,
    BD: BD,
    BKW: BKW,
    WF: WF,
  };
  useEffect(() => {
    setListGalgos(props.corrida);
    console.log(props.corrida);
    setListGalgosBetfair([]);
    setBuscaCorrida(true);
    setLoading(false);
  }, [props.corrida]); // eslint-disable-line
  // async function obterlista() {
  //   const response = await api.get("/listarCorridas");
  //   // subscriberDadosPista((dadosAposta) => setCorridas(dadosAposta));
  //   console.log(response.data);
  //   setCorridas(response.data);
  // }
  // UseEffect para as corridas
  // useEffect(() => {
  //   if (habitarPredicator) {
  //     if (listCorrida.length === 0) {
  //       obterlista();
  //     } else {
  //       const interval = setInterval(async () => {
  //         obterlista();
  //       }, 60000);
  //       return () => {
  //         clearInterval(interval);
  //       };
  //     }
  //   }
  // }, [habitarPredicator, listCorrida]);

  //UseEffect para as ODD da betfair
  useEffect(() => {
    setLoading(true);
    if (habitarPredicator) {
      if (listGalgosBetfair !== []) {
        console.log("Busnca api betfair");
        const interval = setInterval(async () => {
          if (buscaCorrida) {
            obterdados();
          }
        }, 15000);
        return () => {
          clearInterval(interval);
        };
      }
    }

    // verificarIsOPEN(teste.data[0]);
    // console.log(teste);

    // verificarIsOPEN(listGalgosBetfair);
    // setListGalgosBetfair(teste.data[0]);
  }, [
    buscaCorrida,
    habitarPredicator,
    listCorrida.length,
    listGalgos.length,
    listGalgosBetfair,
    obterdados,
  ]);

  // useEffect(() => {
  //   setODD([odd]);
  // }, [odd]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function obterdados() {
    const dados = await api.get("/listarMercado", {
      params: {
        id: listGalgos.idMarket,
      },
    });
    console.log(dados.data[0]);
    if (dados.data[0]) {
      setListGalgosBetfair(dados.data[0]);
    } else {
      setListGalgosBetfair([]);
      setBuscaCorrida(false);
    }
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  ///valores Tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 1) {
      sethabitarPredicator(false);
    } else {
      sethabitarPredicator(true);
    }
  };

  const theme = createMuiTheme({
    overrides: {
      // Style sheet nam
      MuiTable: {
        // Name of the rule
        root: {
          background: "#222c3b",
          padding: "0px",
          margin: "0px",
        },
      },

      MuiTableHead: {
        root: {
          background: "#82cbc4",
          // background: "#363d47",
          padding: "10px",
          color: "#000000",
        },
      },
      MuiTableRow: {
        root: {
          padding: "10px",
          width: "100%",
          height: "100%",
        },
      },
      MuiTableCell: {
        root: {},
        body: {
          color: "#d8e4ec",
          borderBottom: "0.5px solid #1e2734",
          fontSize: "15px",
          fontFamily: "Mada,sans-serif",
          padding: "5px",
        },
        head: {
          color: "#263238",
          // color: "white",
          borderBottom: "1px solid #1d2431",
          fontFamily: "Mada,sans-serif",
          fontSize: "15px",
          padding: "3px",
          fontWeight: "900",
        },
      },
      MuiIconButton: {
        root: {
          color: "#82cbc4",
        },
      },
      MuiTypography: {
        h6: {
          color: "#d8e4ec",
          fontSize: "25px",
          fontFamily: "Mada,sans-serif",
          fontWeight: "900",
        },
      },
      MuiBox: {
        root: {
          margin: "0px",
          padding: "3px",
        },
      },
    },
  });

  const useRowStyles = makeStyles((props) => ({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
      padding: "0 30px",
    },
    conteinerTabela: {
      margin: "0px 20px",
      height: "auto",
      marginBottom: "25px",
    },
    cardTable: {
      padding: "0px 0px",
    },
    oddback: {
      color: "#98fb98",
      fontWeight: "500",
      fontSize: "16px",
    },
    oddlay: {
      color: "#f7bfb4",
      fontWeight: "500",
      fontSize: "16px",
    },
    favorito: {
      fontWeight: "900",
      fontSize: "17px",
      color: (props) => props.color,
      // color: "#e3e8eb",
    },
    rating: {
      fontWeight: "900",
      fontSize: "17px",
      color: "#e3e8eb",
    },
    probabilidade: {
      paddingTop: "30px",
      paddingRigth: "5px",
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      color: "white",
      textAlign: "center",
      whiteSpace: "nowrap",
      backgroundColor: "#27619b",
      fontWeight: "500",
      fontSize: "15px",
      borderRadius: "3px",
    },

    semProbabilidade: {
      color: "#ff9800",
      fontSize: "14px",
    },
    indisponivel: {
      color: "#999999",
      fontSize: "14px",
    },

    removido: {
      color: "#FC4422",
    },
    vencedor: {
      color: "#98fb98;",
    },
    valor: {
      fontSize: "15px",
      color: "#08CCAB",
    },

    teste: {
      position: "sticky",
    },
  }));
  const classes = useRowStyles(props);

  function ObterODD(dog, mercado) {
    if (listGalgos.idMarket === null) {
      return (
        <TableCell align={"center"} className={classes.indisponivel}>
          indisponível
        </TableCell>
      );
    }

    if (listGalgosBetfair !== [] && listGalgosBetfair !== undefined) {
      if (
        listGalgosBetfair.length !== 0 &&
        listGalgosBetfair.runners.length !== 0
      ) {
        let retorno = listGalgosBetfair.runners.find(
          (valor) => valor.selectionId === dog.idDogBetfair
        );
        if (typeof retorno !== "undefined") {
          console.log("retono " + JSON.stringify(retorno));
          if (listGalgosBetfair.status === "CLOSED") {
            if (retorno.status === "WINNER") {
              return (
                <TableCell align={"center"} className={classes.vencedor}>
                  {retorno.status}
                </TableCell>
              );
            } else {
              return (
                <TableCell align={"center"} className={classes.removido}>
                  {retorno.status}
                </TableCell>
              );
            }
          }
          if (retorno.status === "REMOVED")
            return (
              <TableCell align={"center"} className={classes.removido}>
                Removido
              </TableCell>
            );
          if (mercado === "BACK") {
            if (
              retorno.ex.availableToBack !== "undefined" &&
              retorno.ex.availableToBack.length !== 0
            ) {
              return retorno.ex.availableToBack[0].price;
            } else {
              return retorno.lastPriceTraded;
            }
          } else {
            if (
              retorno.ex.availableToLay !== "undefined" &&
              retorno.ex.availableToLay.length !== 0
            ) {
              return retorno.ex.availableToLay[0].price;
            } else {
              return retorno.lastPriceTraded;
            }
          }
        }
      }
    }
    return (
      <TableCell align={"center"} className={classes.semProbabilidade}>
        Aguarde
      </TableCell>
    );
  }

  function ObterProbabilidade(dog) {
    if (listGalgos.idMarket === null) {
      return (
        <TableCell align={"center"} className={classes.indisponivel}>
          indisponível
        </TableCell>
      );
    }

    if (listGalgosBetfair !== [] && listGalgosBetfair !== undefined) {
      if (
        listGalgosBetfair.length !== 0 &&
        listGalgosBetfair.runners.length !== 0
      ) {
        let retorno = listGalgosBetfair.runners.find(
          (valor) => valor.selectionId === dog.idDogBetfair
        );

        if (typeof retorno !== "undefined") {
          if (retorno.status === "REMOVED") {
            return (
              <TableCell
                align={"center"}
                className={classes.removido}
              ></TableCell>
            );
          } else if (
            retorno.ex.availableToLay !== undefined &&
            retorno.ex.availableToLay.length !== 0
          ) {
            let v = ((1 / retorno.ex.availableToLay[0].price) * 100)
              .toFixed(2)
              .toString();
            v = v * 2.5 + "px";
            return (
              <TableCell
                align={"center"}
                className={classes.probabilidade}
                style={{
                  width: v,
                  height: "0px",
                }}
              >
                {((1 / retorno.ex.availableToLay[0].price) * 100)
                  .toFixed(2)
                  .toString() + " %"}
              </TableCell>
            );
          }
        }
      }
    }
    return (
      <TableCell align={"center"} className={classes.semProbabilidade}>
        Aguarde
      </TableCell>
    );
  }

  function valorInvestido(dog) {
    if (listGalgos.idMarket === null) {
      return (
        <TableCell align={"center"} className={classes.indisponivel}>
          indisponível
        </TableCell>
      );
    }

    if (listGalgosBetfair !== [] && listGalgosBetfair !== undefined) {
      if (
        listGalgosBetfair.length !== 0 &&
        listGalgosBetfair.runners.length !== 0
      ) {
        let retorno = listGalgosBetfair.runners.find(
          (valor) => valor.selectionId === dog.idDogBetfair
        );
        if (typeof retorno !== "undefined") {
          if (retorno.status === "REMOVED")
            return (
              <TableCell
                align={"center"}
                className={classes.removido}
              ></TableCell>
            );
          else if (retorno.totalMatched !== undefined) {
            return (
              <TableCell className={classes.valor} align={"center"}>
                {retorno.totalMatched.toLocaleString("pt-BR")}
              </TableCell>
            );
          }
        }
      }
    }
    return (
      <TableCell align={"center"} className={classes.semProbabilidade}>
        Aguarde
      </TableCell>
    );
  }
  const dataFormata = (data) => {
    return format(addDays(new Date(data), 1), "dd 'de' MMMM", {
      locale: ptBR,
    });
  };

  function Rows(dados) {
    const { dog } = dados;
    const [open, setOpen] = useState(dog.aberto);

    const openHist = (dog, open) => {
      Object.assign(dog, (dog["aberto"] = open));
      setOpen(open);
    };

    return (
      <React.Fragment>
        <TableRow key={dog}>
          <TableCell>
            <IconButton size="medium" onClick={() => openHist(dog, !open)}>
              {dog.aberto ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <img src={imagens[dog.trap]} alt={""} width={20} height={20}></img>
          </TableCell>
          <TableCell align={"center"}>{dog.nome}</TableCell>
          {/* <TableCell>
            <img src={corDogs[dog.cor]} alt={""} width={20} height={20}></img>
          </TableCell> */}
          <TableCell align={"center"} className={classes.favorito}>
            {dog.analitico.Favorito}
          </TableCell>
          <TableCell align={"center"} classes={{ root: classes.rating }}>
            {dog.analitico.overall}
          </TableCell>
          <TableCell align={"center"}>
            {dog.dogSex === "B" ? "F" : "M"}
          </TableCell>
          <TableCell align={"center"}>{dog.peso}</TableCell>
          {/* <TableCell>{dog.resultado}</TableCell> */}
          <TableCell align={"center"}>{dog.analitico.topTime}</TableCell>
          <TableCell align={"center"}>{dog.analitico.mediaPosicao}</TableCell>
          <TableCell align={"center"}>{dog.analitico.ultimoTempo}</TableCell>
          <TableCell align={"center"}>{dog.analitico.mediaTempo}</TableCell>
          <TableCell align={"center"}>{dog.analitico.topSplit}</TableCell>
          <TableCell align={"center"}>{dog.analitico.mediaSplit}</TableCell>
          <TableCell align={"center"}>{dog.analitico.recupMedia}</TableCell>
          <TableCell align={"center"}>{dog.brt}</TableCell>
          <TableCell align={"center"}>{dog.top_speed}</TableCell>

          {valorInvestido(dog)}

          {ObterProbabilidade(dog)}
          <TableCell align={"center"} classes={{ root: classes.oddback }}>
            {ObterODD(dog, "BACK")}
          </TableCell>
          <TableCell align={"center"} classes={{ root: classes.oddlay }}>
            {ObterODD(dog, "LAY")}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={20}>
            <Collapse in={dog.aberto} timeout="auto">
              <Box margin={0}>
                <Typography
                  variant={"h6"}
                  align={"center"}
                  style={{ paddingTop: 1, color: "#ff9800" }}
                >
                  Historico
                </Typography>
                <Typography>
                  <div className="conteiner-Historico">
                    <div>Data de Nasc: {dog.dataNasc}</div>
                    <div>{dog.qtdSemCorre} dia(s) sem correr</div>
                  </div>
                </Typography>

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align={"center"}>Data</TableCell>
                      <TableCell align={"center"}>Dis</TableCell>
                      <TableCell align={"center"}>Trap</TableCell>
                      <TableCell align={"center"}>Peso</TableCell>
                      <TableCell align={"center"}>Split</TableCell>
                      <TableCell align={"center"}>Bends</TableCell>
                      <TableCell align={"center"}>Final</TableCell>
                      {/* <TableCell align={"center"}>Recuperação</TableCell> */}
                      <TableCell align={"center"}>Remarks</TableCell>
                      <TableCell align={"center"}>Grade</TableCell>
                      <TableCell align={"center"}>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dog.hist.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell align={"center"} component="th" scope="row">
                          {historyRow.date_corrida !== ""
                            ? dataFormata(historyRow.date_corrida)
                            : "Não há"}
                        </TableCell>
                        <TableCell align={"center"}>
                          {historyRow.dis !== "" ? historyRow.dis + "m" : "0"}
                        </TableCell>
                        <TableCell align={"center"}>{historyRow.trp}</TableCell>
                        <TableCell align={"center"}>
                          {historyRow.peso !== "" ? historyRow.peso : "0"}
                        </TableCell>
                        <TableCell align={"center"}>
                          {historyRow.split !== "" ? historyRow.split : "0"}
                        </TableCell>
                        <TableCell align={"center"}>
                          {historyRow.bends !== "" ? historyRow.bends : "0"}
                        </TableCell>
                        <TableCell align={"center"}>
                          {historyRow.fin !== "" ? historyRow.fin : "0"}
                        </TableCell>
                        {/* <TableCell align={"center"}>Teste</TableCell> */}
                        <TableCell align={"center"}>
                          {historyRow.remaks}
                        </TableCell>
                        <TableCell align={"center"}>
                          {historyRow.grade}
                        </TableCell>
                        <TableCell align={"center"}>
                          {historyRow.caltm}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div>
      {loading ? (
        <div className={classes.conteinerTabela}>
          <Paper
            style={{ paddingBottom: 3, paddingTop: 0, background: "#222c3b" }}
          >
            <Tabs
              TabIndicatorProps={{
                style: { background: "white", height: "2px" },
              }}
              value={value}
              onChange={handleChange}
              centered
            >
              <Tab style={{ color: "white" }} label="Analíse" />
              <Tab style={{ color: "white" }} label="Predictor" />
              {/* <Tab label="AvB" /> */}
            </Tabs>
          </Paper>
          <ThemeProvider theme={theme}>
            <TabPanel value={value} index={0}>
              <TableContainer component={Paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell align={"center"}>Trap</TableCell>
                      <TableCell align={"center"}>Galgo</TableCell>
                      <TableCell align={"center"}>Favorito</TableCell>
                      <TableCell align={"center"}>Rating</TableCell>
                      {/* <TableCell>Cor</TableCell> */}
                      <TableCell align={"center"}>Sexo</TableCell>
                      <TableCell align={"center"}>Peso</TableCell>
                      {/* <TableCell>Resultado</TableCell> */}
                      <TableCell align={"center"}>Top Time</TableCell>
                      <TableCell align={"center"}>M. Pos</TableCell>
                      <TableCell align={"center"}>U. Pos</TableCell>
                      <TableCell align={"center"}>M. Tempo</TableCell>
                      <TableCell align={"center"}>Top Split</TableCell>
                      <TableCell align={"center"}>M. Split</TableCell>
                      <TableCell align={"center"}>Recup. Media</TableCell>
                      <TableCell align={"center"}>BRT</TableCell>
                      <TableCell align={"center"}>Top Speed</TableCell>
                      <TableCell align={"center"}>Valor Investido</TableCell>
                      <TableCell align={"center"}>Probabilidade</TableCell>
                      <TableCell align={"center"}>FAVOR</TableCell>
                      <TableCell align={"center"}>CONTRA</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listGalgos.dogs
                      ? listGalgos.dogs.map((dog) => (
                          <Rows key={dog.nome} dog={dog}></Rows>
                        ))
                      : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Predicator
                listGalgos={listGalgos}
                listBetfair={listGalgosBetfair}
              ></Predicator>
            </TabPanel>
          </ThemeProvider>
        </div>
      ) : (
        <LoadingOverlay
          active={!loading}
          spinner
          text="Carregando..."
          className="spinner"
          styles={{
            overlay: {
              "background-color": "#1d2431",
              padding: "10px",
            },
            content: {
              "font-size": "20px",
              "margin-bottom": "10px",
              "margin-right": "180px",
            },
          }}
        />
      )}
    </div>
  );
}
export default Corridas;
