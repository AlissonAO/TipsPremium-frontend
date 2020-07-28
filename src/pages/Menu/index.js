import React from 'react';


import './style.css';

export default function Menu() {
  return (
    
    <div>
      <nav className="conteinerMenu">
        <ul className="nav__links">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Filtros</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
    </div>
  );
}