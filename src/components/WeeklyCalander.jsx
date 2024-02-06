import CalenderEntry from "./CalenderEntry";
import { useState, useEffect } from "react";
import weatherApi from "../api/weatherApi";


const WeeklyCalander = (props) => {

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [weeklyForcast, setWeeklyForcast] = useState([]);

    const getWeatherData = () => {
        weatherApi.getWeekOfWeather().then(res => {
            if(weeklyForcast.length > 0){
                if(weeklyForcast[0].dayOfTheWeek != res.data.weatherForcast[0].dayOfTheWeek){
                    setWeeklyForcast(res.data.weatherForcast);
                    console.log("data is set");
                    console.log("the weeklyForcast is " + weeklyForcast);
                }
            }

            if(!weeklyForcast || weeklyForcast.length == 0){
                setWeeklyForcast(res.data.weatherForcast); 
                console.log("the weeklyForcast is " + weeklyForcast);
            }
        });
    }
    

    useEffect(() => {
        getWeatherData();

    }, [])

    

    return (
        <div className="calender">
            {console.log("the data is: " + weeklyForcast)}

            
            {
                weeklyForcast.map(
                    forcast => 
                    <CalenderEntry day={forcast.dayOfTheWeek} lessonTime={"7:00 PM"} isOutdoor={forcast.outdoorLesson}/>
                )
            }

            
        </div>

    );
}

export default WeeklyCalander;