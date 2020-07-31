import React from 'react';
import './global.css';
import DashBoard from './pages/Dashboard'
import Menu from './pages/Menu'
import MenuCorrida from './pages/MenuCorrida';
import Tabela from './pages/Dashboard/Tabela/index'

import ResultadoCorrida from './pages/ResultadoCorridas/ResultadoCorrida';

function App() 
{
  return (
    <div className="conteinerGlobal" >
     <ResultadoCorrida/>
     
      {/* <Menu/>
      <MenuCorrida/>
      <Tabela></Tabela> */}
   </div>
  );
}

export default App;
