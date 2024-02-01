import { SunFill } from 'react-bootstrap-icons';


const OutdoorLesson = (props) => {

    return(
        <div style={{height: "200px", marginTop: '60px'}}>
            <SunFill className='sun'/>
            <p style={{marginBottom: "0px"}}>Location: </p> 
            <p>Danehy Park</p>
        </div>
    );
}

export default OutdoorLesson;