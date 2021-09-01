import React, { Component } from 'react';
import  axios from 'axios';
import LikeButtonComponent from '../LikeButton/Likebutton';
import CommentComponent from '../comments/comments';


class ContentData extends Component {
    constructor(props) {
        super(props);
        this.state = {

          users:[],
          likes:0,
          

          }
    }
    loadUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
        this.setState( {
            users :response.data
        })
        });
}
    render() { 

        let cardstyle={
            width: '18rem',
            margin:'20px'

            

        };
        let spacestyle = {

            margin:'5px'
           
          };
          let cestyle = {

            paddingRight:'20px'
           
          };

        return ( 
            
            <div className="container ">
            <div className="row">
            {

                   this.state.users.map(u =>
                    <div  class="card col-md-3" class="card bg-light mb-3 " class="card border-success  mb-3"  style={cardstyle}>
                    <div class="card-header" style={{   backgroundColor: '#85FA7B'}}>{u.name}</div>
                    <div class="card-body">

                    <p class="card-text">{u.username}</p>
                    <p class="card-text">{u.email}</p>
                    <LikeButtonComponent itemId={u.id} > </LikeButtonComponent>
                    <CommentComponent itemId={u.id} ></CommentComponent>
                    </div>
                    </div>
                    )

 }
</div>


           </div>







         );
    }
    componentDidMount(){

        this.loadUsers();
    }
}
 
export default ContentData;