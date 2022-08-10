import {Helmet} from "react-helmet"
import axios from 'axios';
import Navbar from './components/Navbar'
import Body from './components/Body';
import $ from 'jquery'
import { Component } from 'react';





const api = axios.create({
  baseURL: `http://localhost:8000`
})



class App extends Component{
  
  

  render(){
    
  
 
    
    return(
   
      <div id="container" className="relative h-screen dark:bg-gray-900 bg-gray-100">
        <Navbar />
        <Body />
        
    </div>
    
  );
  }
  
}




export default App;
