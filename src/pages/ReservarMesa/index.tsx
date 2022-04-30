import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { SocialLogos } from "../../ui/SocialLogos";
import Image from "next/image";

export default function ReservarMesa() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  const [Pessoas, setPessoas] = useState("");
  const [Nome, setNome] = useState("");
  const [Data, setData] = useState("");
  const [Hora, setHora] = useState("");
  const [Numero, setNumero] = useState("");
  const [APIResponse, setAPIResponse] = useState(null);

  const logo = session?.user?.image;

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch("../api/Mesa");
    //   const json = await res.json();
    //   if (json.content) {
    //     setContent(json.content);
    //   }
    // };
    // fetchData();
  }, [session, APIResponse]);

  const readDB = async () => {
    try {
      const response = await fetch("../api/Mesa", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setAPIResponse(await response.json());
      if (response.status !== 200) {
        console.log("Algo nao deu certo");
      } else {
        console.log("form submetido com sucesso GET");
      }
    } catch (error) {
      console.log("Erro a ler da database", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = { Pessoas, Nome, Data, Hora, Numero };
    try {
      const response = await fetch("../api/Mesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("Algo nao deu certo");
      } else {
        resetForm();
        console.log("form submetido com sucesso");
      }
    } catch (error) {
      console.log("Aconteceu um erro a submeter", error);
    }
  };

  const resetForm = () => {
    setNome("");
    setPessoas("");
    setHora("");
    setData("");
    setNumero("");
  };

  if (!session) {
    return (
      <div>
        <SocialLogos />
        <div className="text-lg text-center">
          Precisas de estar logado para poderes reservar mesa
        </div>
      </div>
    );
  }

  const d = new Date();
  var dd = String(d.getDate()).padStart(2, "0");
  var mm = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = d.getFullYear();
  var newmm = String(d.getMonth() + 2).padStart(2, "0"); //January is 0!
  let mesmin = yyyy + "-" + mm + "-" + dd;
  let mesmax = yyyy + "-" + newmm + "-" + dd;

  return (
    <div>
      <div>
        Estas logado <br />
        {session.user?.name}
        <br />
        {session.user?.email}
        <br />
        <br />
        {/* {content} */}
      </div>

      <div>
        <Image
          height={50}
          width={50}
          src={logo}
          priority
          alt="Logo Da Pessoas"
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <label htmlFor="reserva-nome">Nome: </label>
        <input
          onChange={(e) => setNome(e.target.value)}
          type="text"
          className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
          placeholder="Nome"
        />
        <div className="pt-5">
          <label htmlFor="reserva-pessoas">Numero de telemovel: </label>
          <input
            onChange={(e) => setNumero(e.target.value)}
            type={"number"}
            className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
            placeholder="Numero de pessoas"
          />
        </div>
        <div className="pt-5">
          <label htmlFor="reserva-pessoas">Numero de pessoas: </label>
          <input
            onChange={(e) => setPessoas(e.target.value)}
            type={"number"}
            className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
            placeholder="Numero de pessoas"
          />
        </div>
        <div className="pt-5">
          <label htmlFor="reserva-data">Data: </label>
          <input
            onChange={(e) => setData(e.target.value)}
            type="date"
            min={mesmin}
            max={mesmax}
            className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
            // TODO: Colocar um calendario com os dias / ver se esta disponivel esse dia ou nao
          />
        </div>
        <div className="pt-5">
          <label htmlFor="reserva-hora">Hora: </label>
          <input
            onChange={(e) => setHora(e.target.value)}
            type={"time"}
            className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
            // TODO: Colocar um calendario com os dias / ver se esta disponivel esse dia ou nao
          />
        </div>
        <div className="pt-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <button
              type="submit"
              className="bg-gray-500 p-2 rounded-lg border-2 border-black text-gray-50 shadow-md"
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
