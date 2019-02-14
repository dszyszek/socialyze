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
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="Profiles"> People
                    </a>
                </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="Feed">
                    Post Feed
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Dashboard">
                    Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">
                    <img class="rounded-circle" style={{width: '25px', marginRight:'5px'}} src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                        alt="" title="You must have a Gravatar connected to your email to display an image" /> Logout
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar_secondary;