import React, { Component } from 'react';
class SenderChild extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            c : 0
         }
    }
    
    render() { 
 
        let spacestyle = {

            margin:'5px'
           
          };
        return ( 
<div>

    
    <button className='btn btn-success' style={spacestyle} onClick={ () => {      this.state.c  = this.state.c + 1; this.props.onSend(this.state.c )}}>Lets increase</button>
    <button className='btn btn-danger' style={spacestyle} onClick={ () => {      this.state.c  = this.state.c - 1; this.props.onSend(this.state.c )}}>Lets decrease</button>

    <button className='btn btn-primary' style={spacestyle}  onClick={ () => {      this.state.c  = 0; this.props.onSend(this.state.c )}}>clear counter</button>
</div>

         );
    }
}
 
export default SenderChild;