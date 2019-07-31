import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Navbar_secondary from '../Navbar_secondary';
import Footer_main from '../Footer_main'
import {getCurrentProfile, deleteProfile} from '../../../actions/profileActions';
import {updatePhotoAuth} from '../../../actions/authActions'
import Loader from '../../common/Loader';
import DashboardProfileButtons from './DashboardProfileButtons';
import ExperienceTab from './ExperienceTab';

class Dashboard extends React.Component {
    constructor() {
      super();
      this.deleteProfileFunction = this.deleteProfileFunction.bind(this);
    }

    componentDidMount() {
      this.props.getCurrentProfile();
    }

    deleteProfileFunction() {
        if (window.confirm('Are you sure? (no way to undo that)')) {
          this.props.deleteProfile(this.props.history);
        }
    }

    uploadFile = async e => {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'socialyze');
  
      const res = await fetch('https://api.cloudinary.com/v1_1/dszyszek/image/upload', {
          method: 'POST',
          body: data
      });
  
      const file = await res.json();
      const avatarData = {
        avatar: file.secure_url
      };

      this.props.updatePhotoAuth(avatarData);
  }

    render() {
        const {user} = this.props.auth;
        const  {profile, loading} = this.props.profile;
        let content;

        if (profile === null || loading) {
          content = <Loader />;

        } else if (isEmpty(profile) && !loading) {
          content = (
            <div class='ml-0 mr-0 mt-5 text-center mb-5'>
                    
                    <h1 class='display-6 font-weight-normal'>
                        Hi, {this.props.auth.user.name}, you've not created your profile yet!
                    </h1>
                    <Link to="EditProfile" class="btn btn-light mt-3">
                  <i class="fas fa-user-edit text-success mr-1"></i> Create Profile</Link>

              </div>
          );
        } else {
          content = (
            <div>
                <div class='row' style={{marginLeft: 0, marginRight: 0}}>
                  <div class='col-8' style={{padding: 0}}>
                    <h1 class="display-4">Dashboard</h1>
                    <p class="lead text-muted">Welcome <Link style={{textDecoration: 'none', color: '#6c757d'}} to={`/handle/${this.props.profile.profile.handle}`}> {this.props.auth.user.name} </Link></p>
                    <DashboardProfileButtons currentProfile={profile.user._id} upload={this.uploadFile} />
                  </div>
                  <div class='col-4' style={{position: 'static'}}>
                    <div style={{margin: '0 auto', width: '60%', position: 'relative', top: '8%' }}>
                      <img class='rounded-circle' src={this.props.profile.profile.user.avatar} style={{width: '100%', height: '100%'}} />
                    </div>
                  </div>

                </div>


                <ExperienceTab whichTable='experience' rowArray={['company', 'title']} />

                <ExperienceTab whichTable='education' rowArray={['school', 'degree']} />
    
                <div style={{marginBottom: '60px'}}>
                  <button class="btn btn-danger" onClick={this.deleteProfileFunction}>
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
  deleteProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile, deleteProfile, updatePhotoAuth})(withRouter(Dashboard));