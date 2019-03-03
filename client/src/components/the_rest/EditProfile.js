import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import classnames from 'classnames';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import InputComponent from '../common/InputComponent';
import TextareaComponent from '../common/TextareaComponent';
import SocialsInputComponent from '../common/SocialsInputComponent';
import {createProfile, getCurrentProfile, clearErrors} from '../../actions/profileActions';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            bio: '',
            skills: '',
            githubusername: '',
            instagram: '',
            linkedin: '',
            facebook: '',
            errors: {}
        };

        this.changeValueOfInput = this.changeValueOfInput.bind(this);
        this.submitProfile = this.submitProfile.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
  
    }

    componentWillMount() {
        this.props.getCurrentProfile();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
            this.setState({
                errors: newProps.errors,
                profile: newProps.profile
            });
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    changeValueOfInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    updateStatus(e) {
        let selected = e.target[e.target.selectedIndex].value;

        this.setState(prev => ({
            ...prev,
            status: selected
        }));

    }

    submitProfile(e) {
        e.preventDefault();
        this.props.createProfile(this.state, this.props.history);
    }

    render() {
        const {errors} = this.state;
        const {profile} = this.props;

        const socials = (
            <div>

                <SocialsInputComponent
                    icon_class='fa-facebook'
                    placeholder={!!profile.profile && !isEmpty(profile.profile) ? (profile.profile.social.facebook ? `Facebook: ${profile.profile.social.facebook}...` : 'Facebook URL...') : 'Facebook URL...'}
                    name='facebook'
                    value={this.state.facebook}
                    error={errors.facebook}
                    onChange={this.changeValueOfInput}
                />

                <SocialsInputComponent
                    icon_class='fa-linkedin'
                    placeholder={!!profile.profile && !isEmpty(profile.profile) ? (profile.profile.social.linkedin ? `Linkedin: ${profile.profile.social.linkedin}...` : 'Linkedin URL...') : 'Linkedin URL...'}
                    name='linkedin'
                    value={this.state.linkedin}
                    error={errors.linkedin}
                    onChange={this.changeValueOfInput}
                />

                <SocialsInputComponent
                icon_class='fa-instagram'
                placeholder={!!profile.profile && !isEmpty(profile.profile) ? (profile.profile.social.instagram ? `Instagram: ${profile.profile.social.instagram}...` : 'Instagram URL...') : 'Instagram URL...'}
                name='instagram'
                value={this.state.instagram}
                error={errors.instagram}
                onChange={this.changeValueOfInput}
                />


            </div>          
        );

        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>


                <div class="create-profile mt-4">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8 m-auto">
                        <Link to="Dashboard" class="btn btn-light">
                            Go Back
                        </Link>
                        <h1 class="display-4 text-center">{isEmpty(this.props.profile.profile) && !isEmpty(profile.profile) ? 'Create' : 'Edit'} Your Profile</h1>
                        <p class="lead text-center">Ok, now tell something about yourself</p>
                        <small class="d-block pb-3">* = required field</small>
                        
                        <form onSubmit={this.submitProfile}>

                        <InputComponent
                             type='text'
                             info="Nickname (This CAN'T be changed later)" 
                             aria_describe='handleInfo' 
                             name='handle' 
                             placeholder={!!profile.profile && !isEmpty(profile.profile) ? `Handle: ${profile.profile.handle} *` : 'Profile handle *'}
                             value={this.state.handle} 
                             onChange={this.changeValueOfInput}
                             error={errors.handle}
                        />
                         

                            <div class="form-group">
                                <select class={classnames('form-control', 'form-control-lg', {'is-invalid': errors.status})} name="status" onChange={this.updateStatus} error={errors.status}>
                                    <option value="0" selected>Select Professional Status *</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Junior Developer">Junior Developer</option>
                                    <option value="Senior Developer">Senior Developer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Student or Learning">Student</option>
                                    <option value="Other">Other</option>
                                </select>
                                <small class="form-text">Current point of your career</small>

                                {errors.status && <div class='invalid-feedback'>{errors.status}</div>}
                            </div>

                        <InputComponent
                             type='text'
                             info="Name of the company you're working for (or you own)" 
                             aria_describe='companyInfo' 
                             name='company' 
                             placeholder={!!profile.profile && !isEmpty(profile.profile) ? `Company: ${profile.profile.company}...` : 'Company...'}
                             value={this.state.company} 
                             onChange={this.changeValueOfInput}  
                             error={errors.company}
                        />

                        <InputComponent
                             type='text'
                             info="Place URL of your (or company) website" 
                             aria_describe='websiteInfo' 
                             name='website' 
                             placeholder={!!profile.profile && !isEmpty(profile.profile) ? `Website: ${profile.profile.website}...` : 'Website...'}
                             value={this.state.website} 
                             onChange={this.changeValueOfInput}  
                             error={errors.website}
                        />

                        <InputComponent
                            type='text'
                            info="Tell us where do you live" 
                            aria_describe='locationInfo' 
                            name='location' 
                            placeholder={!!profile.profile && !isEmpty(profile.profile) ? `Location: ${profile.profile.location}` : 'Location...'} 
                            value={this.state.location} 
                            onChange={this.changeValueOfInput}  
                            error={errors.location}
                         />

                        <InputComponent
                            type='text'
                            info="Please stick to csv (comma separated values) format (eg. Python,JavaScript,C++)" 
                            aria_describe='skillsInfo' 
                            name='skills' 
                            placeholder={!!profile.profile && !isEmpty(profile.profile) ? `Skills: ${profile.profile.skills} *` : 'Skills *'}
                            value={this.state.skills} 
                            onChange={this.changeValueOfInput}  
                            error={errors.skills}
                          />

                        <InputComponent
                            type='text'
                            info="If you want your latest repos and a Github link, include your username" 
                            aria_describe='githubusernameInfo' 
                            name='githubusername' 
                            placeholder={!!profile.profile && !isEmpty(profile.profile) ? `GitHub Username: ${profile.profile.githubusername}...` : 'Github Username...'}
                            value={this.state.githubusername} 
                            onChange={this.changeValueOfInput}  
                            error={errors.githubusername}
                        />

                            <div class="form-group">
                                <TextareaComponent
                                    info="Describe yourself" 
                                    aria_describe='bioInfo' 
                                    name='bio' 
                                    placeholder={!!profile.profile && !isEmpty(profile.profile) ? `Bio: ${profile.profile.bio}...` : 'A short bio of yourself...'} 
                                    value={this.state.bio} 
                                    onChange={this.changeValueOfInput}  
                                    error={errors.bio}
                                />
                            </div>

                            <div class="mb-3">

                                <button type="button"
                                    class="btn btn-light" 
                                    onClick={() => {
                                        this.setState((prev) => ({
                                            ...prev, 
                                            displaySocialInput: !this.state.displaySocialInput
                                        }));
                                    }}

                                >
                                Add Social Network Links
                                </button>

                                <span class="Optional"></span>
                            </div>


                            {this.state.displaySocialInput && socials}


                            <button type="submit" class="mt-2 btn main_color white_text"> Submit </button>

                        </form>
                        </div>
                    </div>
                    </div>
                </div>


                <Footer_main/>
            </div>
        )
    }
}

EditProfile.propTypes = {
    errors: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps =  state => ({
    errors: state.errors,
    profile: state.profile
});

export default connect(mapStateToProps, {createProfile, getCurrentProfile, clearErrors})(withRouter(EditProfile));