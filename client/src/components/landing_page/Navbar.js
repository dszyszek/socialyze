import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
            <header class="masthead mb-lg-auto mb-md-auto mb-sm-5 mb-5">
                <div class="inner mt-sm-2 mt-2">
                <h3 class="masthead-brand">Socialyze</h3>
                <hr class='d-md-none hr-line' />

                <nav class="nav nav-masthead justify-content-center mt-sm-2 mt-2">
                    <Link class="nav-link" to="/SignUp">Sign up</Link>
                    <Link class="nav-link" to="/Login">Log in</Link>
                    <Link class="nav-link" to="#">About</Link>

                </nav>

                </div>
            </header>
        
    );
};


export {
    Navbar as default
};