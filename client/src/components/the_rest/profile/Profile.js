import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Navbar_secondary from '../Navbar_secondary';
import Footer_main from '../Footer_main';
import {getUserByID} from '../../../actions/profileActions';
import ProfileBio from './ProfileBio';
import ProfileBody from './ProfileBody';
import GithubTab from './GithubTab';
import setAuthToken from '../../../utils/setAuthToken';
import Loader from '../../common/Loader';
import Navbar_logged_out from '../Navbar_logged_out';


class Profile extends React.Component {
    constructor() {
      super();
      this.getContent = this.getContent.bind(this);
      
      this.state = {
        visitedProfile: ''
      };
    }

    componentWillMount() {
      this.props.getUserByID(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
      if (!isEmpty(newProps.profile)) {
            this.setState({
              visitedProfile: newProps.profile.profile
            });
      }
    }

    componentWillUnmount() {
      if (this.props.auth.auth) {
        setAuthToken(localStorage.jwt_token);
      }
    }

    getContent() {
      const profile = this.state.visitedProfile;

      return (
        <div class="profile mt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-12">

                {this.props.auth.auth ? (
                  <div class="row">
                    <div class="col-6">
                      <button onClick={this.props.history.goBack} class="btn btn-light mb-3 float-left">Back</button>
                    </div>
                    <div class="col-6"></div>
                  </div>
              ) : (
                  <div class="row" style={{padding: '2%'}}></div>
              )}

      
                <div class="row">
                  <div class="col-md-12">
                    <div class="card card-body main_color text-white mb-3">
                      <div class="row">
                        <div class="col-4 col-md-3 m-auto text-center">
                          <img class="rounded-circle photoSize_profile" src={this.props.profile.profile && this.props.profile.profile.user.avatar} alt="" />
                        </div>
                      </div>
                      <div class="text-center">
                        <h1 class="display-4 text-center">{profile.user.name}</h1>
                        {!isEmpty(profile.experience) ? <p class='lead text-center'>{profile.experience[profile.experience.length - 1].title} at {profile.experience[profile.experience.length - 1].company}</p>  : <p class='lead text-center'>Currently not employed</p>}
                        {!isEmpty(profile.location) ? <p>{profile.location}</p> : <p>Location unknown</p>}
                        
                        <p>
                        
                          <Link class="text-white p-2" to="#">
                            <i class="fas fa-globe fa-2x"></i>
                          </Link>

                          {!isEmpty(profile.social) && profile.social.facebook && (
                            <Link class="text-white p-2" to="#">
                              <i class="fab fa-facebook fa-2x"></i>
                            </Link>)
                          }

                          {!isEmpty(profile.social) && profile.social.linkedin && (
                            <Link class="text-white p-2" to="#">
                              <i class="fab fa-linkedin fa-2x"></i>
                            </Link>)
                          }

                          {!isEmpty(profile.social) && profile.social.instagram && (
                            <Link class="text-white p-2" to="#">
                              <i class="fab fa-instagram fa-2x"></i>
                            </Link>)
                          }
            
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      
                <ProfileBio profile={profile} />
      
                <div class="row">

                  <ProfileBody type='experience' param={profile.experience} />
                  <ProfileBody type='education' param={profile.education} />

                </div>
      
                <div ref="myRef">
                  <hr />

                  {profile.githubusername ? <GithubTab githubUsername={profile.githubusername} /> : <GithubTab /> }

                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    render() {

        return (
            <div class='main_wrapper'>
                {this.props.auth.auth ? <Navbar_secondary/> : <Navbar_logged_out />}
                {!isEmpty(this.state.visitedProfile.user) ? this.getContent() : <Loader />}
                
                <Footer_main/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {getUserByID})(Profile);