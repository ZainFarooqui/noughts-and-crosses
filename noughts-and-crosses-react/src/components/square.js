import React from 'react';
import '../App.css';

const Square = (props) => {
    const squareMapping = {'0': "--", "1": "O", "2":"X"}
    return <button classname="square" onClick={props.clickEvent} disabled={props.clicked}> {squareMapping[props.value]}</button>;
}

export default Square