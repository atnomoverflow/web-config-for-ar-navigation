import { store } from "./state";

export type User = {
    email: string;
    firstName?: string;
    lastName?: string;
    sub: string;
    iat: number;
    exp: number;
};
export type AuthContextType = {
    user: User | null;
    setUser: React.Dispatch<User | null>;
    authTokens: any | null;
    setAuthTokens: React.Dispatch<any>;
    loginUser: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    logoutUser: () => void;
};
export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};
export type BuildingCardProps = {
    name: string;
    adress: string;
    imageSrc: string;
    id: string;
    handleDelete:()=>void
};
export type Buidling = {
    name: string;
    adress: string;
    id: string;
    latitude: number;
    longitude: number;
};
export type  Action={
    type:string
    payload?:any;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;