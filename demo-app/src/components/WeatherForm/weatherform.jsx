import React, { Component } from 'react';

import Axios from 'axios';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        city:'',
       
        feels_like:'Need City Info',
        icon_img :'No Info',
        Wind_speed:'0.0',
        Humidity:'0.0',
        country:'',
        city_name:''
      
     }
  }
  handleChange = (event)=> {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

   handleSubmit = (event)=>{
        
    
    event.preventDefault();
    let city = this.state.city;
    
     const keyid='429736441cf3572838aa10530929f7cd';

      console.log('hi',city);

      Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyid}`)
      .then(response =>{
        console.log(response.data.weather[0],response.data.wind);
        this.setState( {
            feels_like : response.data.weather[0].main,
            icon_img :response.data.weather[0].icon,
            Wind_speed:response.data.wind.speed,
            Humidity:response.data.main.humidity,
            country:response.data.sys.country,
            date_time:response.data.dt,
            city_name:response.data.name

            

        })
        })   .catch((error) => {

          this.setState( {
            city_name:this.state.city,
            country:'',
            feels_like :  'City Is Wrong Buddy',
            icon_img:'Input the city correctly',
            Wind_speed:'-:-',
            Humidity:'-:-'
            
        })

        });
           
   }
  render() { 
    let cardstyle = {
     width:"800px",
     margin: "0  auto" 
  
    };
    let inputstyle ={
      outline: "0",
      borderWidth: "0 0 3px",
       borderColor: "#00b3b3"
    };
    return (
     <div   style={cardstyle} className='container  pt-5 '> 
     <center><form  onSubmit = {this.handleSubmit} ><input style ={inputstyle}  name='city'   value={this.state.city}  onChange={this.handleChange} type="text" placeholder="Enter City" ></input>
     &nbsp; <button className ='btn btn-info btn-sm'>Search</button></form>
     </center><br>
     </br>
     <div class="card w-10 h-10 bg-info text-white shadow-lg p-3 mb-5  rounded  ">
      <div class="card-body ">
      <h2 class="card-title  align-items-center d-flex justify-content-center">{this.state.city_name},{this.state.country}</h2> 
      <hr></hr>
      <center><h4>Today's Weather</h4></center>
     <center> Feels Like   &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; <h2 class="card-text" >{this.state.feels_like}</h2>
       <img src={`http://openweathermap.org/img/w/${this.state.icon_img}.png`}/><br></br>
       Wind Speed :
       <h5>{this.state.Wind_speed} mph </h5>Humidity: <h5>{this.state.Humidity} </h5></center> 
   </div>
</div>
</div>




     
      );
  }
 
}
 
export default WeatherForm;