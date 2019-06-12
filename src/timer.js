import React, { Component } from 'react';

const Timer = () => {
    return (
        <div className="main">
            <div className="counter">
                <p className="hours">00<span>: </span></p>
                <p className="minutes">30<span>: </span></p>
                <p className="seconds">00</p>
            </div>
            <div className="counter-description">
                <p className="hours-description">Hour</p>
                <p className="minutes-description">Minute</p>
                <p className="seconds-description">Second</p>
            </div>

        </div>
    )
}
export default Timer