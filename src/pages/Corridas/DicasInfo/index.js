import React from "react";

import { Card, CardHeader, CardBody } from "reactstrap";
import Countdown from "../Countdown/index";

import "./style.css";

import trap1 from "../../../asserts/trap/1.png";
import trap2 from "../../../asserts/trap/2.png";
import trap3 from "../../../asserts/trap/3.png";
import trap4 from "../../../asserts/trap/4.png";
import trap5 from "../../../asserts/trap/5.png";
import trap6 from "../../../asserts/trap/6.png";

export default function Dicas(props) {
  const imagens = ["trap0", trap1, trap2, trap3, trap4, trap5, trap6];
  console.log("Dicas" + JSON.stringify(props.valores.Favoritos));
  return (
    <div className="conteinerDicas">
      <div className="conteinerCard">
        <Card className="card-dicas">
          <div className="conteinertitulo">
            <p class="titulo-card">Tips</p>
          </div>
          <div className="conteinerDicasDetalhes">
            <div className="conteinerTextoDicas">
              <p className="textoDicas">Tips Premium</p>
              <p className="textoDicas">Post Pick</p>
            </div>
            <div className="conteinerTodasImagens">
              {props.valores.Favoritos ? (
                <div className="conteinerImagens">
                  <div className="imagen">
                    <img
                      src={imagens[props.valores.Favoritos[0]]}
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  <div className="imagen">
                    <img
                      src={imagens[props.valores.Favoritos[1]]}
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  <div className="imagen">
                    <img
                      src={imagens[props.valores.Favoritos[2]]}
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  <div className="imagen">
                    <img
                      src={imagens[props.valores.Favoritos[3]]}
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  <div className="imagen">
                    <img
                      src={imagens[props.valores.Favoritos[4]]}
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  <div className="imagen">
                    {props.valores.Favoritos[5] !== undefined ? (
                      <img
                        src={imagens[props.valores.Favoritos[5]]}
                        alt={""}
                        width={20}
                        height={20}
                      ></img>
                    ) : null}
                  </div>
                  {/* <h3>{props.valores.PostPick ? props.valores.PostPick : null}</h3>
          <h3>{props.valores.PostPick ? props.valores.PostPick : null}</h3> */}
                </div>
              ) : null}
              {props.valores.PostPick ? (
                <div className="conteinerImagens">
                  <div className="imagen">
                    <img
                      src={
                        imagens[
                          parseInt(
                            new String(props.valores.PostPick).substring(0)
                          )
                        ]
                      }
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  <div className="imagen">
                    <img
                      src={
                        imagens[
                          parseInt(
                            new String(props.valores.PostPick).substring(2)
                          )
                        ]
                      }
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  <div className="imagen">
                    <img
                      src={
                        imagens[
                          parseInt(
                            new String(props.valores.PostPick).substring(4)
                          )
                        ]
                      }
                      alt={""}
                      width={20}
                      height={20}
                    ></img>
                  </div>
                  {/* <h3>{props.valores.PostPick ? props.valores.PostPick : null}</h3>
            <h3>{props.valores.PostPick ? props.valores.PostPick : null}</h3> */}
                </div>
              ) : null}
            </div>
          </div>
        </Card>
      </div>
      <div className="conteinerCard">
        <Card className="card-dicas">
          <div className="conteinertitulo">
            <p class="lbl-card">Corrida</p>
          </div>
          <div className="conteinerCorrida">
            <h3 className="textoTrackDicas">
              {props.valores.TrackName ? props.valores.HoraCorridaBR : null}
            </h3>
            <h3 className="textoTrackDicas">
              {props.valores.TrackName ? props.valores.TrackName : null}
            </h3>
            <h3 className="textoGradeDicas">
              {props.valores.TrackName ? props.valores.Grade : null}
            </h3>
            <h3 className="textoGradeDicas">
              {props.valores.TrackName ? props.valores.Dis + "m" : null}
            </h3>
          </div>
          {/* <div className="conteinerRelogio">
            <Countdown
              time={props.valores.HoraCorridaBR}
              data={props.valores.DataCorrida}
            ></Countdown>
          </div> */}
        </Card>
      </div>

      {/* <div className="conteinerCard">
        <Card className="card-dicas">
          <div className="conteinertitulo">
            <p class="lbl-card">Informações do Card</p>
          </div>
          <div className="conteinerCorrida">
            <h3 className="textoTrackDicas">
              {props.valores.TrackName ? props.valores.TrackName : null}
            </h3>
            <h3 className="textoGradeDicas">
              {props.valores.TrackName ? props.valores.Grade : null}
            </h3>
            <h3 className="textoGradeDicas">
              {props.valores.TrackName ? props.valores.Dis + "m" : null}
            </h3>
          </div>
        </Card>
      </div> */}
      {/* <Card className="card-dicas">
        <h3>{props.valores.PostPick ? "Post" : null}</h3>
      </Card> */}
    </div>
  );
}
