import React, { Component } from 'react'
import bball from './bball.svg.png'
import './App.css'
import { connect } from 'react-redux'
import * as actions from './RecActions'
import PlayersList from './PlayersList'

class App extends Component {

  componentDidMount() {
    this.props.onFetchRecs()
    this.props.onFetchPlayerNames()
  }

  render() {

    console.log('[App] render this.props', this.props)

    let playerNames = <div><h3>Player names appear here...</h3></div>
    if (this.props.names) {
      playerNames = this.props.names.map(name => {
        return (
          <h4><Link to={`/players/${name.id}`}>{name}</Link></h4>
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
