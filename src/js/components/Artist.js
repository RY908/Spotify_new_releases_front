import React, { useEffect, useState } from 'react';

export default function Artist(props) {
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
        borderRadius: "50%"
    }

    useEffect(() => {
        console.log(checked);
        
    }, [checked]);
    
    return (
        <div className="artist">
            {/* <input type='checkbox' name='artist' value={id} id={id} style={{WebkitAppearance: "none"}} /> */}
            <input type='checkbox' name='artist' value={id} id={id} onChange={props.onChange} checked={checked}/>
            <label htmlFor={id} style={style}></label>
            {/* <img src={iconUrl} className="artist-icon"/> */}
            <a href={url} target="_blank" className="artist-name">{name}</a>
        </div>
    )
}

