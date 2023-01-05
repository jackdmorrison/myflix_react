import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
export default function Player(){
    const routeParams = useParams();
    const [video,setVideo]=useState([]);
    // useEffect(()=>{
    //     const dataFetch=async () =>{
    //     const data = await(
    //         await fetch(`http://34.243.107.31/myflix/videos/${routeParams.id}`)
    //     ).json();

    //     setVideo(data);
    //     };
    //     dataFetch();
    // },[routeParams])
    
    console.log(routeParams)
    
    return (
        <>
        
            <video controls muted autoPlyay>
                <source src={`http://34.242.141.138:4000/video/${routeParams.id}`} type="video/mp4"></source>
            </video>
        </>
        )
      
}//${state.videoData.video.ip}
