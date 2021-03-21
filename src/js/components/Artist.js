import React, { useEffect, useState } from 'react';

export default function Artist(props) {
    const [id, setId] = useState(props.artist.ArtistId)
    const [name, setName] = useState(props.artist.Name)
    const [url, setUrl] = useState(props.artist.Url)
    const [iconUrl, setIconUrl] = useState(props.artist.IconUrl)

    const uncheckedStyle = {
        backgroundImage: `url(${iconUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "70px",
        height: "70px",
        display: "inline-block",
        padding: "0 0 0 0px",
        borderRadius: "50%"
    }

    const checkedStyle = {
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

    const handleChange = (e) => {
        props.onChange(e)
    }

    return (
        <div className="artist">
            <input type='checkbox' name='artist' value={id} id={id} onChange={handleChange} checked={props.checked}/>
            {!props.checked ? (
                <label htmlFor={id} style={uncheckedStyle}></label>
            ): (
                <label htmlFor={id} style={checkedStyle}></label>
            )}
            <a href={url} target="_blank" className="artist-name">{name}</a>
        </div>
    );
}