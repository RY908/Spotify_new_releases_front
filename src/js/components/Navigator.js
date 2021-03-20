import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Guide from "./Guide";
import Logout from "./Logout";

export default function Navigator(props) {
    const [page, setPage] = useState(props.page)

    const handleClick = (e) => {
        props.onClick(e)
    }

    return (
        <div className="navigator">
            {page === "userpage" ?
                <div className="navi-container"> 
                    <Guide />
                    <Link to ="/setting" id="to-setting">
                        <img id="settings-icon" src="../img/icons/png/017-settings.png"/>
                        setting
                    </Link>
                    <Logout />
                    {!props.isBtnHide && <div className="delete-button-div"><button className="delete-button" onClick={handleClick}>Don't add tracks by selected artists</button></div>}
                </div>
                :
                <div className="navi-container"> 
                    <button onClick={handleClick} id="back">
                        <img id="home-icon" src="../img/icons/png/006-home.png"></img>
                        Back
                    </button>
                    <Logout />
                </div>
            }
        </div>
    );

}
