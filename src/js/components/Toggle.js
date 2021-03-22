import React, { useEffect, useState } from 'react';

export default function Toggle(props) {
    const [toggleName, setToggleName] = useState(props.name);
    const [explanation, setExplanation] = useState(props.explanation);
    const [divName, setDivName] = useState("");
    const [inputId, setInputId] = useState("");
    const [labelId, setLabelId] = useState("");

    useEffect(() => {
        setDivName(toggleName+"-switch");
        setInputId(toggleName+"-toggle");
        setLabelId(toggleName+"-toggle-label");
    }, [])

    const handleChange = () => {
        props.onChange()
    }

    return (
        <div className={props.className}>
            <p id={toggleName}>{explanation} {props.flag ? 'ON' : 'OFF'} </p>
            <div className="mt-ios-blue">
                <input id={inputId} className="toggle-input" type='checkbox' onChange={handleChange} checked={props.flag} />
                <label id={labelId} htmlFor={inputId} className="toggle-label" />
            </div>
        </div>
    );
}