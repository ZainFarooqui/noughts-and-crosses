import '../App.css';
import React from 'react';
import Square from './square'
import win_achieved from './game'
import WinCard from './wincard'

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {gridArray: Array(9).fill("0"),
                  player1Turn: true,
                  gameState: "Running"};
  }

  handleClick(i) {
    let newArray = this.state.gridArray.slice()
    newArray[i] = (this.state.player1Turn) ? "1":"2"
    const gameStatus = win_achieved(newArray)
    this.setState({gridArray: newArray, player1Turn: !this.state.player1Turn, gameState: gameStatus})
  }

  renderSquare(i) {
    return <Square value={this.state.gridArray[i]} clicked={this.state.gameState} clickEvent={this.state.gridArray[i] === "0" ? () => this.handleClick(i): undefined}/>
  }

  restartGame() {
    this.setState({gridArray: Array(9).fill("0"), player1Turn: true, gameState: "Running"})
  }

  isGameOver() {
    if (this.state.gameState === "Running") {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <div className="board">
        <div>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
        {!this.isGameOver() ? undefined:<WinCard player1Turn={this.state.player1Turn} gameState = {this.state.gameState} restartGame={() => this.restartGame()}/>}
      </div>
    )
  }

}

export default Board;
