import React, { useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import SettingPage from "./pages/SettingPage";


export default function Layout() {
    return (
        <div className="layout">
        <Router>
            <div className="router">
            <Route exact path="/" component={LoginPage} />
            <Route path="/user/:token" component={UserPage} />
            <Route path="/setting" component={SettingPage} />
            </div>
        </Router>
        </div>
    );
}

