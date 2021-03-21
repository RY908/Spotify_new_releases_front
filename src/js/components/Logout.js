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
            <button onClick={handleClick} className="logout">
                <img id="logout-icon" src="../img/icons/png/059-logout.png"/>
                <p>Logout</p>
            </button>
            {toHome && <Redirect to="/" />}
        </div>
    )
}