import React from 'react'
export default function video({video}) {
  return (
    <div class="card" style="width: 18rem;">
      <img src={video.picture} class="card-img-top" alt="{video.name}"/>
      <div class="card-body">
        <h5 class="card-title">{video.Name}</h5>
        <p class="card-text">category: {video.category}</p>
        <a href="#" class="btn btn-primary">Watch</a>
      </div>
    </div>
  )
}
