import React from 'react';

const Navbar = () => {
    return (
            <header class="masthead mb-lg-auto mb-md-auto mb-sm-5 mb-5">
                <div class="inner mt-sm-2 mt-2">
                <h3 class="masthead-brand">Socialyze</h3>
                <hr class='d-md-none hr-line' />

                <nav class="nav nav-masthead justify-content-center mt-sm-2 mt-2">
                    <a class="nav-link" href="#">Sign up</a>
                    <a class="nav-link" href="/Login">Log in</a>
                    <a class="nav-link" href="#">About</a>

                </nav>

                </div>
            </header>
        
    );
};


export {
    Navbar as default
};