import React from 'react';
import {Link} from 'react-router-dom';

const Navbar_looged_out = () => {
    return (
        <nav class="navbar navbar-expand-sm main_color mb-4">
        <div class="container">
          <Link class="navbar-brand" to="/">Socialyze</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="mobile-nav">
    
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/SignUp">Sign Up</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/LogIn">Login</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
};

export default Navbar_looged_out;