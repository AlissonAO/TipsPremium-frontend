import React, { useState, useEffect } from "react";
import "./style.css";

import api from "../../Api/Api";

import { Card, CardHeader, CardBody } from "reactstrap";
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

import Menu from "../Menu/index";
import Player from "../Dashboard/Player/index";
import Predicator from "../predicator/index";

import trap1 from "../../asserts/trap/1.png";
import trap2 from "../../asserts/trap/2.png";
import trap3 from "../../asserts/trap/3.png";
import trap4 from "../../asserts/trap/4.png";
import trap5 from "../../asserts/trap/5.png";
import trap6 from "../../asserts/trap/6.png";

import BE from "../../asserts/dogs/BE.png";
import BEW from "../../asserts/dogs/BEW.png";
import BK from "../../asserts/dogs/BK.png";
import DKBD from "../../asserts/dogs/DKBD.png";
import F from "../../asserts/dogs/F.png";
import FW from "../../asserts/dogs/FW.png";
import WBK from "../../asserts/dogs/WBK.png";
import BD from "../../asserts/dogs/BD.png";
import BKW from "../../asserts/dogs/BKW.png";
import WF from "../../asserts/dogs/WF.png";

export default function Corridas() {
  const [listCorrida, setCorridas] = useState([]);
  const [listGalgos, setListGalgos] = useState([]);
  const [value, setValue] = useState(0);

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
    async function obterlista() {
      const response = await api.get("/listarCorridas");
      console.log(response.data);
      setCorridas(response.data);
    }
    obterlista();
  }, []);

  const handleMarketID = (item) => {
    setListGalgos(item);
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
          <Box p={1}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const useRowStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
      padding: "0 30px",
    },
  }));
  const classes = useRowStyles();

  function Rows(props) {
    const { dog } = props;
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
        <TableRow key={dog}>
          <TableCell>
            <IconButton size="medium" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <img src={imagens[dog.trap]} alt={""} width={20} height={20}></img>
          </TableCell>
          <TableCell>{dog.nome}</TableCell>
          <TableCell>
            <img src={corDogs[dog.cor]} alt={""} width={20} height={20}></img>
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
        <TableRow>
          <TableCell colSpan={20}>
            <Collapse in={open} timeout="auto">
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Historico
                </Typography>
                <Table padding="none" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Dis</TableCell>
                      <TableCell>Trap</TableCell>
                      <TableCell>Peso</TableCell>
                      <TableCell>Split</TableCell>
                      <TableCell>Bends</TableCell>
                      <TableCell>Final</TableCell>
                      <TableCell>Recuperação</TableCell>
                      <TableCell>Remarks</TableCell>
                      <TableCell>Grade</TableCell>
                      <TableCell>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dog.hist.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date_corrida}
                        </TableCell>
                        <TableCell>{historyRow.dis}</TableCell>
                        <TableCell>{historyRow.trp}</TableCell>
                        <TableCell>{historyRow.peso}</TableCell>
                        <TableCell>{historyRow.split}</TableCell>
                        <TableCell>{historyRow.bends}</TableCell>
                        <TableCell>{historyRow.fin}</TableCell>
                        <TableCell>Teste</TableCell>
                        <TableCell>{historyRow.remaks}</TableCell>
                        <TableCell>{historyRow.grade}</TableCell>
                        <TableCell>{historyRow.caltm}</TableCell>
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
      <Menu></Menu>
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
      </div>
      <div>
        <Player></Player>
      </div>

      {/* {loading ? ( */}
      <div classes={classes.root}>
        <Paper className="tab-dados">
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Analíse" />
            <Tab label="Simulação" />
            {/* <Tab label="AvB" /> */}
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <TableContainer component={Paper} className="table-responsive">
            <Table padding="none" size="medium">
              <TableHead>
                <TableRow>
                  <TableCell />
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
                  ? listGalgos.dogs.map((dog) => (
                      <Rows key={dog.nome} dog={dog}></Rows>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Predicator listGalgos={listGalgos}></Predicator>
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
          AvB
        </TabPanel> */}
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
    </div>
  );
}
