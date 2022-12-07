import React from "react";
import TestImg from "../src/TestImg.png"
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
import { useState } from "react";
import { useEffect } from "react";
import './App.scss';

 const CurrentTime=(props)=>{
const [whetherImag,setWeatherImag]=useState(unknown);
// const IDimage=props.?weather?.id;
const [IDimage,setIDimage]=useState(0);
// const id2=0;
// console.log(props?.weather?.weather[0]?.id);
useEffect(()=>{
  // console.log(props?.weather)
  props.weather.base ? setIDimage(props?.weather?.weather[0]?.id) : setIDimage(1000);
  retID(props);
},[props.weather]);

function retID(props){
  // console.log(IDimage);
  const id = props.weather.base ? props?.weather?.weather[0]?.id : 1000;
  console.log(id);
if(id<300){
  // return(storm);
  setWeatherImag(storm);

}else if(300 <= id && id <= 499){
  console.log("TEST");
  console.log(id);
  // return(drizzle);
  setWeatherImag(drizzle);
}else if(500<=id && id <=599){
  // return(rain);
  setWeatherImag(rain);
}else if(600<=id && id <=699){
  // return(snow);
  setWeatherImag(snow);
}else if(700<=id && id <=799){
setWeatherImag(fog);
}else if(id===800){
  // return(clear);
  setWeatherImag(clear);
}else if(id===801){
  // return(partlycloudy);
setWeatherImag(partlycloudy);
}else if(801<id && id<=805){
  // return(mostlycloudy); 
setWeatherImag(mostlycloudy);
}else{
setWeatherImag(unknown);
}

}
    return(
<div>

  <img src={whetherImag} className="w-50" alt="storm icon"/>
  <div className="temp">

  <h2>Tempreture {props.weather.main?.temp_min} to  {props.weather.main?.temp_max}  </h2>
  <p>humidity: {props.weather.main?.humidity}      ||   pressure: {props.weather.main?.pressure} </p>
  <h2 className="cityNamee">{props.weather.name} </h2>
</div>
</div>
    );
}
export default CurrentTime;