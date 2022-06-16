import Image from "next/image";
import menu1 from "../../images/menu1.jpg";
import menu2 from "../../images/menu2.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Menu() {
  const photo_menu1 = require("../../images/menu1.jpg");
  const photo_menu2 = require("../../images/menu2.jpg");

  return (
    <div>
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
