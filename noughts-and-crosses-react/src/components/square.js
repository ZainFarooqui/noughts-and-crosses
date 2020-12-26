import React from 'react';

const Square = (props) => {
    return <button onClick={props.clickEvent} disabled={props.clicked}> {props.value}</button>;
}

export default Square