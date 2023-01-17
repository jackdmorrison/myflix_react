import react, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Video from './video';
function Catalogue() {
  const [videos,setVideos]=useState([]);
  const [videoObj,setVideoObj]= useState(null);
  const [Short,setShort]= useState([]);
  const [Long,setLong]= useState([]);
  const [Medium,setMedium]= useState([]);
  const [open, setOpen] = useState(false);
  const [category,setCategory] = useState("all")
  const handleOpen = ()=>{
    setOpen(!open);
  };
  useEffect(()=>{
    
    const dataFetch=async () =>{
      const data = await(
        await fetch('http://34.243.107.31/myflix/videos')
      ).json();

      setVideos(data);
    };
    dataFetch();
    
    if(videos.length===0) return 
    else if(category=="all"){
      setShort([]);
      setLong([]);
      setMedium([]);
      setMedium(
        videos.map(video=>{
          if(video.video.category==="medium"){
            return(<Video key={video._id.$oid} video={video}/>)
          }
          else{
            return;
          };
      }));
      setLong(
        videos.map(video=>{
          
          if(video.video.category==="long"){
            return(<Video key={video._id.$oid} video={video}/>)
          }
          else{
            return;
          };
      }));
      setShort(
        
        videos.map(video=>{
          if(video.video.category==="short"){
            return(<Video key={video._id.$oid} video={video}/>)
          }
          else{
            return;
          };
        })

      );
      setVideoObj(
        
       [Short,Medium,Long] 
      )
    }
    else{
      setVideoObj(videos.map(video=>{
        if(category===video.video.category){
          return(<Video key={video._id.$oid} video={video}/>)
        }
        else{
          return;
        };
      
      }))
      
    }
  },[videos]);
  
  const handleCategory=()=>{
    setCategory("all");
  };
  const handleCategoryS=()=>{
    setCategory("short");
  };
  const handleCategoryM=()=>{
    setCategory("medium");
  };
  const handleCategoryL=()=>{
    setCategory("long");
  };
  
  return (
    <>
      
      <div>
        <h1>Long:</h1>
        <div className="container row">
          {Long}
        </div>
        <h1>Medium:</h1>
        <div className="container row">
          {Medium}
        </div>
        <h1>Short:</h1>
        <div className="container row">
          {Short}
        </div>
      </div>
    </>
    
  );
}

export default Catalogue;
