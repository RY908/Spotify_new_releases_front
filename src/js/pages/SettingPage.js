import React, { useEffect, useState } from 'react';
import { Redirect, Link, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Toggle from "../components/Toggle";
import Navigator from "../components/Navigator";
import {handleErrors} from "../utils/ErrorHandle";

export default function Setting(props) {
    const history = useHistory();
    const [redirect, setRedirect] = useState("");
    const [remix, setRemix] = useState(false);
    const [acoustic, setAcoustic] = useState(false);
    const [saved, setSaved] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);
    const settingUri = window._env_.LOCAL_SETTING_URI;
    const saveUri = window._env_.LOCAL_SAVE_URI;

    useEffect(() => {
        fetch(settingUri, {credentials: "include"})
            .catch((e) => { throw Error(e); })
            .then(handleErrors)
            .then(response => response.json())
            .then((json) => {
		        console.log(json)
                setRemix(json.ifRemixAdd)
                setAcoustic(json.ifAcousticAdd)
                setRedirect(json.Result)
            })
            .catch(error => {
                setHasErrors(true)
                console.log("error, ", error);
                let errorMessage = "error: " + error + "\n" + "redirect to login page"
                alert(errorMessage);
                location.href = "/";
            })
    }, []);

    const handleSaveClick = () => {
        fetch(saveUri, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"ifRemixAdd": remix, "ifAcousticAdd": acoustic})
        }).catch((e) => { throw Error(e);})
        .then(handleErrors)
        .then(response => {
            setSaved(true);
        })
        .catch(error => {
            setHasErrors(true)
            console.log("error, ", error);
            let errorMessage = "error: " + error + "\n" + "redirect to login page"
            alert(errorMessage);
            location.href = "/";
        })
    }

    const handleRemixChange = () => {
        setRemix(!remix); 
        setSaved(false);
    }

    const handleAcousticChange = () => {
        setAcoustic(!acoustic); 
        setSaved(false);
    }

    const handleButtonClick = () => {
        history.goBack();
    }

    return (
        <div className="page">
            {hasErrors === true ? 
                (<div>
                <Redirect to="/" />
                </div>) 
                : 
                (<div className="setting-page">
                    <Header />
                    <Navigator page="settingpage" onClick={handleButtonClick} />
                    <div className="setting-explanation">
                        You can edit whether you want remix tracks or acoustic tracks in your playlist here. <br/>
                    </div>

                    <Toggle className="remix" name="remix" explanation="Remix" onChange={handleRemixChange} flag={remix} />
                    <p id="remix-off-explanation">
                        If you set remix off, the application will remove tracks named "(track name)- Remix".
                    </p>

                    <Toggle className="acoustic" name="acoustic"  explanation="Acoustic" onChange={handleAcousticChange} flag={acoustic} />
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
