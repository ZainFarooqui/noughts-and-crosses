import React from 'react';
import '../App.css'

const WinCard = (props) => {

    return  <div className="win-card">
                Game Over, {findWinner(props.player1Turn,props.gameState)}
                <div>
                    <button onClick={props.restartGame}> Restart Game</button>
                </div>
            </div>;
}

const findWinner = (player1Turn, gameState) => {
    if (gameState === "Win") {
        return player1Turn ? "Player 2 Wins":"Player 1 Wins"
    }
    else if (gameState === "Draw") {
        return "A Draw"
    }
    }
export default WinCard