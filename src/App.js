import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SigninOidc from "./pages/SignInOidc";
import Home from "./pages/Home";
import SignoutOidc from "./pages/SignOutOidc";
import PrivateRoute from "./utils/protectedRoute";
import Login from "./pages/Login";
// Map for localStorage keys
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signout-oidc" component={SignoutOidc} />
        <Route path="/signin-oidc" component={SigninOidc} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
