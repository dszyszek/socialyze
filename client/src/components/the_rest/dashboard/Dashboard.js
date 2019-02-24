import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Navbar_secondary from '../Navbar_secondary';
import Footer_main from '../Footer_main'
import {getCurrentProfile} from '../../../actions/profileActions';
import Loader from '../../common/Loader';

class Dashboard extends React.Component {

    componentDidMount() {
      this.props.getCurrentProfile();
    }

    render(){
        const {user} = this.props.auth;
        const  {profile, loading} = this.props.profile;

        let content;

        if (profile === null || loading) {
          content = <Loader />;

        } else if (isEmpty(profile) && !loading) {
          content = (
            <div class='ml-0 mr-0 mt-3 text-center mb-5'>
                    
                    <h1 class='display-6'>
                        You've not created your profile yet!
                    </h1>
                    <Link to="EditProfile" class="btn btn-light">
                  <i class="fas fa-user-edit text-success mr-1"></i> Create Profile</Link>

              </div>
          );
        } else {
          content = (
            <div>
                <p class="lead text-muted">Welcome Anonymous</p>

                <div class="btn-group mb-4" role="group">
                  <Link to="Profile" class="btn btn-light">
                  <i class="fas fa-user text-success mr-1"></i>
                  Your Profile</Link>
                  <Link to="EditProfile" class="btn btn-light">
                  <i class="fas fa-user-edit text-success mr-1"></i> Edit Profile</Link>
                  <Link to="AddExperience" class="btn btn-light">
                    <i class="fab fa-black-tie text-success mr-1"></i>
                    Add Experience</Link>
                  <Link to="AddEducation" class="btn btn-light">
                    <i class="fas fa-graduation-cap text-success mr-1"></i>
                    Add Education</Link>
                </div>
      
                <div>
                  <h4 class="mb-2">Experience Credentials</h4>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Web Solutions</td>
                        <td>Tech Guy</td>
                        <td>
                          02-03-2009 - 01-02-2018
                        </td>
                        <td>
                          <button class="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>NASA</td>
                        <td>Software Engineer</td>
                        <td>
                          02-03-2018 - Now
                        </td>
                        <td>
                          <button class="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
      
                <div>
                  <h4 class="mb-2">Education Credentials</h4>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Oxford</td>
                        <td>Master</td>
                        <td>
                          02-03-2004 - 01-02-2009
                        </td>
                        <td>
                          <button class="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
    
                <div style={{marginBottom: '60px'}}>
                  <button class="btn btn-danger">
                    Delete My Account
                  </button>
              </div>

            </div>

          );
        }

        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>
                
                <div class="dashboard">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h1 class="display-4">Dashboard</h1>
                          {content}
                      </div>
                    </div>
                  </div>
                </div>

                <Footer_main/>
            </div>
        )
    }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);