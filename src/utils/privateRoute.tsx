import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { ProtectedRouteProps } from "../type";



export default function ProtectedRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
    const authContext=useContext(AuthContext)
          const isAuthenticated=!!authContext?.authTokens ? true : false

    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to={ authenticationPath } />;
    }
}
