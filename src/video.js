import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
export default function video({video}) {
  //const imgSRC="./"+video.pic;
  
  let imgSRC=require("./Thumbnails/"+video.video.thumb);
  
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={imgSRC} className="card-img-top" alt={video.video.name}/>
      <div className="card-body">
        <h5 className="card-title">{video.video.Name}</h5>
        <p className="card-text">category: {video.video.category}</p>
        <a href={'/video/'+video._id.$oid} className="btn btn-primary">Watch</a>
      </div>
    </div>
  )
}
