import { Phone, MapPinLine } from "phosphor-react";

export function Rodape() {
  return (
    <div className="fixed bottom-5 w-full flex justify-center text-center">
      <div className="font-bold">
        <div className="flex justify-center">
          <Phone size={22} weight="bold" />
        </div>
        911 222 044
      </div>

      <div className="pl-5 font-bold">
        <div className="flex justify-center">
          <MapPinLine size={22} weight="bold" />
        </div>
        Rua dos carvalhos
      </div>
    </div>
  );
}
