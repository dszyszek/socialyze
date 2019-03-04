import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Loader from '../../common/Loader';

class ProfileBio extends React.Component {
    constructor() {
        super();

        this.state = {
            profile: ''
        }

        this.fillSkillList = this.fillSkillList.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            profile: props
        });
    }

    fillSkillList(skills) {
        const skillsArray = [];

        skills.forEach(skill => {
            skillsArray.push(
                <div class="p-3">
                    <i class="fa fa-check"></i> {skill}
                </div>
            )
        })
        return skillsArray;
    }

    render() {
        let body;
        if (!isEmpty(this.state.profile.profile)) {
            let profile = this.state.profile.profile;
            console.log(profile, 'from ProfileBio');

            body = (
                <div class="card card-body bg-light mb-3">
                        <h3 class="text-center" style={{color: '#297c6c'}}>{profile.handle}'s Bio</h3>
                        {profile.bio ? <p class='lead'>{profile.bio}</p> : <p class='lead text-center'>No content to show</p>}
                        <hr />

                        <h3 class="text-center" style={{color: '#297c6c'}}>Skill Set</h3>

                        <div class="">
                            <div class='d-flex justify-content-around'>
                                {this.fillSkillList(profile.skills)}
                            </div>
                        </div>

                </div>
            );
        }


        return (
                <div class="row">
                    <div class="col-md-12">
                        {body ? body : <Loader />}
                    </div>
                </div>
        );
    }
}

export default ProfileBio;