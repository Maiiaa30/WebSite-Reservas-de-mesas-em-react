import Link from "next/link";
import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { useSession, signIn, signOut } from "next-auth/react";

export function SocialLogos() {
  const { data: session } = useSession();

  return (
    <div className="text-right mt-3 mr-2">
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

      <div className="">
        {!session && (
          <div>
            <button className="bg-gray-800" onClick={() => signIn()}>
              Sign In
            </button>
          </div>
        )}
        {session && (
          <div>
            {/* Logado com {session.user?.email} <br /> {session.user?.name}
              UwU <br /> */}
            <button onClick={() => signOut()}>Sair</button>
          </div>
        )}
      </div>
    </div>
  );
}
