import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./colorBox.scss";

ColorBox.propTypes = {
    
};

function getRandomColor() {
    const color_list = ['deepink', 'blue', 'red', 'yellow', 'black'];
    const randomIndex = Math.trunc((Math.random() * color_list.length));
    return color_list[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem('box-color') || 'deeppink';
        return initialColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box-color', newColor);
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;
