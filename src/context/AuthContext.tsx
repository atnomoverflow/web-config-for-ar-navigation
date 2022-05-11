import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {AuthContextType, User} from '../type'

const AuthContext = createContext<AuthContextType|null>(null);

export default AuthContext;

type Props = {
    children?: React.ReactNode;
};
export const AuthProvider: React.FC<Props> = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => {
        let token = localStorage.getItem('authTokens');
        if (typeof token === 'string') {
            return JSON.parse(token);
        }
        return null;
    });
    let [user, setUser] = useState(() => {
        let token = localStorage.getItem('authTokens');
        if (typeof token === 'string') {
            return jwt_decode(token)as User;
        }
        return null;
    });
    let [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    let loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let loginData = new FormData(e.currentTarget);
        let response = await fetch('http://127.0.0.1:8000/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loginData.get('email'), password: loginData.get('password') })
        });
        let data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
        } else {
            alert('Something went wrong!');
        }
    };

    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
    };

    let contextData: AuthContextType = {
        user: user,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        setUser: setUser,
        loginUser: loginUser,
        logoutUser: logoutUser
    };

    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

    return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};
