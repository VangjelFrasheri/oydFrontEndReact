import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md bg-dark" style={{color: "white"}}>
                        <div className="btn btn-success" style={{backgroundColor: "yellow", marginLeft:"10px"}}>
                            <a href="https://oomyungdoe-ne.com" className="navbar-brand" style={{color: "Black", marginLeft: "10px"}}>School Of Oom Yung Doe</a>
                        </div>
                        <div className="navbar-brand" style={{color: "white", marginLeft: "10px"}}> About </div>
                        <div className="navbar-brand" style={{color: "white", marginLeft: "10px"}}>Instructors</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;