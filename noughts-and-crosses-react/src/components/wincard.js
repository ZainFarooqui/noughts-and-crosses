import React from 'react';
import '../App.css'

const WinCard = (props) => {
    return  <div className="win-card">
                Game Over, Congratualtion {props.player1Turn ? "Player2":"Player1"}
                <div>
                    <button onClick={props.restartGame}> Restart Game</button>
                </div>
            </div>;
}

export default WinCard