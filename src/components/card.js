import React from 'react'
import { navigateTo } from 'gatsby-link'

export default function Card ({link, title, description, imageSrc, imageWidth}) {
  return (
    <div 
      className="card"
      onClick={() => navigateTo(link)}
    >
      <div style={{float: 'left', margin: 'auto', padding: '25px'}}>
        <img 
          style={{
            height: `50px`,
            width: `50px`,
            display: 'block',
          }}
          src={`http:${imageSrc}`}
          alt={title}
        />
      </div>
      <div className="card-info">
        <div className="card-title">
          {title}
        </div>
        <div className="card-description">
          {description}
        </div>
      </div>
    </div>
  );
}
