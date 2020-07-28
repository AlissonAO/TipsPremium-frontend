import React, { useState, useEffect } from 'react';

import './style.css';
import { Button } from 'reactstrap';
import Tabela from '../Dashboard/Tabela/index'
import { Table } from 'react-bootstrap';
import { render } from '@testing-library/react';
export default function MenuCorrida() {

        const [contador, setContador] = useState(0)
        function obterDetalheCorrida() {
                console.log("aki")
                setContador(contador + 1);

        }
        
        return (


                <div className="conteinerMenuCorrida">
                        <div className="corrida">
                                <Button data={contador} onClick={obterDetalheCorrida} className="textoCorrida">A3 460m</Button>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                        <div className="corrida">
                                <h6 className="textoCorrida">A3 460m</h6>
                        </div>
                </div>
        );

}

