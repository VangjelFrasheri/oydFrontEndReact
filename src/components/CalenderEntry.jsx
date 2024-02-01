import OutdoorLesson from './OutdoorLesson';
import IndoorLesson from './IndoorLesson';

const CalenderEntry = (props) => {

    const day = props.day;
    const lessonTime = props.lessonTime;
    const outdoor = props.isOutdoor;

    return (
        <div className="calenderEntry">
            <h4>{day}</h4>
            <div className="calenderEntryInfo">
                <p>Doors open at 5:30 PM</p>
                <p>Lesson Time: {lessonTime}</p>
                {/* <div style={{height: "200px", marginTop: '60px'}}>
                    <SunFill className='sun'/>
                    <p style={{marginBottom: "0px"}}>Location: </p> 
                    <p>Danehy Park</p>
                </div> */}
                {outdoor ? <OutdoorLesson/> : <IndoorLesson/>}
            </div>
        </div>
    );
}

export default CalenderEntry;