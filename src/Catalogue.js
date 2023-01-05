import react, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Video from './video';
function Catalogue() {
  const [videos,setVideos]=useState([]);
  const [videoObj,setVideoObj]= useState(null);
  useEffect(()=>{
    const dataFetch=async () =>{
      const data = await(
        await fetch('http://34.243.107.31/myflix/videos')
      ).json();

      setVideos(data);
    };
    dataFetch();
    if(videos.length===0) return 
    else{
      setVideoObj(videos.map(video=>(<Video key={video._id} video={video}/>)))
    }
  },[videos])
  
  //console.log(videos);
  
    
  
  return (
    <div className="container">
      {videoObj}
    </div>
  );
}

export default Catalogue;
