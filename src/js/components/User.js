import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import Artist from './Artist';
import CheckedArtist from './CheckedArtist';
import Header from "./Header";
import Guide from "./Guide";
import Logout from "./Logout";

export default function User(props) {
    const [artists, setArtists] = useState([]);
    const [redirect, setRedirect] = useState("");
    const [checkedItems, setCheckedItems] = useState({});
    const [isBtnHide, setIsBtnHide] = useState(true);

    useEffect(() => {
        fetch("http://localhost:9990/api/user", {credentials: "include"})  
            .then(response => response.json())
            .then((json) => {
            console.log(json)
            setArtists(json.artists)
            setRedirect(json.result)
            console.log(artists)});
    }, []);

    useEffect(() => {
        //checkedItemsが空では無い場合、送信ボタンを表示させる
        Object.keys(checkedItems).length && setIsBtnHide(false)
        setTimeout(() => {
        if (
            Object.values(checkedItems).every(checkedItem => {
              return checkedItem === false
        })) {
            setIsBtnHide(true)
        }
        },100);
    }, [checkedItems]);

    const handleChange = e => {
        //checkedItemsのstateをセット
        let newCheckedItems = {
            ...checkedItems,
            [e.target.id]: e.target.checked}
        setCheckedItems(newCheckedItems)
    };

    const dataSendBtn = e => {
        //既定のイベントをキャンセルさせる
        e.preventDefault()
        //送信ボタンを押したタイミングで、checkedItemsオブジェクトのvalueがtrueのkeyのみを配列にしてconsoleに表示させる
        const dataPushArray = Object.entries(checkedItems).reduce((pre,[key, value])=>{
            value && pre.push(key)
            return pre
        },[])
        console.log("dataPushArray:", dataPushArray)
        fetch("http://localhost:9990/api/delete", {
            method: "POST",
            credentials: "include",
            headers: {
                // "Content-Type": "application/json"
            },
            body: JSON.stringify({"artistsId": dataPushArray})
        }).then(response => response.json())
            .then((json) => {
                console.log(json)
                setArtists(json.artists)
                setRedirect(json.result)
                console.log("push")})
    }

    return (
        <div>
            {redirect === "redirect" ? 
                (<div>
                <Redirect to="/" />
                </div>) 
                : 
                (<div className="user-page">
                    <Header />
                    <div className="guide-container"> 
                        <Guide />
                        <Logout />
                        {!isBtnHide && <div className="delete-button-div"><button className="delete-button" onClick={dataSendBtn}>Never show in the playlist</button></div>}
                    </div>
                    <div className="artistContainer">
                    {
                        artists.map(artist => {
                        if (checkedItems[artist.ArtistId]) {
                            return <CheckedArtist 
                                id={artist.ArtistId} 
                                name={artist.Name} 
                                url={artist.Url} 
                                iconUrl={artist.IconUrl} 
                                key={artist.ArtistId}
                                onChange={handleChange}
                                checked={checkedItems[artist.ArtistId]}
                            />
                        } else {
                            return <Artist 
                                id={artist.ArtistId} 
                                name={artist.Name} 
                                url={artist.Url} 
                                iconUrl={artist.IconUrl} 
                                key={artist.ArtistId}
                                onChange={handleChange}
                                checked={checkedItems[artist.ArtistId]}
                            />
                        }})
                    }
                    </div>
                </div>)
            }
        </div>
    );
}
