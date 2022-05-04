import { MouseEventHandler } from "react";
import Popup from "reactjs-popup";

function Timer() {
  const d = new Date();
  let hora = d.getHours();

  var days = [
    "Domingo",
    "Segunda",
    "Terca",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];

  let day = days[d.getDay()];
  let mensagem: any;
  let mensagem2: any;

  if (day == "Terca" || day == "Quarta" || day == "Quinta" || day == "Sexta") {
    // Horario semanal
    if (hora >= 10 && hora <= 15) {
      mensagem = "Aberto";
      mensagem2 = "10:00 - 15:00";
    } else if (hora < 10) {
      mensagem = "Abre hoje as 10:00";
    } else if (hora >= 18 && hora <= 24) {
      mensagem = "Aberto";
      mensagem2 = "18:00 - 00:00";
    } else if (hora < 18) {
      mensagem = "Abre hoje as 18:00";
    } else {
      mensagem = "Fechado";
    }
  } else if (day == "Segunda") {
    // Horario de Segunda
    mensagem = "Fechado";
  } else if (day == "Domingo") {
    // Horario de Domingo
    if (hora >= 18 && hora <= 24) {
      mensagem = "Aberto";
      mensagem2 = "18:00 - 00:00";
    } else if (hora < 18) {
      mensagem = "Abre hoje as 18:00";
    } else {
      mensagem = "Fechado";
    }
  } else if (day == "Sabado") {
    // Horario de Sabado
    if (hora >= 18 && hora >= 2) {
      mensagem = "Aberto";
      mensagem2 = "18:00 - 02:00";
    } else if (hora < 18) {
      mensagem = "Abre hoje as 18:00";
    }
  } else {
    mensagem = "Fechado";
  }

  if (mensagem.includes("Abre hoje")) {
    return (
      <div className="border-2 border-solid border-gray-800 border-opacity-90 text-center justify-center p-1.5 rounded-lg">
        <div className="text-xl border-2 border-solid border-gray-800 text-center justify-center border-opacity-90 rounded-lg px-5 py-4 pl-5 pr-5 font-bold">
          {mensagem} <br />
          {mensagem2}
        </div>
      </div>
    );
  } else if (mensagem.includes("Aberto")) {
    return (
      <div className="border-2 border-solid border-gray-800 border-opacity-90 text-center justify-center p-1.5 rounded-lg">
        <div className="text-xl border-2 border-solid border-gray-800 text-center justify-center border-opacity-90 rounded-lg px-5 py-4 pl-5 pr-5 font-bold">
          {mensagem} <br />
          {mensagem2}
        </div>
      </div>
    );
  } else {
    return (
      <div className="border-2 border-solid border-gray-800 border-opacity-90 text-center justify-center p-1.5 rounded-lg">
        <div className="text-xl border-2 border-solid border-gray-800 text-center justify-center border-opacity-90 rounded-lg px-5 py-4 pl-5 pr-5 font-bold">
          {mensagem}
        </div>
      </div>
    );
  }
}

export function HorarioHud() {
  return (
    <div>
      <Popup
        trigger={
          <button>
            <Timer />
          </button>
        }
        modal
        nested
      >
        {(close: MouseEventHandler<HTMLButtonElement> | undefined) => (
          <div className="text-md bg-gray-600 rounded-lg shadow-lg">
            <button
              className="cursor-pointer absolute block p-2 leading-5 right-2 top-2 bg-gray-500 rounded-full hover:scale-105 hover:bg-gray-600 transition shadow-md"
              onClick={close}
            >
              X
            </button>
            <div className="w-full border-b-1 text-center p-5 text-3xl font-bold">
              Horario
            </div>
            <div className="w-full pt-5 pl-16 pr-16 pb-10 text-lg">
              Segunda: Encerrado <br />
              Terça: 10:00 - 15:00, 18:00 - 00:00 <br />
              Quarta: 10:00 - 15:00, 18:00 - 00:00 <br />
              Quinta: 10:00 - 15:00, 18:00 - 00:00 <br />
              Sexta: 10:00 - 15:00, 18:00 - 02:00 <br />
              Sábado: 18:00 - 02:00 <br />
              Domingo: 18:00 - 00:00 <br />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
