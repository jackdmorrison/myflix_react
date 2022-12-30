import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function video({video}) {
  const imgSRC="./Thumbnails/"+video.pic;
  return (
    <div class="card" style={{width: '18rem'}}>
      <img src={imgSRC} class="card-img-top" alt={video.name}/>
      <div class="card-body">
        <h5 class="card-title">{video.Name}</h5>
        <p class="card-text">category: {video.category}</p>
        <a href="#" class="btn btn-primary">Watch</a>
      </div>
    </div>
  )
}
