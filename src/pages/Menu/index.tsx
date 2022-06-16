import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CaretLeft } from "phosphor-react";

export default function Menu() {
  const photo_menu1 = require("../../images/menu1.jpg");
  const photo_menu2 = require("../../images/menu2.jpg");

  return (
    <div>
      <div className="pt-5 pl-5">
        <Link href={"/"} passHref>
          <CaretLeft
            size={32}
            weight="bold"
            className="bg-gray-800 rounded-full bg-opacity-10 hover:bg-opacity-80 transition "
          />
        </Link>
      </div>
      <div className="text-center mt-9">
        <Zoom>
          <Image alt="Menu1" src={photo_menu1} />
        </Zoom>
        <Zoom>
          <Image alt="Menu2" src={photo_menu2} />
        </Zoom>
      </div>
    </div>
  );
}
