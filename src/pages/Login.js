import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "oidc-react";

function Login() {
  const { userData, signIn } = useAuth();
  const login = async () => {
    await signIn();
  };
  return userData ? (
    <Redirect to={"/"} />
  ) : (
    <div>
      <button onClick={async () => await login()}>Login</button>
    </div>
  );
}

export default Login;
