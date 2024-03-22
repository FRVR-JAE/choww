import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useCreateMyUser } from "../api/MyUserApi";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children}: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirecturi = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirecturi) {
    throw new Error("unable to initialise auth")
  }

  const onRedirectCallback = (appState?: AppState, user?: User  ) => {
    navigate("/auth-callback")
  }

  return (
    <Auth0Provider  domain={domain}  clientId={clientId} authorizationParams={{
        redirect_uri: redirecturi,
    }}
    onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate