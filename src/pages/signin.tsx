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
      <div>
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
      </div>

      <div>
        {/* Actually works */}
        <GoogleLoginButton onClick={() => signIn("google")}>
          <span>Entrar com Google</span>
        </GoogleLoginButton>
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
