import { Phone, MapPinLine } from "phosphor-react";

export function Rodape() {
  return (
    <div className="fixed bottom-5 w-full flex justify-center text-center">
      <div className="font-bold">
        <div className="flex justify-center">
          <Phone size={22} weight="bold" />
        </div>
        253 339 321 | 962 371 807
      </div>

      <div className="pl-5 font-bold">
        <div className="flex justify-center">
          <MapPinLine size={22} weight="bold" />
        </div>
        Av. de Sequeira, 4705-629 Braga
      </div>
    </div>
  );
}
