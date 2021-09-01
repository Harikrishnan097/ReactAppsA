import React, { Component } from 'react';
class CommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 


           <div>
             < textarea   class="form-control"  type="text" placeholder="comments.."></textarea>


           </div>
         );
    }
}
 
export default CommentComponent;