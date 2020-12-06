import React, { useState, useEffect } from "react";
import "./style.css";

import track from "../../asserts/predicator/track1.png";

import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import { Button } from "reactstrap";

export default function Predicator(props) {
  const [runRabbit, setRunRabbit] = useState("");
  const [rundog1, setRunDog1] = useState("");
  const [rundog2, setRunDog2] = useState("");
  const [rundog3, setRunDog3] = useState("");
  const [rundog4, setRunDog4] = useState("");
  const [rundog5, setRunDog5] = useState("");
  const [rundog6, setRunDog6] = useState("");
  const [clickRun, setClickRun] = useState(false);
  const [listDog, setListDogs] = useState([]);

  useEffect(() => {
    setListDogs(props.listGalgos["dogs"]);
    console.log(listDog);
  }, [listDog, props.listGalgos]);

  useEffect(() => {
    if (clickRun && listDog) {
      // for (const key in listDog) {
      //   dog(key, listDog[key]["analitico"]["overall"]);
      //   console.log(key + listDog[key]["analitico"]["overall"]);
      // }

      dog1(listDog);
      dog2(listDog);
      dog3(listDog);
      dog4(listDog);
      dog5(listDog);
      dog6(listDog);
      var distanciaRabbit = "980";
      let styleSheet = document.styleSheets[0];
      let animationName = "runRabbit";

      let keyfram = `@keyframes ${animationName} {
        0% {
          left: 220px;
        }
      100% {
        left: ${distanciaRabbit}px;
      }
    }`;

      styleSheet.insertRule(keyfram, styleSheet.cssRules.length);

      setRunRabbit(animationName);
    }
  }, [clickRun, listDog]);

  // const dog = (index, valor) => {
  //   console.log(valor);
  //   let styleSheet = document.styleSheets[0];
  //   let animationNameDog = "dog"+index;
  //   let keyframdog1 = `@keyframes ${animationNameDog} {
  //   0% {
  //     left: 120px;
  //   }
  //   100% {
  //   }
  // }`;
  //   styleSheet.insertRule(keyframdog1, styleSheet.cssRules.length);
  //   setRunDog1(animationNameDog);
  // };

  const dog1 = (list) => {
    console.log(list);
    let styleSheet = document.styleSheets[0];
    let animationNameDog1 = "dog1";
    let keyframdog1 = `@keyframes ${animationNameDog1} {
    0% {
      left: 120px;
    }
    100% {
      left: ${list[0]["analitico"]["overall"]}0px;
    }
  }`;
    styleSheet.insertRule(keyframdog1, styleSheet.cssRules.length);
    setRunDog1(animationNameDog1);
  };

  const dog2 = (list) => {
    let teste = "580";
    let styleSheet = document.styleSheets[0];
    let animationNameDog2 = "dog2";
    let keyframdog2 = `@keyframes ${animationNameDog2} {
    0% {
      left: 120px;
    }
    100% {
      left: ${list[1]["analitico"]["overall"]}0px;
    }
  }`;
    styleSheet.insertRule(keyframdog2, styleSheet.cssRules.length);
    setRunDog2(animationNameDog2);
  };

  const dog3 = (list) => {
    let teste = "780";
    let styleSheet = document.styleSheets[0];
    let animationNameDog3 = "dog3";
    let keyframdog3 = `@keyframes ${animationNameDog3} {
    0% {
      left: 120px;
    }
    100% {
      left: ${list[2]["analitico"]["overall"]}0px;
    }
  }`;
    styleSheet.insertRule(keyframdog3, styleSheet.cssRules.length);
    setRunDog3(animationNameDog3);
  };

  const dog4 = (list) => {
    let teste = "480";
    let styleSheet = document.styleSheets[0];
    let animationNameDog4 = "dog4";
    let keyframdog4 = `@keyframes ${animationNameDog4} {
    0% {
      left: 120px;
    }
    100% {
      left: ${list[3]["analitico"]["overall"]}0px;
    }
  }`;
    styleSheet.insertRule(keyframdog4, styleSheet.cssRules.length);
    setRunDog4(animationNameDog4);
  };

  const dog5 = (list) => {
    let teste = "580";
    let styleSheet = document.styleSheets[0];
    let animationNameDog5 = "dog5";
    let keyframdog5 = `@keyframes ${animationNameDog5} {
    0% {
      left: 120px;
    }
    100% {
      left: ${list[4]["analitico"]["overall"]}0px;
    }
  }`;
    styleSheet.insertRule(keyframdog5, styleSheet.cssRules.length);
    setRunDog5(animationNameDog5);
  };

  const dog6 = (list) => {
    let teste = "680";
    let styleSheet = document.styleSheets[0];
    let animationNameDog6 = "dog6";
    let keyframdog6 = `@keyframes ${animationNameDog6} {
    0% {
      left: 120px;
    }
    100% {
      left: ${list[5]["analitico"]["overall"]}0px;
    }
  }`;
    styleSheet.insertRule(keyframdog6, styleSheet.cssRules.length);
    setRunDog6(animationNameDog6);
  };

  return (
    <div className="conteiner-predicator">
      <Card>
        <CardHeader title="São baseadas no Rating e no mercado"></CardHeader>
        <div className="coteiner-btn">
          <Button className="bt-run" onClick={() => setClickRun(true)}>
            Simular
          </Button>
        </div>
        <div className="track-image">
          <img src={track} alt=""></img>
          <div
            className="rabbit"
            style={{
              animation: `${runRabbit} 4s linear forwards `,
            }}
          ></div>
          <div
            className="dog"
            style={{
              top: "530px",
              animation: `${rundog1} 7s linear forwards`,
            }}
          ></div>
          <div
            className="dog"
            style={{
              top: "625px",
              animation: `${rundog2} 7s linear forwards`,
            }}
          ></div>
          <div
            className="dog"
            style={{
              top: "715px",
              animation: `${rundog3} 7s linear forwards`,
            }}
          ></div>
          <div
            className="dog"
            style={{
              top: "815px",
              animation: `${rundog4} 7s linear forwards`,
            }}
          ></div>
          <div
            className="dog"
            style={{
              top: "910px",
              animation: `${rundog5} 7s linear forwards`,
            }}
          ></div>
          <div
            className="dog"
            style={{
              top: "1005px",
              animation: `${rundog6} 7s linear forwards`,
            }}
          ></div>
        </div>
      </Card>
    </div>
  );
}
