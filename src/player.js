import React, { Component } from 'react'

export default class player extends Component {
    constructor(props) {
        super(props);
        this.state ={
            videoId: this.props.atch.params.id,
            videoData: {}
        };
    }
    render(){
        return (
            <div>player</div>
          )
    }  
}
