import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import InputComponent from '../common/InputComponent';
import TextareaComponent from '../common/TextareaComponent';
import {createProfile} from '../../actions/profileActions';

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

    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
            this.setState({
                errors: newProps.errors
            });
        }
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
        const socials = (
            <div>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="fab fa-facebook"></i>
                    </span>
                </div>
                <input type="text" class="form-control form-control-lg" placeholder="Facebook Page URL" name="facebook" value={this.state.facebook} onChange={this.changeValueOfInput}/>
                </div>

                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="fab fa-linkedin"></i>
                    </span>
                </div>
                <input type="text" class="form-control form-control-lg" placeholder="Linkedin Profile URL" name="linkedin" value={this.state.linkedin} onChange={this.changeValueOfInput}/>
                </div>

                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="fab fa-instagram"></i>
                    </span>
                </div>
                <input type="text" class="form-control form-control-lg" placeholder="Instagram Page URL" name="instagram" value={this.state.instagram} onChange={this.changeValueOfInput}/>
                </div>
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
                        <h1 class="display-4 text-center">{isEmpty(this.props.profile.profile) ? 'Create' : 'Edit'} Your Profile</h1>
                        <p class="lead text-center">Ok, now tell something about yourself</p>
                        <small class="d-block pb-3">* = required field</small>
                        
                        <form onSubmit={this.submitProfile}>

                        <InputComponent
                             type='text'
                             info="Nickname (This CAN'T be changed later)" 
                             aria_describe='handleInfo' 
                             name='handle' 
                             placeholder='* Profile handle' 
                             value={this.state.handle} 
                             onChange={this.changeValueOfInput}
                             error={errors.handle}
                        />
                         

                            <div class="form-group">
                                <select class="form-control form-control-lg" name="status" onChange={this.updateStatus} error={errors.status}>
                                    <option value="0" selected>* Select Professional Status</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Junior Developer">Junior Developer</option>
                                    <option value="Senior Developer">Senior Developer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Student or Learning">Student</option>
                                    <option value="Other">Other</option>
                                </select>
                                <small class="form-text">Current point of your career</small>
                            </div>

                        <InputComponent
                             type='text'
                             info="Name of the company you're working for (or you own)" 
                             aria_describe='companyInfo' 
                             name='company' 
                             placeholder='Company...' 
                             value={this.state.company} 
                             onChange={this.changeValueOfInput}  
                             error={errors.company}
                        />

                        <InputComponent
                             type='text'
                             info="Place URL of your (or company) website" 
                             aria_describe='websiteInfo' 
                             name='website' 
                             placeholder='Website...' 
                             value={this.state.website} 
                             onChange={this.changeValueOfInput}  
                             error={errors.website}
                        />

                        <InputComponent
                            type='text'
                            info="Tell us where do you live" 
                            aria_describe='locationInfo' 
                            name='location' 
                            placeholder='Location...' 
                            value={this.state.location} 
                            onChange={this.changeValueOfInput}  
                            error={errors.location}
                         />

                        <InputComponent
                            type='text'
                            info="Please stick to csv (comma separated values) format (eg. Python,JavaScript,C++)" 
                            aria_describe='skillsInfo' 
                            name='skills' 
                            placeholder='Skills...' 
                            value={this.state.skills} 
                            onChange={this.changeValueOfInput}  
                            error={errors.skills}
                          />

                        <InputComponent
                            type='text'
                            info="If you want your latest repos and a Github link, include your username" 
                            aria_describe='githubusernameInfo' 
                            name='githubusername' 
                            placeholder='Github Username...' 
                            value={this.state.githubusername} 
                            onChange={this.changeValueOfInput}  
                            error={errors.githubusername}
                        />

                            <div class="form-group">
                                <TextareaComponent
                                    info="Describe yourself" 
                                    aria_describe='bioInfo' 
                                    name='bio' 
                                    placeholder='A short bio of yourself...' 
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
                                        }))
                                    }}

                                >
                                Add Social Network Links
                                </button>

                                <span class="Optional"></span>
                            </div>


                            {this.state.displaySocialInput && socials}


                            <button type="submit" class="mt-2 btn main_color white_text">Submit</button>
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

export default connect(mapStateToProps, {createProfile})(withRouter(EditProfile));