
class App extends React.Component {

  state = {
    players: [
      {
        id: 1,
        score: 0,
        name: "Guil",
      },
      {
        id: 2,
        score:0,
        name: "Treasure",
      },
      {
        id: 3,
        score:0,
        name: "Ashley",
      },
      {
        id: 4,
        score:0,
        name: "James",
      },
      {
        id: 5,
        score:0,
        name: "Fucky McFuckerson"
      }
    ]
  }

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: prevState.players[index].score += delta
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => { 
      return {
      players: prevState.players.filter(p => p.id !== id)
      }
    })
  }

  render(){
    return (
      <div className="scoreboard">
        <Header title="Scoreboard"
        players={this.state.players}
        />
  
        {/* Player List */}
  
        {this.state.players.map( (player, index) =>
          <Player key={player.id.toString()}
            name={player.name}
            score={player.score}
            id={player.id}
            score={player.score}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}

      </div>
    )
  }
 }

 const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>x</button>
        {props.name}
      </span>

      <Counter score={props.score}
        index={props.index}
        changeScore={props.changeScore}
      />
    </div>
  )
}

const Header = (props) => {
  return (
    <header>
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
    </header>
  )
}

  const Counter = (props) => {

    let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
      <span className="counter-score">{props.score}</span>
      <button  className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
    </div>
  )
}

  const Stats = (props) => {
    
    const totalPlayers = props.players.length;
    const totalPoints = props.players.reduce( (total, player) => {
      return total + player.score
    }, 0)

    return(
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>

    )
  }




ReactDOM.render(
  <App />,
  document.querySelector("#root")
);