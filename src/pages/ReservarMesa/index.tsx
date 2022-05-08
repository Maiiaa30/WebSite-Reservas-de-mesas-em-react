import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { SocialLogos } from "../../ui/SocialLogos";
import Image from "next/image";
import Link from "next/link";

export default function ReservarMesa() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  const [Pessoas, setPessoas] = useState("");
  const [Nome, setNome] = useState("");
  const [Data, setData] = useState("");
  const [Hora, setHora] = useState("");
  const [Numero, setNumero] = useState("");
  const [APIResponse, setAPIResponse] = useState(null);

  const logo = session?.user?.image as string;

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
        alert("Reserva submetida com sucesso");
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
        <div className="text-xl pt-10 text-center font-bold">
          Precisas de estar logado para poderes reservar mesa
        </div>
      </div>
    );
  }

  const d = new Date();
  var dd = String(d.getDate()).padStart(2, "0");
  var mm = String(d.getMonth() + 1).padStart(2, "0");
  var yyyy = d.getFullYear();
  var newmm = String(d.getMonth() + 2).padStart(2, "0");
  let mesmin = yyyy + "-" + mm + "-" + dd;
  let mesmax = yyyy + "-" + newmm + "-" + dd;

  return (
    <div>
      <div className="flex justify-end p-2">
        <label className="flex justify-center items-center pr-1 capitalize">
          {session.user?.name}
        </label>
        <Image
          height={50}
          width={50}
          src={logo}
          priority
          alt="Logo Da Pessoa"
          className="rounded-full"
        />
      </div>
      <div className="text-center mt-32 flex flex-col items-center justify-center ">
        <label htmlFor="" className="font-bold text-2xl pb-2">
          Reservar Mesa
        </label>
        <div className=" flex flex-col bg-white shadow-md px-16 sm:px-6 md:px-8 lg:px-10 py-10 rounded-3xl w-50 max-w-md text-justify">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="reserva-nome">Nome: </label>
            <input
              onChange={(e) => setNome(e.target.value)}
              type="text"
              className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
              placeholder="Nome"
              required
            />
            <div className="pt-5">
              <label htmlFor="reserva-pessoas">Numero de telemovel: </label>
              <input
                onChange={(e) => setNumero(e.target.value)}
                type={"number"}
                className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
                placeholder="Numero de pessoas"
                required
              />
            </div>
            <div className="pt-5">
              <label htmlFor="reserva-pessoas">Numero de pessoas: </label>
              <input
                onChange={(e) => setPessoas(e.target.value)}
                type={"number"}
                className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
                placeholder="Numero de pessoas"
                required
              />
            </div>
            <div className="pt-5">
              <label htmlFor="reserva-data">Data: </label>
              <input
                onChange={(e) => setData(e.target.value)}
                type="date"
                required
                min={mesmin}
                max={mesmax}
                className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
                // TODO: Colocar um calendario com os dias / ver se esta disponivel esse dia ou nao
              />
            </div>
            <div className="pt-5">
              <label htmlFor="reserva-hora">Hora: </label>
              <input
                required
                onChange={(e) => setHora(e.target.value)}
                type={"time"}
                className="rounded-lg bg-gray-500 text-gray-50 border-2 border-black p-2 hover:bg-gray-600 hover:transition hover:delay-100 shadow-md"
                // TODO: Colocar um calendario com os dias / ver se esta disponivel esse dia ou nao
              />
            </div>
            <div className="pt-5 text-center">
              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-700 delay-75 transition p-2 rounded-lg border-2 border-black text-gray-50 shadow-md"
              >
                Reservar
              </button>
            </div>
          </form>
        </div>
        <label htmlFor="" className="hover:underline delay-700 pt-2 text-base">
          <Link href={"/"} passHref>
            Voltar
          </Link>
        </label>
      </div>
    </div>
  );
}
