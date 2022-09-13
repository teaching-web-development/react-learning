import React from 'react';
import './BtnStyle.scss';

const MainBtn = ({ btnText, clickHandler }) => {
    return (
        <div id='btn-grp-mainBtn'>
            <button onClick={(e) => clickHandler(e)} className="custom-btn btn-7"><span>{btnText}</span></button>
        </div>
    );
};

export default MainBtn;