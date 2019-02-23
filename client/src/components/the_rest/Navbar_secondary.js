import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {logoutProfile} from '../../actions/profileActions';

class Navbar_secondary extends React.Component {
        constructor() {
            super();
            this.logoutProfileFunction = this.logoutProfileFunction.bind(this);
        }

        logoutProfileFunction() {
            this.props.logoutProfile();
        }

        render(){
            return (
                <nav class="navbar navbar-expand-sm main_color mb-4">
                    <div class="container">
                    <Link class="navbar-brand" to="/">Socialyze</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <div class="collapse navbar-collapse" id="mobile-nav">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="Profiles"> People
                            </Link>
                        </li>
                        </ul>
        
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="Feed">
                            Post Feed
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Dashboard">
                            Dashboard
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/" onClick={this.logoutProfileFunction}>
                            <img class="rounded-circle" style={{width: '25px', marginRight:'5px'}} src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                                alt="" title="You must have a Gravatar connected to your email to display an image" /> Logout
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            );
        }
    
};

Navbar_secondary.propTypes = {
    logoutProfile: PropTypes.func.isRequired,
};

export default connect(null, {logoutProfile})(Navbar_secondary);