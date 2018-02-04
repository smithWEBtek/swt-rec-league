import React, { Component } from 'react'
import bball from './bball.svg.png'
import './App.css'
import { connect } from 'react-redux'
import * as actions from './RecActions'
import PlayersList from './PlayersList'

class App extends Component {

  componentDidMount() {
    this.props.onFetchRecs()
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={bball} className="App-logo" alt="bball" />
          <h1>Rec League</h1>
        </header>
        <PlayersList recs={this.props.recs} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recs: state.myRecs.records
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRecs: () => dispatch(actions.fetchRecs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
