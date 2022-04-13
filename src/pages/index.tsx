import type { NextPage } from "next";
import Image from "next/image";
import logo from "../images/logo.png";
import { Buttons } from "../ui/Buttons";
import { HorarioHud } from "../ui/HorarioHud";
import { SocialLogos } from "../ui/SocialLogos";
import { Info } from "phosphor-react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <SocialLogos />
      <div className="text-center mt-9">
        <Image
          height={200}
          width={200}
          src={logo}
          priority
          alt="Logo Nogueira Bar"
        />
      </div>
      <div className="flex items-center justify-center pt-10">
        <HorarioHud />
      </div>
      <Buttons />

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center rounded-lg shadow-md text-center mt-10 bg-gray-700 bg-opacity-10 hover:bg-gray-600 hover:scale-105 hover:transition hover:duration-700">
          <Link href={"/info/"} passHref>
            <button className="flex font-bold text-lg items-center justify-center w-48 h-9">
              <Info size={24} weight="bold" className="mr-1" />
              Sobre
            </button>
          </Link>
        </div>
      </div>

      <div>
        {!session && (
          <div>
            Sem Sessao <br />
            <button onClick={() => signOut}>Sign In</button>
          </div>
        )}
        {session && (
          <div>
            Logado com {session.user?.email} <br />
            UwU <br />
            <button onClick={() => signOut}>Sair</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
