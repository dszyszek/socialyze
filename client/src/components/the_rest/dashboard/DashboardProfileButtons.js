import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class DashboardProfileButtons extends Component {

      redirectClick = (e) => {
            this.chooseFile.click();
          }

      render() {
            return (
                  <div class="btn-group mb-4" role="group">

                        <Link to={`Profile/${this.props.currentProfile}`} class="btn btn-light">
                              <i class="fas fa-user text-success mr-1"></i>Your Profile
                        </Link>
            
                        <Link to="EditProfile" class="btn btn-light">
                              <i class="fas fa-user-edit text-success mr-1"></i> Edit Profile
                        </Link>
            
                        <Link to="AddExperience" class="btn btn-light">
                              <i class="fab fa-black-tie text-success mr-1"></i>Add Experience
                        </Link>
                        
                        <Link to="AddEducation" class="btn btn-light">
                              <i class="fas fa-graduation-cap text-success mr-1"></i>Add Education
                        </Link>
                        
                        <button class='btn btn-light' onClick={this.redirectClick}>
                              <i class="fas fa-camera text-success mr-1"></i>Change Image
                        </button>
                        <input type='file' name='' class='btn btn-light' ref={input => this.chooseFile = input} style={{display: 'none'}} onChange={this.props.upload} />
                  </div>
            );
      }
}


export default DashboardProfileButtons;