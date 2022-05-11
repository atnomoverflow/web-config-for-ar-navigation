export type User = {
    email: string;
    firstName?: string;
    lastName?: string;
    iat:number
    exp: number
};
export type AuthContextType = {
    user: User|null;
    setUser: React.Dispatch<User|null>;
    authTokens: any | null;
    setAuthTokens: React.Dispatch<any>;
    loginUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    logoutUser: () => void;
};
export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};