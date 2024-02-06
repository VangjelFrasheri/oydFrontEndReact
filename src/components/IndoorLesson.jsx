import { BuildingFill } from "react-bootstrap-icons";

const IndoorLesson = (props) => {

    return(
        <div style={{height: "200px", marginTop: '60px'}}>
            <BuildingFill className='building'/>
            <p style={{marginBottom: "0px"}}>Location: </p> 
            <p>Somerville School</p>
        </div>
    );
}

export default IndoorLesson;