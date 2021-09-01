import React from 'react';

import './App.css';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Users from './components/users/users';
import Parent from './components/parent/parent';
import ContentData from './components/content/content';
import Form from './components/form/form';
import WeatherForm from './components/WeatherForm/weatherform';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/header/header';
import Barchart from './components/Barchart/barchart';



function App() {
  let appname='hari';
  let mystyle = {

    color:'green',
    fontFamily:'candara'
  };
  return (

    <BrowserRouter>
      {/* <Home></Home> */}
    {/* <Contact name ="hh"email='ss@s.com' phone='111' ></Contact> */}
      {/* <Contact name ="ggg"email='ss@s.com' phone='111' ></Contact> */}
      {/* <Contact name ="111"email='ss@s.com' phone='111' ></Contact> */}
      {/* <h1 style={mystyle}>welcome { appname }</h1> */}
       
       {/* <Parent></Parent>
       <Home></Home>
       <ContentData></ContentData>
       <Form></Form> */}
       <Header></Header>
       <Route exact path="/weather" component={WeatherForm}></Route>
       <Route path ="/content" component={Barchart}></Route>

      
   {/* <WeatherForm ></WeatherForm> */}
   </BrowserRouter>
  
       
    
    
  );
}

export default App;
