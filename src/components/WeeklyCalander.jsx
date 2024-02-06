import CalenderEntry from "./CalenderEntry";

const WeeklyCalander = (props) => {

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className="calender">
            
            {/* {
                daysOfWeek.map(
                    day => 
                    <CalenderEntry day={day} lessonTime={"7:00 PM"} isOutdoor={true}/>
                )
            } */}

<CalenderEntry day={"Sunday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Monday"} lessonTime={"7:00 PM"} isOutdoor={false}/>
<CalenderEntry day={"Tuesday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Wednesday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Thursday"} lessonTime={"7:00 PM"} isOutdoor={false}/>
<CalenderEntry day={"Friday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
<CalenderEntry day={"Saturday"} lessonTime={"7:00 PM"} isOutdoor={true}/>
            
        </div>

    );
}

export default WeeklyCalander;