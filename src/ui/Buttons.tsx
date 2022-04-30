import { Book, Car, Table } from "phosphor-react";
import Link from "next/link";

export function Buttons() {
  return (
    <div className="flex justify-center text-center pt-10">
      <div className="pr-8">
        <button className="bg-gray-400 rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-20 transition">
          <Car size={62} />
        </button>
        <div className="text-xl pt-2 font-bold">Encomendar</div>
      </div>

      <div className="pr-8">
        <button className="bg-gray-400 rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-20 transition">
          <Link href={"/ReservarMesa"}>
            <Table size={62} />
          </Link>
        </button>
        <div className="text-xl pt-2 font-bold">Reservar Mesa</div>
      </div>

      <div>
        <button className="bg-gray-400 rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-20 transition">
          <Book size={62} />
        </button>
        <div className="text-xl pt-2 font-bold">Ver Menu</div>
      </div>
    </div>
  );
}
