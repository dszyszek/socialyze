import React from 'react';
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
        this.setState(prev => ({
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