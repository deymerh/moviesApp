import React from 'react'
import { Link } from 'react-router-dom'
import { CardItem } from './style'

export const CardMovie = ({ img, title, id }) => {
  return (
    <CardItem>
      <div className="image">
        <figure>
          <img src={img} alt={img} />
        </figure>
      </div>
      <div className="buttons">
        <h6>{title}</h6>
        <p><button>WHATCH NOW</button></p>
        <Link to={`/movie/${id}`}><p><button>MORE INFO</button></p></Link>
      </div>
    </CardItem>
  )
}
