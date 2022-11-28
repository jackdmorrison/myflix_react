import React from 'react'

export default function video({video}) {
  return (
    <>
        <h1>{video.Name}</h1>
        <p>category: {video.category}</p>
        <img src={video.picture} alt={video.name}/>
            
    </>
  )
}
