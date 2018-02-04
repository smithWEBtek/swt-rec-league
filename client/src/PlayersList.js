import React from 'react'
import './App.css'
import Player from './Player'

const PlayersList = (props) => {

  let renderRecs = <div><h3>We are loading the players now...</h3></div>

  renderRecs = props.recs.map((rec, index) => {
    return (
      <Player
        key={index}
        name={rec.name}
        height={rec.height}
        weight={rec.weight}
        teamName={rec.team.name}
        teamLogoUrl={rec.team.logo_url}
        image_url={rec.image_url}
      />
    )
  })

  return (
    <div className="container">
      <div className="row">
        {renderRecs}
      </div>
    </div >
  )
}



export default PlayersList
