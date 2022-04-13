import { Book, Car, Table } from "phosphor-react";

export function Buttons() {
  return (
    <div className="flex justify-center text-center pt-10">
      <div className="pr-8">
        <button className="bg-gray-500 text-gray-100 rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-20 transition">
          <Car size={62} />
        </button>
        <div className="text-xl pt-2 font-bold">Encomendar</div>
      </div>

      <div className="pr-8 ">
        <button className="bg-gray-500 text-gray-100 rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-20 transition">
          <Table size={62} />
        </button>
        <div className="text-xl pt-2 font-bold">Reservar Mesa</div>
      </div>

      <div>
        <button className="bg-gray-500 text-gray-100 rounded-full p-5 bg-opacity-10 shadow-md hover:bg-opacity-20 transition">
          <Book size={62} />
        </button>
        <div className="text-xl pt-2 font-bold">Ver Menu</div>
      </div>
    </div>
  );
}
