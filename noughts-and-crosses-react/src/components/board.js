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
                  gameOver: false};
  }

  handleClick(i) {
    let newArray = this.state.gridArray.slice()
    newArray[i] = (this.state.player1Turn) ? "1":"2"
    let gameStatus = win_achieved(newArray)
    this.setState({gridArray: newArray, player1Turn: !this.state.player1Turn, gameOver: gameStatus}, console.log(gameStatus))
  }

  renderSquare(i) {
    return <Square value={this.state.gridArray[i]} clicked={this.state.gameOver} clickEvent={this.state.gridArray[i] === "0" ? () => this.handleClick(i): undefined}/>
  }

  render() {
    return (
      <div>
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
        {!this.state.gameOver ? undefined:<WinCard player1Turn={this.state.player1Turn}/>}
      </div>
    )
  }

}

export default Board;
