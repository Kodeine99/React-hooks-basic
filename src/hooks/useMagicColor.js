import React, {useEffect, useState} from 'react';
import { useRef } from 'react';


function randomColor(currentColor) {
    const colorList = ['red', 'blue', 'green', 'pink', 'lightBlue'];
    // random color
    const currentIndex = colorList.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc((Math.random() * colorList.length));
    }
    
    console.log(colorList[newIndex]);
    return colorList[newIndex];
}
function useMagicColor() {
    const [color, setColor] = useState('blue');
    const colorRef = useRef('blue');

    // Color change every 1 seconds
    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('First color: ', color); // test color
            // console.log('change color: ', colorRef.current); // test color
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;   
