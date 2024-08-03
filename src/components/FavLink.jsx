import React from 'react'

const FavLink = ({url, img}) => {

  return (
    <a href={url} target='_blank' rel='noreferrer' className="fav-button" data-link="youtube" style={{backgroundImage: `url(${img})`}}></a>
  )
}

export default FavLink