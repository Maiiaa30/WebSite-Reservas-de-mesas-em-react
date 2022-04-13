import Link from "next/link";
import { FacebookLogo, InstagramLogo } from "phosphor-react";

export function SocialLogos() {
  return (
    <div className="text-right mt-3 mr-2">
      <button className="hover:scale-110 transition mr-1">
        <Link href="https://google.pt">
          <FacebookLogo size={39} weight="bold" />
        </Link>
      </button>

      <button className="hover:scale-110 transition">
        <Link href="https://google.pt">
          <InstagramLogo size={39} weight="bold" />
        </Link>
      </button>
    </div>
  );
}
