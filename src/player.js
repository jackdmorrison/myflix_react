import React, { Component } from 'react'

export default class player extends Component {
    constructor(props) {
        super(props);
        this.state ={
            videoId: this.props.atch.params.id,
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
                    <source src={`http://${this.state.videoData.video.ip}:4000/video/${videoData._id.$oid}`} type="video/mp4"></source>
                </video>
            </>
          )
    }  
}
