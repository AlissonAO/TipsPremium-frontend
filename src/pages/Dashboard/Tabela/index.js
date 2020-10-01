import React, { useState, useEffect } from 'react'

import './style.css'
import { Tabs, Tab, Card, Nav, Table, Button } from 'react-bootstrap'
import api from '../../../Api/Api'
import { connect, disconnect } from '../../../Api/socket'
import LoadingOverlay from 'react-loading-overlay'

export default function Tabela(props) {
  const [loading, setLoading] = useState(true)
  const [listGalgos, setListGalgos] = useState([])
  const [teste, setTeste] = useState(0)
  const [key, setKeys] = useState([])
  var listaGalgos = []
  //  console.log('Chegou os dados Socket ' + props.marketDados)
  console.log('Chegou o iD  ' + props.marketDados)

  // if (props.marketDados !== null && props.idcorrida) {
  // console.log('chegou aki  stringify' + props.marketDados)
  // useEffect(() => {
  //   for (let key in props.marketDados['mc']) {
  //     console.log(props.marketDados['mc'][key].rc)
  //     listaGalgos = props.marketDados['mc'][key].rc
  //     for (let key in listaGalgos) {
  //       // if (listaGalgos[key].bdatl[0] != undefined) {
  //       //   console.log('Entrou')
  //       // }
  //     }
  //     // setKeys(Object.keys(listaGalgos.[id].runners[0]))
  //     // setListGalgos(props.marketDados['mc'][key].rc)
  //   }
  //   //}
  //   //}
  // }, [props.marketDados])
  // }

  async function obterdados() {
    const dados = await api.get('/listarMercado', {
      params: {
        id: props.marketDados.marketId,
      },
    })
    console.log(dados.data[0])
    verificarIsOPEN(dados.data[0])
  }

  function verificarIsOPEN(list) {
    if (list.status === 'OPEN') {
      for (let i of list.runners) {
        console.log(i.selectionId)
        for (let name in props.marketDados.runners) {
          if (i.selectionId === props.marketDados.runners[name].selectionId) {
            i.name = props.marketDados.runners[name].runnerName
          }
        }
      }
      setListGalgos(list.runners)
    }
  }

  function formatMoney(number) {
    return number.toLocaleString('pt-br', {
      currency: 'BRL',
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(props.marketDados)
      if (props.marketDados !== 0) {
        obterdados()
      }
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [props.marketDados])
  const Rows = listGalgos.map((linha) => (
    <tr key={linha}>
      <td>{linha.name.substring(0, 1)}</td>
      <td>{linha.name.substring(2)}</td>
      <td>
        {((1 / linha.ex.availableToLay[0].price) * 100).toFixed(2).toString() +
          '%'}
      </td>
      <td>{formatMoney(linha.totalMatched)}</td>
      <td>{linha.ex.availableToBack[0].price}</td>
      <td>{linha.ex.availableToLay[0].price}</td>
    </tr>
  ))

  return (
    <div>
      {loading ? (
        <div className='conteinerTabela'>
          <Card className='card'>
            <Card.Header className='card-header'>
              {/* <Card.Text className="card card-header card-title">
                            Corridas
                         </Card.Text> */}
            </Card.Header>
            <Card.Body className='card card-body'>
              <Card.Title className='card card-title'></Card.Title>
              {/* <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                          </Card.Text> */}
              <Table className='table'>
                <tr>
                  <th>Track</th>
                  <th>Nome</th>
                  <th>Probabilidade</th>
                  <th>Valor</th>
                  <th>Old Back</th>
                  <th>Old lay</th>
                </tr>
                <tbody>{Rows}</tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <LoadingOverlay
          active={!loading}
          spinner
          text='Carregando os resultados...'
          className='spinner'
          styles={{
            overlay: {
              'background-color': '#1d2431',
              padding: '10px',
            },
            content: {
              'font-size': '20px',
              'margin-bottom': '10px',
              'margin-right': '180px',
            },
          }}
        />
      )}
    </div>
  )
}
