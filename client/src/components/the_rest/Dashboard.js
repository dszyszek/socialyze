import React from 'react';
import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main'


class Dashboard extends React.Component {
    render(){
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>
                
                <div class="dashboard">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h1 class="display-4">Dashboard</h1>
                        <p class="lead text-muted">Welcome Anonymous</p>

                        <div class="btn-group mb-4" role="group">
                          <a href="Profile" class="btn btn-light">
                          <i class="fas fa-user text-success mr-1"></i>
                          Your Profile</a>
                          <a href="EditProfile" class="btn btn-light">
                          <i class="fas fa-user-edit text-success mr-1"></i> Edit Profile</a>
                          <a href="AddExperience" class="btn btn-light">
                            <i class="fab fa-black-tie text-success mr-1"></i>
                            Add Experience</a>
                          <a href="AddEducation" class="btn btn-light">
                            <i class="fas fa-graduation-cap text-success mr-1"></i>
                            Add Education</a>
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
                    </div>
                  </div>
                </div>

                <Footer_main/>
            </div>
        )
    }
}

export default Dashboard;