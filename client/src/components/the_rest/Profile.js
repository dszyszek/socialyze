import React from 'react';
import {Link} from 'react-router-dom'

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';

class Profile extends React.Component {
    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="profile mt-4">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-6">
                          <Link to="Profiles" class="btn btn-light mb-3 float-left">Back To Profiles</Link>
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
                              <h1 class="display-4 text-center">Anonymous</h1>
                              <p class="lead text-center">Developer at NASA</p>
                              <p>Warsaw, PL</p>
                              <p>
                                <Link class="text-white p-2" to="#">
                                  <i class="fas fa-globe fa-2x"></i>
                                </Link>
                                <Link class="text-white p-2" to="#">
                                  <i class="fab fa-facebook fa-2x"></i>
                                </Link>
                                <Link class="text-white p-2" to="#">
                                  <i class="fab fa-linkedin fa-2x"></i>
                                </Link>
                                <Link class="text-white p-2" to="#">
                                  <i class="fab fa-instagram fa-2x"></i>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
            
                      <div class="row">
                        <div class="col-md-12">
                          <div class="card card-body bg-light mb-3">
                            <h3 class="text-center" style={{color: '#297c6c'}}>Anonymous's Bio</h3>
                            <p class="lead">Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                            belly beef short loin. Shank drumstick short loin, sirloin meatball pork chop andouille pastrami pork belly 
                            bacon ball tip alcatra sausage pancetta. 
                            </p>
                            <hr />
                            <h3 class="text-center" style={{color: '#297c6c'}}>Skill Set</h3>
                            <div class="row">
                              <div class="d-flex flex-wrap justify-content-center align-items-center">
                                <div class="p-3">
                                  <i class="fa fa-check"></i> HTML</div>
                                <div class="p-3">
                                  <i class="fa fa-check"></i> CSS</div>
                                <div class="p-3">
                                  <i class="fa fa-check"></i> JavaScript</div>
                                <div class="p-3">
                                  <i class="fa fa-check"></i> Python</div>
                                <div class="p-3">
                                  <i class="fa fa-check"></i> C#</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
            
                      <div class="row">
                        <div class="col-md-6">
                          <h3 class="text-center" style={{color: '#297c6c'}}>Experience</h3>
                          <ul class="list-group">
                            <li class="list-group-item">
                              <h4>NASA</h4>
                              <p>Oct 2011 - Current</p>
                              <p>
                                <strong>Position:</strong> Senior Developer
                              </p>
                              <p>
                                <strong>Description:</strong> Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                                belly beef short loin. Shank drumstick short loin.</p>
                            </li>
                            <li class="list-group-item">
                              <h4>Fun Microsystems</h4>
                              <p>Oct 2004 - Nov 2011</p>
                              <p>
                                <strong>Position: </strong> Systems Admin</p>
                              <p>
                                <p>
                                  <strong>Location: </strong> Miami, FL
                                </p>
                                <strong>Description: </strong> Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                                belly beef short loin. Shank drumstick short loin.</p>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h3 class="text-center" style={{color: '#297c6c'}}>Education</h3>
                          <ul class="list-group">
                            <li class="list-group-item">
                              <h4>Oxford</h4>
                              <p>Sep 1993 - June 1999</p>
                              <p>
                                <strong>Degree: </strong>Masters</p>
                              <p>
                                <strong>Field Of Study: </strong>Computer Science</p>
                                <p>
                                  <strong>Description:</strong> Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                                  belly beef short loin. Shank drumstick short loin.</p>
                            </li>
                          </ul>
                        </div>
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

export default Profile;