import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            students: []
        }

    }

    render() {
        return (
            <div>
                <h1 className='text-center'> 404 Page Not Found</h1>
                <p className='text-center'>Please make sure you dont have a typo in your path name. 
                To avoid landing on an error page, navigate using the buttons available to you. Clink 
                on the link below to return to the homepage </p>
                <Link className="linkText" to="/">Return To Home</Link>
            </div>
        );
    }
}

export default ErrorPage;