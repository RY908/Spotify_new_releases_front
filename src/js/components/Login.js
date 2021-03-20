import React from "react";

export default function Login() {
    return (
        <div className="login">
            <button type="button" onClick={() => {
                window.location = window._env_.LOCAL_LOGIN_URI;
            }}>Log in with Spotify</button> 
        </div>
    )
}
