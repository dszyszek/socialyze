import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Navbar_secondary from '../Navbar_secondary';
import Footer_main from '../Footer_main';
import {getAllUsers} from '../../../actions/profileActions';
import ProfileBio from './ProfileBio';
import ProfileBody from './ProfileBody';

class Profile extends React.Component {
    constructor() {
      super();

      this.state = {
        visitedProfile: ''
      };
    }

    componentWillMount() {
      this.props.getAllUsers();
    }

    componentWillReceiveProps(newProps) {
      newProps.profile.profiles.forEach(usr => {
        if (usr.user._id === this.props.match.params.id){
          this.setState({
            visitedProfile: usr
          });
        }
      });

    }


    render() {
        const profile = this.state.visitedProfile;

        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="profile mt-4">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-6">
                          <button onClick={this.props.history.goBack} class="btn btn-light mb-3 float-left">Back</button>
                        </div>
                        <div class="col-6">
            
                        </div>
                      </div>
            
                      <div class="row">
                        <div class="col-md-12">
                          <div class="card card-body main_color text-white mb-3">
                            <div class="row">
                              <div class="col-4 col-md-3 m-auto text-center">
                                <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=200&d=mm" alt="" />
                              </div>
                            </div>
                            <div class="text-center">
                              <h1 class="display-4 text-center">{profile.handle}</h1>
                              {!isEmpty(profile.experience) ? <p class='lead text-center'>{profile.status} at {profile.experience[profile.experience.length - 1].company}</p>  : <p class='lead text-center'>Currently not employed</p>}
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
            
                      <ProfileBio profile={this.state.visitedProfile} />
            
                      <div class="row">
                        {console.log(profile.education)}
                        <ProfileBody type='experience' param={profile.experience} />
                        <ProfileBody type='education' param={profile.education} />

                      </div>
            
                      <div ref="myRef">
                        <hr />
                        <h3 class="mb-4">Latest Github Repos</h3>
                        <div class="card card-body mb-2">
                          <div class="row">
                            <div class="col-md-6">
                              <h4>
                                <Link to='Dashboard' class="" style={{color: '#297c6c'}} target="_blank"> Some repo
                                </Link>
                              </h4>
                              <p>Description here</p>
                            </div>
                            <div class="col-md-6">
                              <span class="badge badge-info mr-1">
                                Stars: 44
                              </span>
                              <span class="badge badge-secondary mr-1">
                                Watchers: 21
                              </span>
                              <span class="badge badge-success">
                                Forks: 122
                              </span>
                            </div>
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
  profile: state.profile
});

export default connect(mapStateToProps, {getAllUsers})(Profile);