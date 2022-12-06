import react, {useState} from 'react';
import Video from './video';
import Video from './video';
function Catalogue() {
  const [videos,setVideos]=useState([]);
  const [videoObj,setVideoObj]= useState(null);
  function getdata(){
    fetch('http://34.243.107.31/myflix/videos').then((response)=> response.json()).then((data)=>setVideos(data))
    console.log(videos);
    if(videos.length===0) return 
    else{
      setVideoObj(videos.map(video=>(<Video key={video._id} video={video.video}/>)))
    }
    
  }
  
  return (
    <div className="Catalogue">
      {videoObj}
     <button onClick={getdata}> get</button>
    </div>
  );
}

export default Catalogue;
