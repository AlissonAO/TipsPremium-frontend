import React, { useState, useEffect } from "react";

import "./style.css";
import api from "../../../Api/Api";
import { connect, disconnect } from "../../../Api/socket";
// import LoadingOverlay from "react-loading-overlay";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Tabela(props) {
  const [loading, setLoading] = useState(true);
  const [listGalgos, setListGalgos] = useState([]);
  const [teste, setTeste] = useState(0);
  const [key, setKeys] = useState([]);
  const [listCarregada, setlistCarregada] = useState(false);
  const [value, setValue] = useState(0);
  //  console.log('Chegou os dados Socket ' + props.marketDados)
  console.log("Chegou o iD  " + props.marketDados);
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

  // if (props.marketDados !== null && props.idcorrida) {
  // console.log('chegou aki  stringify' + props.marketDados)
  // useEffect(() => {
  //   for (let key in props.marketDados['mc']) {
  //     console.log(props.marketDados['mc'][key].rc)
  //     listaGalgos = props.marketDados['mc'][key].rc
  //     for (let key in listaGalgos) {
  //       // if (listaGalgos[key].bdatl[0] != undefined) {
  //       //   console.log('Entrou')
  //       // }
  //     }
  //     // setKeys(Object.keys(listaGalgos.[id].runners[0]))
  //     // setListGalgos(props.marketDados['mc'][key].rc)
  //   }
  //   //}
  //   //}
  // }, [props.marketDados])
  // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function obterdados() {
    const dados = await api.get("/listarMercado", {
      params: {
        id: props.marketDados.marketId,
      },
    });
    console.log(dados.data[0]);
    // verificarIsOPEN(dados.data[0]);
  }

  function verificarIsOPEN(list) {
    if (list.status === "OPEN") {
      for (let i of list.runners) {
        console.log(i.selectionId);
        for (let name in props.marketDados.runners) {
          if (i.selectionId === props.marketDados.runners[name].selectionId) {
            i.name = props.marketDados.runners[name].runnerName;
          }
        }
      }
      setListGalgos(list.runners);
      setLoading(true);
    }
  }

  function formatMoney(number) {
    return number.toLocaleString("pt-br", {
      currency: "BRL",
    });
  }

  useEffect(() => {
    setLoading(false);
    // const interval = setInterval(() => {
    setListGalgos(props.marketDados);
    // if (props.marketDados !== null) {
    // obterdados();
    // }
    // }, 3000);
    // return () => {
    //   // clearInterval(interval);
    // };
  }, [listGalgos, props.marketDados]);

  // const Rows = listGalgos.map((linha) => (
  //   <tr key={linha}>
  //     <td>{linha.Dis}</td>

  /* <td>{linha.name.substring(0, 1)}</td>
      <td>{linha.name.substring(2)}</td>
      <td>
        {linha.ex.availableToLay[0]
          ? ((1 / linha.ex.availableToLay[0].price) * 100)
              .toFixed(2)
              .toString() + " %"
          : 0}
      </td>
      <td>{linha.totalMatched ? formatMoney(linha.totalMatched) : 0}</td>
      <td>
        {linha.ex.availableToBack[0] ? linha.ex.availableToBack[0].price : 0}
      </td>
      <td>
        {linha.ex.availableToLay[0] ? linha.ex.availableToLay[0].price : 0}
      </td> */
  //   </tr>
  // ));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* {loading ? ( */}
      <div className="conteinerTabela">
        <Paper square className="tab-dados">
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Analíse" />
            <Tab label="Historico" />
            <Tab label="AvB" />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <TableContainer className="table-responsive">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Trap</TableCell>
                  <TableCell>Galgo</TableCell>
                  <TableCell>Cor</TableCell>
                  <TableCell>Sexo</TableCell>
                  <TableCell>Peso</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Favorito</TableCell>
                  <TableCell>Resultado</TableCell>
                  <TableCell>Top Time</TableCell>
                  <TableCell>M. Pos</TableCell>
                  <TableCell>U. Pos</TableCell>
                  <TableCell>M. Tempo</TableCell>
                  <TableCell>Top Split</TableCell>
                  <TableCell>M. Split</TableCell>
                  <TableCell>Recup. Media</TableCell>
                  <TableCell>BRT</TableCell>
                  <TableCell>Top Speed</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {listGalgos.dogs
                  ? listGalgos.dogs.map((dog) => {
                      return (
                        <TableRow key={dog}>
                          <TableCell component="th" scope="row">
                            <img
                              src={imagens[dog.trap]}
                              alt={""}
                              width={20}
                              height={20}
                            ></img>
                          </TableCell>
                          <TableCell>{dog.nome}</TableCell>
                          <TableCell>
                            <img
                              src={corDogs[dog.cor]}
                              alt={""}
                              width={20}
                              height={20}
                            ></img>
                          </TableCell>
                          <TableCell>{dog.dogSex}</TableCell>
                          <TableCell>{dog.peso}</TableCell>
                          <TableCell>{dog.analitico.overall}</TableCell>
                          <TableCell>{dog.analitico.Favorito}</TableCell>
                          <TableCell>{dog.resultado}</TableCell>
                          <TableCell>{dog.analitico.topTime}</TableCell>
                          <TableCell>{dog.analitico.mediaPosicao}</TableCell>
                          <TableCell>{dog.analitico.ultimoTempo}</TableCell>
                          <TableCell>{dog.analitico.mediaTempo}</TableCell>
                          <TableCell>{dog.analitico.topSplit}</TableCell>
                          <TableCell>{dog.analitico.mediaSplit}</TableCell>
                          <TableCell>{dog.analitico.recupMedia}</TableCell>
                          <TableCell>{dog.brt}</TableCell>
                          <TableCell>{dog.top_speed}</TableCell>
                        </TableRow>
                      );
                    })
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Historico
        </TabPanel>
        <TabPanel value={value} index={2}>
          AvB
        </TabPanel>
      </div>
      {/* ) : (
      <LoadingOverlay
        active={!loading}
        spinner
        text="Carregando os resultados..."
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
        }} */}
    </div>
  );
}
