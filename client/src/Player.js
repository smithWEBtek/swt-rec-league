import React from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'

const Player = (props) => {

  console.log('[Player] props', props)

  return (
    <fieldset className='card'>
      <img src={props.image_url} alt='player' width='150px' height='100px' />
      <h3>{props.name}</h3>
      <h4>height: {props.height}</h4>
      <h4>weight: {props.weight}</h4>
      <h4>team: {props.teamName}</h4>
      <img src={props.teamLogoUrl} alt="team-logo" width='80px' height='80px' />
    </fieldset>
  )
}

export default withRouter(Player)
