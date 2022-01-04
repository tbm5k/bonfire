import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Pop = ({btnName, txt}) => {
    return(
        <Popup trigger={<p>{btnName}</p>}>
            {txt}
        </Popup>
    )
}

export default Pop;