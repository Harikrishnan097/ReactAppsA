import React, { Component } from 'react';
import axios from 'axios';

class  Users extends Component {
    constructor(props) {

        super(props);
        this.state = { 
            users: [],
            pics: []
            
         }
    }
    loadUsers = () => {
            axios.get('https://jsonplaceholder.typicode.com/photos').then(response =>{
this.setState( {
    users :response.data
})
            });
    }

    
        
   
    render() { 
        return ( 
<div>
{

    this.state.users.map(u => <img src = {u.thumbnailUrl}/> )
}


</div>
         );
    }

    componentDidMount(){

        this.loadUsers();
    }
}
 
export default Users ;