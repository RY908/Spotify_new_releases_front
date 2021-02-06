import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

export default function Guide() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div className="guide">
            <div className="Modal"> 
                <button className="modal-button" onClick={() => setIsOpen(true)}>Guide</button>
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
                    <h2 className="modal-title">Guide</h2>
                    <p className="about-user-page">
                        In this page, you can delete artists whose songs you don't want in the playlist.<br/>
                        Once you delete artists, their songs will be no longer added in your playlist.
                    </p>
                    <div className="user-page-instruction">
                        <ul>
                            <li>Click the name of an artist then you can visit spotify page of the artist.</li>
                            <li>
                                Click the image of an artist then you can see a delete button appears.<br/>
                                Select artists and click the button then you will never see the artists in your playlist.
                            </li>
                        </ul>
                    </div>
                </Modal>
            </div>
        </div>
    );
}