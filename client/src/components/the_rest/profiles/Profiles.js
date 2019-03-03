import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar_secondary from '../Navbar_secondary';
import Footer_main from '../Footer_main';
import {getAllUsers} from '../../../actions/profileActions';
import ProfileBox from './ProfileBox';

class AddEducation extends React.Component {
    constructor() {
        super();

        this.state = {
            profiles: {}
        }
    }

    componentWillReceiveProps(props) {
        this.setState(prev => (console.log('updating'), {
            ...prev,
            profiles: props.profile.profiles
        }));
    }

    componentWillMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="profiles">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <h1 class="display-4 text-center">Profiles</h1>
                        <p class="lead text-center">Browse and connect with other people</p>
                
                       <ProfileBox />
                
                        <div class="card card-body bg-light mb-3">
                            <div class="row">
                            <div class="col-2">
                                <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                            </div>
                            <div class="col-lg-6 col-md-4 col-8">
                                <h3>Anonymous_2</h3>
                                <p>Developer at Google</p>
                                <p>Wroclove, PL</p>
                                <Link to="Profile" class="btn main_color">View Profile</Link>
                            </div>
                            <div class="col-md-4 d-none d-lg-block">
                                <h4>Skill Set</h4>
                                <ul class="list-group">
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>HTML</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>CSS</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>PHP</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>MySQL</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                
                        </div>
                    </div>
                    </div>
              </div>

                <Footer_main/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, {getAllUsers})(AddEducation);