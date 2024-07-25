/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import {jwtDecode} from 'jwt-decode';


    export const isTokenExpired = (token) => {
        const decodedToken = jwtDecode(token);
        const expiryTime = decodedToken.exp * 1000; // Convert to milliseconds
        return expiryTime < Date.now();
    };

    export const getToken = () => {
        const token = localStorage.getItem('token');
        console.log('*** getToken response ***', token);
        if (token && !isTokenExpired(token)) {
        return token;
        }
        return null;
    };

    export const setToken = (token) => {
        console.log('*** saving token ***', token);
        localStorage.setItem('token', token);
    };

