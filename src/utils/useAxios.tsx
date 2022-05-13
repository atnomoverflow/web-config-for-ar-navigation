import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { User } from '../type';

const baseURL = 'http://127.0.0.1:8000';

const useAxios = () => {
    const context = useContext(AuthContext);
    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${context?.authTokens?.access_token}` }
    });

    axiosInstance.interceptors.request.use(async (req) => {
        const user: User = jwt_decode(context?.authTokens.access_token);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) return req;
        context?.logoutUser()
    });

    return axiosInstance;
};

export default useAxios;
