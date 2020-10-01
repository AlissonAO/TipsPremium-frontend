import React, { useState, useEffect } from 'react'
import Tabela from './Tabela'
import './style.css'
import MenuCorrida from '../MenuCorrida/index'
import Menu from '../Menu/index'
import { connect, disconnect, subscriberDadosPista } from '../../Api/socket'
export default function DashBoard() {
  const [corrida, setCorrida] = useState(0)
  const [dadosAposta, setDadosAposta] = useState([])
  const [listGalgosNome, setListGalgosNome] = useState([])
  // useEffect(() => {
  //   subscriberDadosPista((dadosAposta) => setDadosAposta(dadosAposta), corrrida)
  // }, [corrrida])

  const handleMarket = (item) => {
    for (let key in item.runners) {
    }

    setCorrida(item)
    // setListGalgosNome(item.runners)
    //disconnect()
    // connect(item.marketId)
  }

  return (
    <div>
      <div className='.conteiner-dashboard'>
        <Menu></Menu>
        <MenuCorrida obterIdMarket={handleMarket}></MenuCorrida>
        <Tabela marketDados={corrida}></Tabela>
      </div>
    </div>
  )
}
