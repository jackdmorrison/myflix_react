import react, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Video from './video';
function Catalogue() {
  const [videos,setVideos]=useState([]);
  const [videoObj,setVideoObj]= useState(null);
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
      setVideoObj(videos.map(video=>(<Video key={video._id.$oid} video={video}/>)))
    }
    else{
      setVideoObj(videos.map(video=>{
        if(category===video.video.category){
          return(<Video key={video._id.$oid} video={video}/>)
        }
        else{
          return(<></>)
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
      <button onClick={handleOpen}>Category</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleCategory}>all</button>
          </li>
          <li className="menu-item">
            <button onClick={handleCategoryS}>short</button>
          </li>
          <li className="menu-item">
            <button onClick={handleCategoryM}>medium</button>
          </li>
          <li className="menu-item">
            <button onClick={handleCategoryL}>long</button>
          </li>
        </ul>
      ) : null}
      <div className="container row">
        {videoObj}
      </div>
    </>
    
  );
}

export default Catalogue;
