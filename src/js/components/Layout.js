import React, { useEffect } from "react";
import Login from "./Login";
import Callback from "./Callback";
import User from "./User";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Cookies from 'js-cookie';


export default function Layout() {
    useEffect(() => {
        // Cookies.remove('token');
        // Cookies.remove('refreshToken');
        // Cookies.remove('tokenType');
        // Cookies.remove('expiry');
    })

    return (
        <div className="layout">
        <Router>
            <div className="router">
            <Route exact path="/" component={Login} />
            <Route path="/callback/:token" component={Callback} /> 
            <Route path="/user/:token" component={User} />
            </div>
        </Router>
        </div>
    );
}

