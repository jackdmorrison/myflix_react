import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function Player(){
    const routeParams = useParams();
    const [video,setVideo]=useState([]);
    var ip="34.242.141.138"
    useEffect(()=>{
        const dataFetch=async () =>{
        const data = await(
            await fetch(`http://34.243.107.31/myflix/videos/${routeParams.id}`)
        ).json();
        console.log(data)
        setVideo(data);
        };
        dataFetch();
    },[routeParams])
    try{
        ip=video.video.ip
        return (
            <>
                <h1>{video.video.Name}</h1>
                <video controls muted autoPlay>
                    <source src={`http://${ip}:4000/video/${routeParams.id}`} type="video/mp4"></source>
                </video>
            </>
            )
    }
    catch(e){
        console.error("no ip found")
        return (
            <>
                <div>
                    <h1>Error 404 not found</h1>
                </div>
            </>
            )
    }
    console.log(ip)
    
      
}//${state.videoData.video.ip}
