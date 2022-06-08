import Image from "next/image";
import menu1 from "../../images/menu1.jpg";
import menu2 from "../../images/menu2.jpg";

export default function Menu() {
  return (
    <div>
      <div className="text-center mt-9">
        <Image src={menu1} priority alt="Menu1" />
        <Image src={menu2} priority alt="Menu2" />
      </div>
    </div>
  );
}
