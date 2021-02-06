import React, { useEffect, useState } from 'react';

export default function CheckedArtist(props) {
    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [url, setUrl] = useState(props.url)
    const [iconUrl, setIconUrl] = useState(props.iconUrl)
    const [checked, setChecked] = useState(props.checked)

    const style = {
        backgroundImage: `url(${iconUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "70px",
        width: "70px",
        display: "inline-block",
        padding: "0 0 0 0px",
        borderRadius: "50%",
        borderStyle: "solid",
        borderWitdh: "5px",
        borderColor: "#fa3e90"
    }

    useEffect(() => {
        console.log(checked)
    });

    return (
        <div className="artist">
            <input type='checkbox' name='artist' value={id} id={id} onChange={props.onChange} checked={checked}/>
            <label htmlFor={id} style={style}></label>
            <a href={url} target="_blank" className="artist-name">{name}</a>
        </div>
    )
}