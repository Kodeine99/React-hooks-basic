import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import "./magicBox.scss";

function MagicBox() {
    const color = useMagicColor();
    
    return (
        <div className="magic-box">
            <h2 className="magic-box__title"
                style={{color: color}}
            >My custom hook</h2>
        </div>
    );
}

export default MagicBox;
