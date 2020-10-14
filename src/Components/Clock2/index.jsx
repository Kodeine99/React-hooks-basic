import React from 'react';
import useClock from '../../hooks/useClock';
import "./clock2.scss";

function Clock2() {
    const {timeString} = useClock();
    return (
        <div className="clock-2">
            <h2 className="clock-2_item">{timeString}</h2>
        </div>
    );
}

export default Clock2;
