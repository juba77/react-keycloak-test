import React from "react";
import { useAuth } from "react-oidc-context";

const Login: React.FC = () => {

  const auth = useAuth();

  return (
  <div>
    <h1>Login page !</h1>
    <button onClick={() => void auth.signinRedirect()}>Log in</button>
  </div>

  );
};

export default Login;