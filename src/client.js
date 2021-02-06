import React from "react";
import ReactDOM from "react-dom";
import Layout from "./js/components/Layout";
import { CookiesProvider } from 'react-cookie';
import "./css/styles.scss";

const app = document.getElementById('app');
ReactDOM.render(
    <CookiesProvider>
        <Layout/>
    </CookiesProvider>, app);