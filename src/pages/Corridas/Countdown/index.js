import React, { useState, useEffect } from "react";
import "./style.css";

import { parseISO, format, addHours } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import intervalToDuration from "date-fns/intervalToDuration";

export default function Countdown(props) {
  const [atrasado, setAtrasado] = useState(false);
  const calculateTimeLeft = () => {
    let timeLeft = {};
    const dataCorrida = addHours(new Date(props.data), 3);
    const difference = intervalToDuration({
      start: new Date(),
      end: dataCorrida,
    });

    timeLeft = {
      hours:
        String(difference.hours).length === 1
          ? String("0" + difference.hours)
          : String(difference.hours),
      minutes:
        String(difference.minutes).length === 1
          ? String("0" + difference.minutes)
          : String(difference.minutes),
      seconds:
        String(difference.seconds).length === 1
          ? String("0" + difference.seconds)
          : String(difference.seconds),
    };
    if (new Date().getTime() > addHours(new Date(props.data), 3).getTime()) {
      if (!atrasado) {
        setAtrasado(true);
      }
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <>
      <div className="conteiner-texto">
        <span className="text-inicio">Inicio :</span>
      </div>
      <div className={atrasado ? "sem-corrida" : "color"}>
        {timeLeft.hours + ":" + timeLeft.minutes + ":" + timeLeft.seconds}
      </div>
    </>
  );
}
