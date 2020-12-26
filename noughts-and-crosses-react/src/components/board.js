import '../App.css';
import React from 'react';
import Square from './square'
import win_achieved from './game'

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
  render() {
    return (
      <div>
        <div>
            <Square value={this.state.gridArray[0]} clickEvent={this.state.gridArray[0] === "0" ? () => this.handleClick(0): undefined}/>
            <Square value={this.state.gridArray[1]} clickEvent={this.state.gridArray[1] === "0" ? () => this.handleClick(1): undefined}/>
            <Square value={this.state.gridArray[2]} clickEvent={this.state.gridArray[2] === "0" ? () => this.handleClick(2): undefined}/>
        </div>
        <div>
            <Square value={this.state.gridArray[3]} clickEvent={this.state.gridArray[3] === "0" ? () => this.handleClick(3): undefined}/>
            <Square value={this.state.gridArray[4]} clickEvent={this.state.gridArray[4] === "0" ? () => this.handleClick(4): undefined}/>
            <Square value={this.state.gridArray[5]} clickEvent={this.state.gridArray[5] === "0" ? () => this.handleClick(5): undefined}/>
        </div>
        <div>
            <Square value={this.state.gridArray[6]} clickEvent={this.state.gridArray[6] === "0" ? () => this.handleClick(6): undefined}/>
            <Square value={this.state.gridArray[7]} clickEvent={this.state.gridArray[7] === "0" ? () => this.handleClick(7): undefined}/>
            <Square value={this.state.gridArray[8]} clickEvent={this.state.gridArray[8] === "0" ? () => this.handleClick(8): undefined}/>
        </div>

      </div>
    )
  }

}

export default Board;
