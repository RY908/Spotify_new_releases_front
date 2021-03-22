import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Guide from "./Guide";
import Logout from "./Logout";
import Toggle from "./Toggle";

export default function Navigator(props) {
    const [page, setPage] = useState(props.page)

    const handleClick = (e) => {
        props.onClick(e)
    }

    const handleChange = () => {
        props.onChange()
    }

    return (
        <div className="navigator">
            {page === "userpage" ?
                <div className="navi-container"> 
                    <Toggle className="show-followings" name="show-followings" explanation="Show following artists" onChange={handleChange} flag={props.flag} />
                    <Guide />
                    <Link to ="/setting" id="to-setting">
                        <img id="settings-icon" src="../img/icons/png/017-settings.png"/>
                        <p>Settings</p>
                    </Link>
                    <Logout />
                    {!props.isBtnHide && <div className="delete-button-div"><button className="delete-button" onClick={handleClick}>Remove</button></div>}
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
