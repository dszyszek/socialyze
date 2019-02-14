import React from 'react';

const Navbar_secondary = () => {
    return (
        <nav class="navbar navbar-expand-sm main_color mb-4">
        <div class="container">
          <a class="navbar-brand" href="/">Socialyze</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="mobile-nav">
    
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="SignUp">Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="LogIn">Login</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
};

export default Navbar_secondary;