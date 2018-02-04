import React, { Component } from 'react'
// import logo from './logo.svg'
import bball from './bball.svg.png'
import './App.css'
import { connect } from 'react-redux'
import * as actions from './RecActions'
import Player from './Player'

class App extends Component {
  state = {
    recs: {}
  }

  componentDidMount() {
    fetch('https://swt-rec-league.herokuapp.com/')
      .then(res => res.json())
      .then(json => {
        this.setState({ recs: json })
      })
  }

  render() {
    let renderRecs = <div><h3>We are loading the players now...</h3></div>
    let recs = [...this.state.recs]
    if (this.state.recs.length > 0) {
      renderRecs = recs.map((rec, index) => {
        return (
          <div key={index}>
            <Player
              name={rec.name}
              height={rec.height}
              weight={rec.weight}
              team={rec.team.name}
              image_url={rec.image_url}
            />
          </div>
        )
      })
    }

    return (
      <div>
        <header className="App-header">
          <img src={bball} className="App-logo" alt="bball" />
          <h1>Rec League</h1>
        </header>
        {renderRecs}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    recs: state.rec.recs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRecs: () => dispatch(actions.fetchRecs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
