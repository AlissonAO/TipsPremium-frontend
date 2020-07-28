import React from 'react';

import './style.css';
import { Tabs, Tab, Card, Nav, Table } from 'react-bootstrap';

export default function Tabela(props) {
    
    console.log("props.data")
    return (
        <div className="conteinerTabela">
            <Card className="card" >
                <Card.Header className="card-header" >
                    {/* <Card.Text className="card card-header card-title">
                        Corridas
                     </Card.Text> */}
                </Card.Header>
                <Card.Body className="card card-body">
                    <Card.Title className="card card-title" >
                    </Card.Title>
                    {/* <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                     </Card.Text> */}
                    <Table className="table" >
                        <tr>
                            <th>Nome</th>
                            <th>resultado</th>
                            <th>Old lay</th>
                            <th>Old Back</th>
                        </tr>
                        <tr>
                            <td>{props.data}</td>
                            <td>Griffin</td>
                            <td>12.0</td>
                            <td>12.0</td>
                        </tr>
                        <tr>
                        <td>{props.data}</td>
                            <td>Griffin</td>
                            <td>12.0</td>
                            <td>12.0</td>
                        </tr>
                        <tr>
                            <td>Bigtime Levi</td>
                            <td>Swanson</td>
                            <td>12.0</td>
                            <td>12.0</td>
                        </tr>
                        <tr>
                            <td>Allegro Curtis</td>
                            <td>Brown</td>
                            <td>12.0</td>
                            <td>12.0</td>
                        </tr>

                    </Table>
                </Card.Body>
            </Card>
        </div>
    );


} 