import React from "react";
import { useHistory, useLocation, useEffect } from "react-router-dom";

export default function Header(props) {
    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {
        history.goBack();
    }
    return (
        <header>
            <div className="header-container">
                {location.pathname === "/setting" ? 
                    <img className="logo" id="setting-header" src="../img/logo.png" onClick={handleClick}/>
                    :
                    <img className="logo" src="../img/logo.png" ></img>
                }
            </div>
        </header>
    );
}