import React,{useState} from "react";
import TestImg from "../src/TestImg.png"
import './App.scss';
import Search from "./Search";
// import TestImg from "../src/TestImg.png"
import storm from "../src/img/weather-icons/storm.svg"
import clear from "../src/img/weather-icons/clear.svg"
import cloudy from "../src/img/weather-icons/cloudy.svg"
import drizzle from "../src/img/weather-icons/drizzle.svg"
import fog from "../src/img/weather-icons/fog.svg"
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg"
import partlycloudy from "../src/img/weather-icons/partlycloudy.svg"
import rain from "../src/img/weather-icons/rain.svg"
import snow from "../src/img/weather-icons/snow.svg"
import unknown from "../src/img/weather-icons/unknown.svg"


function Forcast(props) {
    // console.log(Search.weather);
        //console.log(props.weather.name);
        // const [CityName,setCityName]=useState("");
        // setCityName(props.weather.name);
const current = new Date();

const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

// console.log(time); // "5:25"
     
    return (
        <div>
            
            <div className="flex items-center justify-content-start mt-6">
                
                {/* <hr className="" /> */}


                <div className=" d-flex justify-content-around">
                    <div className="d-flex align-items-start flex-column">
                        <p className="font-light "> 3:00</p>
                        <img  src={TestImg} className="icon"/>
                        <p>  {props.weather.main?.temp_min}</p>

                    </div>
                    <div className="d-flex align-items-start flex-column ">
                        <p className="font-light "> 6:00</p>
                        <img  src={TestImg} className="icon"/>
                        <p>  {props.weather.main?.temp_min}</p>

                    </div>
                    <div className="d-flex align-items-start flex-column">
                        <p className="font-light "> 9:00</p>
                        <img  src={TestImg} className="icon"/>
                        <p>  {props.weather.main?.temp_min}</p>

                    </div>
                    <div className="d-flex align-items-start flex-column">
                        <p className="font-light "> 12:00</p>
                        <img  src={TestImg} className="icon"/>
                        <p>  {props.weather.main?.temp_min}</p>

                    </div>
                    <div className="d-flex align-items-start flex-column">
                        <p className="font-light "> 15:00</p>
                        <img  src={TestImg} className="icon"/>
                        <p>  {props.weather.main?.temp_min}</p>

                    </div>
                    <div className="d-flex align-items-start flex-column">
                        <p className="font-light "> 18:00</p>
                        <img  src={TestImg} className="icon"/>
                        <p>  {props.weather.main?.temp_min}</p>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Forcast;