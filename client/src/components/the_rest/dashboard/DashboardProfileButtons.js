import React from 'react';
import {Link} from 'react-router-dom';

const dashboardProfileButtons = (props) => (
        <div class="btn-group mb-4" role="group">

            <Link to={`Profile/${props.currentProfile}`} class="btn btn-light">
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
      </div>
);

export default dashboardProfileButtons;