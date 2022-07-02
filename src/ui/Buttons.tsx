import { Book, Table } from "phosphor-react";
import Link from "next/link";

export function Buttons() {
  return (
    <div className="flex justify-center text-center md:pt-10 pt-8 sm:5">
      {/* <div className="pr-8">
        <button className="bg-base-color rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-50 transition">
          <Car size={62} />
        </button>
        <div className="text-xl pt-2 font-bold">Encomendar</div>
      </div> */}

      <div className="pr-8">
        <button className="bg-base-color rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-50 transition">
          <Table size={55} />
        </button>
        <div className="text-xl pt-2 font-bold">Horario</div>
      </div>

      <div>
        <button className="bg-base-color rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-50 transition">
          <Link href={"/Menu"}>
            <Book size={55} />
          </Link>
        </button>
        <div className="text-xl pt-2 font-bold">Ver Menu</div>
      </div>
    </div>
  );
}
