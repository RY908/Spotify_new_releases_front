import React, { useEffect, useState } from 'react';
import { Redirect, Link, useHistory } from "react-router-dom";
import Header from "./Header";
import Logout from "./Logout";

export default function Setting(props) {
    const history = useHistory();
    const [redirect, setRedirect] = useState("");
    const [remix, setRemix] = useState(false);
    const [acoustic, setAcoustic] = useState(false);
    const [saved, setSaved] = useState(false);
    const settingUri = "https://api.newreleases.tk/api/setting";
    const saveUri = "https://api.newreleases.tk/api/setting/save";

    useEffect(() => {
        fetch(settingUri, {credentials: "include"})
            .then(response => response.json())
            .then((json) => {
		console.log(json)
                setRemix(json.ifRemixAdd)
                setAcoustic(json.ifAcousticAdd)
                setRedirect(json.Result)
            })
    }, []);

    const handleSaveClick = () => {
        fetch(saveUri, {
            method: "POST",
            credentials: "include",
            headers: {
                // "Content-Type": "application/json"
            },
            body: JSON.stringify({"ifRemixAdd": remix, "ifAcousticAdd": acoustic})
        }).then(response => response.json())
            .then((json) => {
                if (json.result === "success") {
                    setSaved(true);
                }})
    }

    return (
        <div className="page">
            {redirect === "redirect" ? 
                (<div>
                <Redirect to="/" />
                </div>) 
                : 
                (<div className="setting-page">
                    <Header />
                    <div className="navi-container"> 
                        <button onClick={() => history.goBack()} id="back">
                            <img id="home-icon" src="../img/icons/png/006-home.png"></img>
                            Back
                        </button>
                        <Logout />
                    </div>
                    <div className="setting-explanation">
                        You can edit whether you want remix tracks or acoustic tracks in your playlist here. <br/>
                    </div>
                    <div className="remix">
                        <p id="remix">Remix　{remix ? 'ON' : 'OFF'}　</p>
                        <div className="remix-switch">
                            <input id="remix-toggle" className="toggle-input" type='checkbox' onChange={() => {setRemix(!remix); setSaved(false)}} checked={remix} />
                            <label id="remix-toggle-label" htmlFor="remix-toggle" className="toggle-label"/>
                        </div>
                    </div>
                    <p id="remix-off-explanation">
                        If you set remix off, the application will remove tracks named "(track name)- Remix".
                    </p>
                    <div className="acoustic">
                        <p id="acoustic">Acoustic {acoustic ? 'ON' : 'OFF'} </p>
                        <div className="acoustic-switch">
                            <input id="acoustic-toggle" className="toggle-input" type='checkbox' onChange={() => {setAcoustic(!acoustic); setSaved(false)}} checked={acoustic} />
                            <label id="acoustic-toggle-label" htmlFor="acoustic-toggle" className="toggle-label" />
                        </div>
                    </div>
                    <p id="acoustic-off-explanation">
                    If you set acoustic off, the application will remove tracks named "(track name) - Acoustic".
                    </p>
                    <div className="save">
                        <button type="button" onClick={handleSaveClick}>Save</button> 
                    </div>
                    {saved ? <p id="saved">saved</p> : <p></p>}
                    <div className="footer">Icons in navigation bar made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>)
            }
        </div>
    )

}
