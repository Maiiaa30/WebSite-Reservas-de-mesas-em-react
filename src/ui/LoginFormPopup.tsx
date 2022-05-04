import { MouseEventHandler } from "react";
import Popup from "reactjs-popup";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

export function LoginFormPopup() {
  return (
    <div>
      <Popup trigger={<button>Login</button>} modal nested>
        {(close: MouseEventHandler<HTMLButtonElement> | undefined) => (
          <div className="text-md bg-gray-600 rounded-lg shadow-lg">
            <button
              className="cursor-pointer absolute block p-2 leading-5 right-2 top-2 bg-gray-500 rounded-full hover:scale-105 hover:bg-gray-600 transition shadow-md"
              onClick={close}
            >
              X
            </button>
            <div className="w-full border-b-1 text-center p-5 text-3xl font-bold">
              Entrar
            </div>
            <div className="w-full pt-5 pl-24 pr-24 pb-20 text-lg">
              <GoogleLoginButton onClick={() => alert("Hello")}>
                <span>Entrar com Google</span>
              </GoogleLoginButton>

              <div className="pt-2">
                <FacebookLoginButton onClick={() => alert("Hello")}>
                  <span>Entrar com Facebook</span>
                </FacebookLoginButton>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
