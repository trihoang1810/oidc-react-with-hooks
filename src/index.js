import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "oidc-react";
const oidcConfig = {
  onSignIn: () => {
    // Redirect?
    console.log("onSignIn");
  },
  authority: "https://authenticationserver20220111094343.azurewebsites.net",
  clientId: "react-client",
  redirectUri: "http://localhost:3000/signin-oidc",
  scope: "openid profile native-client-scope",
  responseType: "id_token token",
  postLogoutRedirectUri: "http://localhost:3000/signout-oidc",
};
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
