import React, {useEffect} from "react";
import Cookies from 'js-cookie';
import Header from "../components/Header";
import Popup from "../components/Popup";
import Login from "../components/Login";

export default function LoginPage() {
    useEffect(() => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('tokenType');
        Cookies.remove('expiry');
   })
    return (
        <div className="login-page">
            <Header />
            <h1 className="explanation">
                Do you want a perfect playlist? 
            </h1>
            <Popup />
            <Login />
        </div>
    );
}