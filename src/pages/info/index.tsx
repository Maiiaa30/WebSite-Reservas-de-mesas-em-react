import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { CaretLeft, MapPinLine, Phone, Clock } from "phosphor-react";
import image1 from "../../images/image1.png";

const Home: NextPage = () => {
  return (
    <div className="block mr-auto ml-auto max-w-6xl pr-2 pl-2 text-justify">
      <div className="pt-5 pl-5">
        <Link href={"/"} passHref>
          <CaretLeft
            size={32}
            weight="bold"
            className="bg-gray-800 rounded-full bg-opacity-10 hover:bg-opacity-80 transition "
          />
        </Link>
      </div>

      <div className="p-5">
        <div className="text-2xl mb-3 text-center">Nogueira Bar</div>
        <hr className="border border-solid rounded-sm" />
        <div className="mt-3 text-justify mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          placeat illo vel tenetur tempore, expedita dolorem obcaecati
          perferendis, delectus, amet doloremque repellendus ex sequi ipsum
          veritatis facere eos. Corporis, ipsa?
        </div>
        <Image
          height={386}
          width={578}
          src={image1}
          priority
          alt="Imagem 1"
          className="rounded-3xl shadow-lg"
        />

        <div className="text-xl font-bold mt-3">Nogueira Bar</div>
        <hr className="border border-solid rounded-sm mt-1" />

        <div className="flex mt-3">
          <div className="flex bg-black bg-opacity-50 rounded-full w-7 h-7 justify-center items-center">
            <MapPinLine size={22} weight="bold" />
          </div>
          <div className="flex pl-4 justify-center items-center">
            Rua dos carvalhos
          </div>
        </div>

        <div className="flex mt-3">
          <div className="flex bg-black bg-opacity-50 rounded-full w-7 h-7 justify-center items-center">
            <Phone size={22} weight="bold" />
          </div>
          <div className="flex pl-4 justify-center items-center">
            911 222 044
          </div>
        </div>

        <div className="flex mt-3">
          <div className="flex bg-black bg-opacity-50 rounded-full w-7 h-7 justify-center items-center">
            <Clock size={22} weight="bold" />
          </div>
          <div className="flex pl-4 justify-center items-center">
            Horario: <br />
            Segunda: Encerrado <br />
            Terça: 10:00 - 15:00, 18:00 - 00:00 <br />
            Quarta: 10:00 - 15:00, 18:00 - 00:00 <br />
            Quinta: 10:00 - 15:00, 18:00 - 00:00 <br />
            Sexta: 10:00 - 15:00, 18:00 - 02:00 <br />
            Sábado: 18:00 - 02:00 <br />
            Domingo: 18:00 - 00:00 <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
