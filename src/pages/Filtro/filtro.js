import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Input } from "reactstrap";
import "./style.css";

import Menu from "../Menu/index";
import Label from "reactstrap/lib/Label";

export default function Filtro() {
  return (
    <div>
      <Menu></Menu>
      <div className="conteiner-filtro">
        <Card className="card-filtro-pai">
          <CardHeader>
            <h1 className="texte-heder">Filtros</h1>
          </CardHeader>
          <div className="conteinee-card-filtro">
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Pistas:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Grade:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Sex:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Favorito:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Média Posição:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Top time:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>M. Pos:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>U. Tempo:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>M. Tempo:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Top Split:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>M. Split:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
            <div className="conteiner-label-imput">
              <Label style={{ color: "#adb7be" }}>Recup. Média:</Label>
              <Input placeholder="ola" className="imput"></Input>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
