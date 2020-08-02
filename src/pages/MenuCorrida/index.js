import React, { useState, useEffect } from 'react';
import './style.css';
import Tabela from '../Dashboard/Tabela/index'
import { Button, Card, CardHeader, CardBody } from 'reactstrap';

import api from '../../Api/Api'

export default function MenuCorrida() {
        const [listCorrida, setCorridas] = useState([]);
        const [contador, setContador] = useState(0)

        useEffect(() => {
                async function obterlista() {
                        const response = await api.get('/listarCorridas')
                        console.log(response.data)
                        setCorridas(response.data);
                }
                obterlista()

        }, [contador])


        function obterDetalheCorrida() {
                setContador(contador + 1)
        }

        return (

                <div className="conteinerMenuCorrida">
                                {listCorrida.map(item =>(
                       <Card className="card-corrida" >
                                     <CardBody className="card-body-corridas">
                                            <h1 className="textoCorrida">{item.marketName} </h1>

                                     </CardBody>   

                        </Card>
                                ))}
                              
                </div>
        );

}

