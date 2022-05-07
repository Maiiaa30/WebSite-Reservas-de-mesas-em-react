import Image from "next/image";
import menu1 from "../../images/menu1.jpg";
import menu2 from "../../images/menu2.jpg";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: { menu1 },
    thumbnail: { menu1 },
  },
  {
    original: { menu2 },
    thumbnail: { menu2 },
  },
];

export default function SignIn() {
  return (
    <div>
      <div className="text-center mt-9">
        <Image src={menu1} priority alt="Menu1" />
        <Image src={menu2} priority alt="Menu2" />
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
