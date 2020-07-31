import React, { useState } from 'react';
import { Button, Card, CardHeader, CardBody } from 'reactstrap';
import DatePicker, { registerLocale } from "react-datepicker";
import api from '../../Api/Api';
import './style.css';
// import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import LoadingOverlay from 'react-loading-overlay';

registerLocale("ptBR", ptBR);


export default function ResultadoCorrida() {
    // 
    const [dateSelecionanda, setAutoClose] = useState(new Date());
    const [loading, setLoading] = useState(true)

    const [list, setList] = useState([]);
    const [key, setKeys] = useState([])

    async function carregarListar() {
        setLoading(false);
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
            console.log(response.data)
            setList(response.data)
            setKeys(Object.keys(response.data[0]))

        }
        setLoading(true);
       
    }

    const autoClosee = date => {
        setAutoClose(date);

    }

    function limpaTela() {
        setList([])
        setAutoClose(new Date())
        setKeys([])


    }

    // const formataData = (data) => {
    //     // console.log(data)
    //     // "H:mm:ss a"
    //     const parsedDate = format(parseISO(data), "H:mm:ss a");
    //     console.log(parsedDate.toLocaleString())
    //     return parsedDate;
    // }

    const Rows = list.map(linha => (
            <tr key={linha}>
            <td>{linha.nomegalgo}</td>
            <td>{linha.datainicio}</td>
            <td>{linha.datafim}</td>
            <td>{linha.pista}</td>
            <td>{linha.grade}</td>
            <td>{linha.trap}</td>
            <td>{linha.odd_lay}</td>
            <td>{linha.odd_back}</td>
            <td>{linha.probabilidade}</td>
            <td>{linha['Total Galgo']}</td>
            <td>{linha.win}</td>
            <td>{linha['Total da corrida']}</td>

        </tr>
        ))
    



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

            <div  >
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
                                onChange={dateSelecionanda => autoClosee(dateSelecionanda)}
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
               {
                   loading ? (
                    <Card className="card-table ">
                        <CardHeader className="card-table card-header-table">
                        </CardHeader>
                        <CardBody>
                            <table className="table" >
                                <thead >
                                    <tr>
                                        {key.map((item) => <th key={item}>{item}</th>)}
                                    </tr>
                                </thead>
                                <tbody className="card-table" >
                                    {
                                        Rows
                                    }
                                </tbody>
                            </table>
                        </CardBody>

                    </Card>
                    
                ) :( 
                     <LoadingOverlay
                    active={!loading}
                    spinner 
                    text='Carregando os resultados...' 
                    className="spinner"
                    styles={{
                        overlay: {
                            "background-color": "#1d2431",
                            "padding": "10px",
                        },
                        content: {
                            "font-size": "20px",
                            "margin-bottom": "10px",
                            "margin-right": "180px",
                        },
                      }}
                    />
                    )
                }

            </div>

        </div>
    )
}