import React, { useEffect, useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import Artist from "../components/Artist";
import {handleErrors} from "../utils/ErrorHandle";

export default function User(props) {
    const [artists, setArtists] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [isBtnHide, setIsBtnHide] = useState(true);
    const [showFollowings, setShowFollowings] = useState(true);
    const [hasErrors, setHasErrors] = useState(false);
    const userUri = window._env_.USER_URI;
    const deleteUri = window._env_.DELETE_URI;

    useEffect(() => {
        fetch(userUri, {credentials: "include"})
            .catch((e) => { throw Error(e); })
            .then(handleErrors)
            .then(reponse => reponse.json())
            .then((json) => {
                console.log(json)
                setArtists(json.artists)
                console.log(artists)})
            .catch(error => {
                setHasErrors(true)
                console.log("error, ", error);
                let errorMessage = "error: " + error + "\n" + "redirect to login page"
                alert(errorMessage);
                location.href = "/";
            })
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

    const handleToggle = () => {
        setShowFollowings(!showFollowings);
    }

    const dataSendBtn = e => {
        //既定のイベントをキャンセルさせる
        e.preventDefault()
        //送信ボタンを押したタイミングで、checkedItemsオブジェクトのvalueがtrueのkeyのみを配列にしてconsoleに表示させる
        const dataPushArray = Object.entries(checkedItems).reduce((pre,[key, value])=>{
            value && pre.push(key)
            return pre
        },[])
        console.log("dataPushArray:", dataPushArray)
        fetch(deleteUri, {
            method: "POST",
            credentials: "include",
            headers: {
                // "Content-Type": "application/json"
            },
            body: JSON.stringify({"artistsId": dataPushArray})
        }).catch((e) => { throw Error(e); })
        .then(handleErrors)
        .then(response => response.json())
        .then((json) => {
            console.log(json)
            setArtists(json.artists)
            setRedirect(json.result)
            setIsBtnHide(false)
            setCheckedItems({})
            console.log("push")})
        .catch(error => {
            setHasErrors(true)
            console.log("error, ", error);
            let errorMessage = "error: " + error + "\n" + "redirect to login page"
            alert(errorMessage);
            location.href = "/";
        })
    }

    return (
        <div className="page">
            {hasErrors === true ? 
                (<div>
                    <Redirect to="/" />
                </div>) 
                : 
                (<div className="user-page">
                    <Header />
                    <Navigator page="userpage" isBtnHide={isBtnHide} onClick={dataSendBtn} onChange={handleToggle} flag={showFollowings} />
                    <div className="artistContainer">
                    {
                        artists.map(artist => {
                            if (checkedItems[artist.artistId] === undefined) {
                                checkedItems[artist.artistId] = false;
                            }
                            if (showFollowings === true) {
                                return <Artist key={artist.artistId} artist={artist} onChange={handleChange} checked={checkedItems[artist.artistId]} />
                            } else {
                                if (artist.ifFollowing === false) {
                                    return <Artist key={artist.artistId} artist={artist} onChange={handleChange} checked={checkedItems[artist.artistId]} />
                                }
                            }
                        })
                    }
                    </div>
                    <div className="footer">Icons in navigation bar made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>)
            }
        </div>
    );
}
