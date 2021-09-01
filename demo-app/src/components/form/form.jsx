import React, { Component } from 'react';
import Axios  from  'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  
                      data:{
                        id:'',
                        name:'',
                        username:'',
                        email:''


                      }
        }
    }
    handleChange = (e) =>{

//let feildName = e.target.name;
//let textval = e.target.value;
let {name,value} = e.target;
this.setState({
    data: {
        ...this.state.data,
        [name]:value
    }
});

    }
    handleSubmit = (e)=>  {
        
       e.prevantDefault();
        Axios.post("https://jsonholder.typicode.com/users",this.state.data).then(response =>{
      console.log(response.data);
        })

    }
    render() { 
        console.log(this.state.data);
        return (  
            <div style={{ width: '500px', margin: '10px' }}>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Id</label>
                        <input type='text'
                               name='id'
                               className='form-control' 
                               value={this.state.data.id}
                               onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text'
                               name='name'
                               className='form-control'
                               value={this.state.data.name}
                               onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input type='text'
                               name='username'
                               className='form-control'
                               value={this.state.data.username}
                               onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='text'
                               name='email'
                               className='form-control' 
                               value={this.state.data.email}
                               onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;