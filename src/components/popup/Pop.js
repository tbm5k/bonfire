import React from 'react';
import Popup from 'reactjs-popup';
import './Pop.css'

const Pop = ({btnName, txt}) => {


    return(
        <Popup
        trigger={<button className="button">{btnName}</button>}
        modal
        nested
        >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">{btnName}</div>
            <div className="content">
                {txt}
            </div>
          </div>
        )}
      </Popup>
    )
}

export default Pop;