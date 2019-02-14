import React from 'react';
import {Link} from 'react-router-dom';

class Landing_page extends React.Component {
    render(){
        return (
            <main role="main" class="inner cover">
                <h1 class="cover-heading">Find your way to connect...</h1>
                <p class="lead">...and socialyze!</p>
                <p class="lead">
                <Link to="/Login" class="myBtn myBtn--white myBtn--animated">Log in</Link>
                </p>
          </main>
        );
    };
}

export default Landing_page;