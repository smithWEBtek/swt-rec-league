import React from 'react'
import './index.css'

const Player = (props) => {
  return (
    <div>
      <fieldset className='card'>
        <img src={props.image_url} alt='player' width='250px' height='200px' />
        <h3>{props.name}</h3>
        <h4>height: {props.height}</h4>
        <h4>weight: {props.weight}</h4>
        <h4>team: {props.team}</h4>
      </fieldset>
    </div>
  )
}

export default Player
