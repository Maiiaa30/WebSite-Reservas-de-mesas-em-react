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

export default function SignIn({ providers, csrfToken }) {
  return (
    <div>
      <div>
        {Object.values(providers).map((provider) => {
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

SignIn.getInitialProps = async (context: any) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      location: "/",
    });
    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await getProviders(context),
    csrfToken: await getCsrfToken(context),
  };
};
