import React, { Component } from 'react';
class LikeButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            likes:0

         }
    }

    addLike = () => {
        let newcount=this.state.likes+1;
        this.setState({
            likes:newcount
        });};


    render() { 
        return ( 

            <button  class="btn btn-default" onClick={this.addLike} id ={this.props.itemId}>
               <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i> {" "}
                {this.state.likes}</button>
         );
    }
}
 
export default LikeButtonComponent;