import React from "react";
import { useAuth } from "react-oidc-context";

const Viewer: React.FC = () => {

  const auth = useAuth();

  return (
    <div>
      <h1>Viewer page !</h1>
      <button onClick={() => void auth.signoutRedirect()}>Log out</button>
    </div>
  
    );
};

export default Viewer;