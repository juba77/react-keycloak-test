import React, { FC, ReactNode, useEffect } from "react";
import { AuthProvider as OIDCAuthProvider, useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

const oidcConfig = {
    authority: "http://localhost:8080/realms/PocCar",
    client_id: "react-client",
    redirect_uri: "http://localhost:3000",
    post_logout_redirect_uri: "http://localhost:3000",
    automaticSilentRenew: true,
};

interface Props {
  children: ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return <OIDCAuthProvider {...oidcConfig}>{children}</OIDCAuthProvider>;
};

export const AuthRedirect: React.FC = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (auth.isLoading) return;

    if (!auth.isAuthenticated) {
      console.log("User not authenticated -> Redirect to login");
      navigate("/");
      return;
    }
    
    else {

      const user = auth.user?.profile.preferred_username; 
      
      if (user === "publisher") {
        console.log('publisher user -> go to publisher page')
        navigate("/publisher");
      } 
      
      else if (user === "viewer") {
        console.log('viewer user -> go to publisher viewer')
        navigate("/viewer");
      } 
      
      else {
        console.log('error : other user -> logout and go to login')
        console.log(auth.user)
        navigate("/");
      }

    }
  }, [auth, navigate]);

  return null;

};
