import React, { useState } from 'react'
import Tabela from './Tabela'
import './style.css';
import MenuCorrida from '../MenuCorrida/index';
import Menu from '../Menu/index';



export default function DashBoard() {
    return (
        <div className=".conteiner-dashboard" >
            <Menu></Menu>
            <MenuCorrida></MenuCorrida>            
             <Tabela></Tabela>

        </div>
    );

}
