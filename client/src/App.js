import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import * as actions from './RecActions'
import bball from './bball.svg.png'
import './App.css'
import PlayersList from './PlayersList'
import Player from './Player'

class App extends Component {

  componentDidMount() {
    this.props.onFetchRecs()
    this.props.onFetchPlayerNames()
  }

  render() {

    console.log('[App] render this.props', this.props)

    let playerNames = <div><h3>Player names appear here...</h3></div>
    if (this.props.names) {
      playerNames = this.props.recs.map((rec, index) => {
        return (
          <div key={index}>
            <p><Link to={`/players/${rec.id}`}>{rec.name}</Link></p>
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
        <div>{playerNames}</div>
        <PlayersList recs={this.props.recs} />
        <Switch>
          <Route exact path={`/players/:id`} component={Player} />
          <Route exact path={`/`} render={() => <div><h3>home...</h3></div>} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recs: state.myRecs.records,
    names: state.myRecs.playerNames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRecs: () => dispatch(actions.fetchRecs()),
    onFetchPlayerNames: () => dispatch(actions.fetchPlayerNames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
