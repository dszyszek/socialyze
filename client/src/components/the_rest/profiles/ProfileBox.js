import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

class ProfileBox extends React.Component {
    constructor() {
        super();

        this.fillProfiles = this.fillProfiles.bind(this);
        this.fillSkillList = this.fillSkillList.bind(this);
    }

    fillSkillList(skills) {
        const skillsArray = [];

        skills.forEach(skill => {
            skillsArray.push(
                <li class="list-group-item">
                <i class="fa fa-check pr-1"></i>{skill}</li>
            )
        })
        return skillsArray;
    }

    fillProfiles() {
        const {profiles} = this.props.profile;
        const profilesArray = [];
        console.log(profiles);

        profiles.forEach(profile => {
            profilesArray.push(
            <div class="card card-body bg-light mb-3">
                <div class="row">
                    <div class="col-2">
                        <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-4 col-8">
                        <h3>{profile.handle}</h3>
                        
                        {!isEmpty(profile.experience) ? <p>{profile.status} at {profile.experience[profile.experience.length - 1].company}</p>  : <p>Currently not employed</p>}

                        {!isEmpty(profile.location) ? <p>{profile.location}</p> : <p>Location unknown</p>}
                        <Link to="Profile" class="btn main_color">View Profile</Link>
                    </div>
                    <div class="col-md-4 d-none d-lg-block">
                        <h4>Skill Set</h4>
                        <ul class="list-group">

                            {this.fillSkillList(profile.skills)}

                        </ul>
                    </div>
                </div>
            </div>
            );
            
        });
        return profilesArray;
    }

    render() {

        return (
            <div>
                {this.props.profile.profiles ? this.fillProfiles() : ''} 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps)(ProfileBox);