import React, { Component } from 'react'

export default class player extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         videoId: this.props.atch.params.id,
    //         videoData: {}
    //     };
    // }
    // async componentDidMount() {
    //     try {
    //         const res = await fetch(`http://34.242.141.138:4000/video`);
    //         const data = await res.json();
    //         this.setState({ videoData: data });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    render(){
        return (
            <>
                <video controls muted autoPlyay>
                    <source src={`http://34.242.141.138:4000/video`} type="video/mp4"></source>
                </video>
            </>
          )
    }  
}
