import React from 'react';
import './global.css';
import Router from './routes'
import Dasboard from '../src/pages/Dashboard/index'

function App() 
{
  document.title = 'Tips'
  return (
    <div className="conteinerGlobal" >
      {/* <Router></Router> */}
<Dasboard></Dasboard>
   </div>
  );
}

export default App;
