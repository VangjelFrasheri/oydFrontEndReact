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

{/* <CalenderEntry day={"Sunday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Monday"} lessonTime={"7:00 PM"} isOutdoor={false}/>
<CalenderEntry day={"Tuesday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Wednesday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Thursday"} lessonTime={"7:00 PM"} isOutdoor={false}/>
<CalenderEntry day={"Friday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Saturday"} lessonTime={"7:00 PM"} isOutdoor={true}/> */}
            
        </div>

    );
}

export default WeeklyCalander;