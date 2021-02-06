import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from "react-router-dom";

export default function Logout(props) {
    const [toHome, setToHome] = useState(false);
    const handleClick = () => {
        Cookies.remove('token'),
        Cookies.remove('refreshToken'),
        Cookies.remove('tokenType'),
        Cookies.remove('expiry'),
        setToHome(true)
    }

    return (
        <div className="logout-area">
            <button onClick={handleClick} className="logout">Logout</button>
            {toHome && <Redirect to="/" />}
        </div>
    )
}