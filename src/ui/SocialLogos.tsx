import Link from "next/link";
import { FacebookLogo, InstagramLogo, User } from "phosphor-react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SocialLogos() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-end mt-3 mr-2 ">
      <button className="hover:scale-110 transition mr-1">
        <Link href="https://pt-pt.facebook.com/Nogueirabar/">
          <FacebookLogo size={39} weight="bold" />
        </Link>
      </button>

      <button className="hover:scale-110 transition mr-1">
        <Link href="https://www.instagram.com/nogueirabar.braga/">
          <InstagramLogo size={39} weight="bold" />
        </Link>
      </button>

      {/* {!session && (
        <div className="bg-base-color hover:bg-base-color2 hover:duration-300 flex rounded-lg shadow-md">
          <button
            className="flex justify-center items-center ml-3 mr-3"
            onClick={() => signIn()}
          >
            <User
              size={20}
              weight="bold"
              className="flex justify-center items-center"
            />
            <div className="flex">Entrar</div>
          </button>
        </div>
      )}
      {session && (
        <div className="bg-base-color hover:bg-base-color2 hover:duration-300 flex rounded-lg shadow-md">
          <button
            className="flex justify-center items-center ml-3 mr-3"
            onClick={() => signOut()}
          >
            <User
              size={20}
              weight="bold"
              className="flex justify-center items-center"
            />
            <div className="flex">Sair</div>
          </button>
        </div>
      )} */}
    </div>
  );
}
