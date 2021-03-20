import React, { useEffect } from "react";
import Login from "./components/Login";
import User from "./components/User";
import Setting from "./components/Setting"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Cookies from 'js-cookie';
import LoginPage from "./pages/LoginPage";


export default function Layout() {
    return (
        <div className="layout">
        <Router>
            <div className="router">
            <Route exact path="/" component={LoginPage} />
            <Route path="/user/:token" component={User} />
            <Route path="/setting" component={Setting} />
            </div>
        </Router>
        </div>
    );
}

