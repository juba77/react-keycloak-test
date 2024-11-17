import React from "react";
import { useAuth } from "react-oidc-context";

const Publisher: React.FC = () => {

  const auth = useAuth();

  return (
    <div>
      <h1>Publisher page !</h1>
      <button onClick={() => void auth.signoutRedirect()}>Log out</button>
    </div>
  
    );
};

export default Publisher;
