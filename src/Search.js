import React,{useState} from "react";
import Forcast from './Forcast';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';
import { createContext } from "react";
export const GlobalContext=createContext({});
const api ={
  API_KEY:"b3b6ab90a5563dce49c51783ffd17938",
  MyURL:"http://api.openweathermap.org/data/2.5/"
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

}
function Search(){
  const [search,setSearch]=useState("");
  const [weather,setWeather]=useState({});

   const searchPresses=()=>{
    // console.log("search press");
    // console.log(search);
    fetch(`${api.MyURL}weather?q=${search}&units=metric&APPID=${api.API_KEY}`)
    .then((resp)=>resp.json())
    .then((result)=>{
      console.log(result);
      setWeather(result);
    });
  }

    return(
     
  
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
 
      // <div className="flex flex-row justify-center my-6"> 
      // <div className="flex flex-row w-3/4 items-center justify-center space-x-4"> 
      // <input
      // type="text"
      // className="text-x1 font-light p-2 w-full shadow-xl focus:outline-none capitalize" />
      // </div>
    
      // </div>
    
  


    )
}
export default Search;
