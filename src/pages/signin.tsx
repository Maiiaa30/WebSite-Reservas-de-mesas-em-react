import { NextPageContext } from "next";
import nextAuth from "next-auth";
import {
  getProviders,
  getSession,
  getCsrfToken,
  signIn,
} from "next-auth/react";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

export default function SignIn({ providers }: { providers: any }) {
  return (
    <div>
      {/* <div>
        {Object.values(providers).map((provider: any) => {
          console.log(provider);
          if (provider.name === "Email") {
            return;
          }
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Login width {provider.name}
              </button>
            </div>
          );
        })}
      </div> */}

      {/* <div className="pt-5 pl-5 flex">
        <Link href={"/"} passHref>
          <CaretLeft
            size={32}
            weight="bold"
            className="bg-gray-800 rounded-full bg-opacity-10 hover:bg-opacity-80 transition "
          />
        </Link>
      </div> */}

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-col bg-white shadow-md px-16 sm:px-6 md:px-8 lg:px-10 py-10 rounded-3xl w-50 max-w-md">
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800 pb-2">
            Login
          </div>
          <div>
            <GoogleLoginButton onClick={() => signIn("google")}>
              <span>Entrar com Google</span>
            </GoogleLoginButton>
            <div className="pt-2">
              <FacebookLoginButton onClick={() => signIn("facebook")}>
                <span>Entrar com Facebook</span>
              </FacebookLoginButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession({ req: context.req });
  if (session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
