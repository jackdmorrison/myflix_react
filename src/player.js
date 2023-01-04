import React, { Component } from 'react';
import { useParams } from "react-router-dom";
export default class player extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.params.id)
        this.state ={
            videoId: this.props.params.id,
            videoData: {}
        };
    }
    async componentDidMount() {
        try {
            const res = await fetch(`http://34.243.107.31/myflix/videos/${this.state.videoId}`);
            const data = await res.json();
            this.setState({ video: data });
        } catch (error) {
            console.log(error);
        }
    }
    render(){
        return (
            <>
            
                <video controls muted autoPlyay>
                    <source src={`http://${this.state.videoData.video.ip}:4000/video/${this.state.videoData._id.$oid}`} type="video/mp4"></source>
                </video>
            </>
          )
    }  
}
