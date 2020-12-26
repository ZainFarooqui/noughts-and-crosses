import React from 'react';

const WinCard = (props) => {
    return <div>Game Over, Congratualtion {props.player1Turn ? "Player2":"Player1"}</div>;
}

export default WinCard