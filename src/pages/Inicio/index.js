import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'
export default function Inicio() {
    return (
        <div >
            <div className="conteiner-logon">
                <div className="conteiner-inicio">
                    <Link className="btn-logon" to="/ResultadoCorrida" > Entrar</Link>

                </div>
            </div>
        </div>

    )
}