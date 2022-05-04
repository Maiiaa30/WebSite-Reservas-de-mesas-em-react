import Link from "next/link";
import { FacebookLogo, InstagramLogo, User } from "phosphor-react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SocialLogos() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-end mt-3 mr-2 ">
      {!session && (
        <button
          className="mr-1 hover:scale-110 transition"
          onClick={() => signIn()}
        >
          <User size={39} weight="bold" />
        </button>
      )}
      {session && (
        <button
          onClick={() => signOut()}
          className="mr-1 hover:scale-110 transition"
        >
          <div className="flex justify-center">sair</div>
          <User size={30} weight="bold" className="flex justify-start" />
        </button>
      )}
      <button className="hover:scale-110 transition mr-1">
        <Link href="https://google.pt">
          <FacebookLogo size={39} weight="bold" />
        </Link>
      </button>

      <button className="hover:scale-110 transition mr-1">
        <Link href="https://google.pt">
          <InstagramLogo size={39} weight="bold" />
        </Link>
      </button>
    </div>
  );
}
