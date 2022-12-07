import React,{useState} from 'react';
import './App.scss';
import Search from "./Search.js";
// import TestImg from "../src/TestImg.png"
import CurrentTime from './CurrentTime';
import Forcast from './Forcast';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const api ={
  API_KEY:"b3b6ab90a5563dce49c51783ffd17938",
  MyURL:"http://api.openweathermap.org/data/2.5/"
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

}

function App(props) {
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState({});
  const searchPresses=()=>{
   
    fetch(`${api.MyURL}weather?q=${search}&units=metric&APPID=${api.API_KEY}`)
    .then((resp)=>resp.json())
    .then((result)=>{
       console.log(search,result);
      setWeather(result);
    });
  }
  return ( 
    <div className="app">
<nav className="navbar w-100 h-22">
     <div className="d-flex" >
        <input
         className="form-control me-2" 
         type="search" 
         aria-label="Search"  
         placeholder="search..."
         onChange={(e)=>setSearch(e.target.value)}
        />
        <button 
        className="btn btn-primary btn-sm" 
        type="submit" 
        onClick={searchPresses}
        
        >FINDWEATHER</button>
      </div>
  </nav>

      <header className="app__header">
    
      <CurrentTime weather={weather} />   
      
      </header>

      <main className="app__main">

      </main>
 <Forcast weather={weather}/>
    </div>
  );
}

export default App;
