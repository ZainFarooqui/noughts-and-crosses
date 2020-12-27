import React from 'react';
import '../App.css';

const Square = (props) => {
    const squareMapping = {'0': "-", "1": "O", "2":"X"}
    const gameMapping = {"Running": false, "Win": true, "Draw": true}
    return <button className="square" onClick={props.clickEvent} disabled={gameMapping[props.clicked]}> {squareMapping[props.value]}</button>;
}

export default Square