import React, { useState } from 'react'
import Tabela from './Tabela'
import './style.css';
import { Card } from 'react-bootstrap';



export default function DashBoard() {
    return (
        <div className="conteiner" >
             <Tabela></Tabela>

        </div>
    );

}
