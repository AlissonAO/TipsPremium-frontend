import React, { useState } from 'react';
import { Button, Card, CardHeader, CardBody } from 'reactstrap';
import DatePicker, { registerLocale } from "react-datepicker";
import api from '../../Api/Api';
import './style.css';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
// import ReactLoading from "react-loading";
registerLocale("ptBR", ptBR);


export default function ResultadoCorrida() {
    // 
    const [dateSelecionanda, setAutoClose] = useState(new Date());
    // const [loading, setLoading] = useState(false)

    const [list, setList] = useState([]);
    const [key, setKeys] = useState([])

    async function carregarListar() {
        const response = await api.get('/listarResultados', {
            params: {
                data: dateSelecionanda.toISOString()
            }
        }
        )
        if (response.data.length === 0) {
            return swal("Não há registro para essa data ", "", "info", {
                className: "swal-footer",
            });
        } else {
            setList(response.data)
            setKeys(Object.keys(response.data[0]))

        }


    }

    const autoClosee = date => {
        setAutoClose(date);

    }

    function limpaTela() {
        setList([])
        setAutoClose(new Date())
        setKeys([])
    }

    const formataData = (data) => {
        console.log(data)
        // "H:mm:ss a"
        const parsedDate = format(parseISO(data), "H:mm:ss a");
        console.log(parsedDate.toLocaleString())
        return parsedDate;
    }

    const Rows = list.map(linha => (
        <tr key={linha}>
            <td>{linha.nomegalgo}</td>
            <td>{formataData(linha.datainicio)}</td>
            <td>{formataData(linha.datafim)}</td>
            <td>{linha.pista}</td>
            <td>{linha.grade}</td>
            <td>{linha.trap}</td>
            <td>{linha.odd_lay}</td>
            <td>{linha.odd_back}</td>
            <td>{linha.probabilidade}</td>
            <td>{linha['Total Galgo']}</td>
            <td>{linha.win.toString()}</td>
            <td>{linha['total da corrida']}</td>

        </tr>

    )


    )

    async function teste() {

        const teste = await Rows;
        if (teste) {
            console.log("olaa")

        } else {
            console.log("naoo")
        }

        return teste
    }
    const DataPic = ({ title, children }) => (
        <Card>
            <CardHeader>
                <h5>{title}</h5>
            </CardHeader>
            <CardBody className="card-body"> {children}</CardBody>
        </Card>
    );

    return (
        <div className="conteiner" >
            <div className="conteiner-data" >
                <Card className="card-data">
                    <CardHeader>
                        <h1>Consultar resultado Betfair</h1>
                    </CardHeader>
                    <CardBody className="card-body-data">
                        <div className="texto-data">
                            <h3>Selecione a Data:</h3>
                        </div>
                        <div>
                            <DatePicker
                                locale="ptBR"
                                dateFormat="dd/MM/yyyy"
                                selected={dateSelecionanda}
                                onSelect={dateSelecionanda => autoClosee(dateSelecionanda)}
                                maxDate={new Date()}
                                className="form-control"
                            />
                        </div>
                    </CardBody>
                    <div className="conteiner-pesquisar-button">
                        <Button className="button" onClick={carregarListar}>Pesquisar</Button>
                    </div>
                    <div className="conteiner-clear-button">
                        <Button onClick={limpaTela}>Limpa</Button>
                    </div>
                </Card>
            </div>
            <div >
                <Card className="card-table ">
                    <CardHeader className="card-header-table">
                    </CardHeader>
                    <CardBody className="card-body">

                        <table className="table" >
                            <thead >
                                <tr>
                                {key.map((item) => <th key={item}>{item}</th>)}
                                </tr>
                            </thead>
                            <tbody className="card-table" >
                                {
                                    Rows
                                    // list.map(linha => <Linha linha={linha} />)
                                }

                            </tbody>
                        </table>
                    </CardBody>

                </Card>

            </div>

        </div>
    )
}