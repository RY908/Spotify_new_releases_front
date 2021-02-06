import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

export default function Popup() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div className="Modal"> 
            <button className="modal-button" onClick={() => setIsOpen(true)}>About this application</button>
            <Modal isOpen={modalIsOpen} 
                onRequestClose={() => setIsOpen(false)}
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                }}
                className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                }}
                closeTimeoutMS={500}>
                <button onClick={() => setIsOpen(false)}></button>
                
                <img className="modal-logo" src="../img/modal-logo.png" />
                <h2 className="modal-title">newreleases</h2>
                <p className="about-this-app">
                    This is application keeps track of your listening history and create a playlist
                    based on the artists you listened to and you follow.
                </p>
                <h3 className="scopes">Used Scopes</h3>
                <div className="scope-list">
                    <p>The set of scopes that are required for you to access this Application:</p>
                    <ul>
                        <li>user-read-recently-played</li>
                        <li>user-read-private</li>
                        <li>playlist-modify-public</li>
                        <li>user-follow-read</li>
                    </ul>
                </div>
            </Modal>
        </div>
    );
}