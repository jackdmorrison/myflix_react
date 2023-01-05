import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function video({video}) {
  
  //let imgSRC=require("./Thumbnails/"+video.video.thumb);
  //<img src={imgSRC} className="card-img-top" alt={video.video.name}/>
  return (
    <div className="card" style={{width: '18rem'}}>
      
      <div className="card-body">
        <h5 className="card-title">{video.video.Name}</h5>
        <p className="card-text">category: {video.video.category}</p>
        <a href={'/video/'+video._id.$oid} className="btn btn-primary">Watch</a>
      </div>
    </div>
  )
}
