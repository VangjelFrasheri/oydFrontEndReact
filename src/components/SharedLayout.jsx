import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-md bg-dark" style={{color: "white"}}>
            <div className="btn btn-success" style={{backgroundColor: "yellow", marginLeft:"10px", marginRight: "10px"}}>
                <a href="https://oomyungdoe-ne.com" className="navbar-brand" style={{color: "Black", marginLeft: "10px"}}>School Of Oom Yung Doe</a>
            </div>
            <NavLink className= "linkTextNav" to= '/'> Students</NavLink>
            <NavLink className= "linkTextNav" to= '/add-student'> Add Student</NavLink>
        </nav>

        <main className="main">
            <Outlet/>
        </main>
        </div>  
    )
}

export default SharedLayout;
