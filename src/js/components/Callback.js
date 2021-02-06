import React from 'react';
import { Redirect, useParams } from "react-router-dom";

export default function Callback(props) {
    const token = useParams(props)["token"]
    console.log(token)
    return (
        <div>
        <Redirect to={"/user/"+token}></Redirect>
        </div>
    );
}