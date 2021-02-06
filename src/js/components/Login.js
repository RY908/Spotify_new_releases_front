import React from "react";
import Cookies from 'js-cookie';
import Header from "./Header";
import Popup from "./Popup";


export default class Login extends React.Component {
    render() {
        Cookies.remove('token');
        Cookies.remove('spotify_access_token');
        return (
            <div className="login-page">
                <Header />
                <h1 className="explanation">
                    Do you want a perfect playlist? 
                </h1>
                <Popup />
                <div className="login">
                    <button type="button" onClick={() => {
                        window.location = "http://localhost:9990/"
                    }}>Log in with Spotify</button> 
                </div>
            </div>
        );
    }
}
