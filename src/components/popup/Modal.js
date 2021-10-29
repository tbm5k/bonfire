import React from 'react';
import './Modal.css';
import Popup from 'reactjs-popup';

const Modal = () => {
    return(
        <Popup 
        trigger={<button>Click</button>}
        position="center center"
        >
            A popup
        </Popup>
    );
};

export default Modal;