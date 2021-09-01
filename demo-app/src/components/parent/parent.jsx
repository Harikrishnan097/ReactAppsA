import React, { Component } from 'react';
import SenderChild from '../sender-child/sender-child';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
         }
    }
    getValue = (val) => {
       this.setState({
           count:val
       })


    }
    render() { 
        return (
<div>
        <h3>Counter: {this.state.count }</h3>
        <SenderChild   onSend={ this.getValue }></SenderChild>

</div>

          );
    }
}
 
export default Parent;