import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import {getCurrentProfile, setEducation, clearErrors} from '../../actions/profileActions';
import TextareaComponent from '../common/TextareaComponent';
import InputComponent from '../common/InputComponent';

class AddExperience extends React.Component {

    constructor() {
        super();

        this.state = {
            title: '',
            company: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: ''
        };

        this.changeValueOfInput = this.changeValueOfInput.bind(this);
        this.submitExperience = this.submitExperience.bind(this);
    }

    componentWillMount() {
        this.props.getCurrentProfile();
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    changeValueOfInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitExperience(e) {
        e.preventDefault();
        this.props.setEducation(this.state, this.props.history, 'experience');
    }

    render() {
        const {errors} = this.props;

        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="section add-experience">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8 mt-4 mr-auto mb-auto ml-auto">
                            <Link to="Dashboard" class="btn btn-light">
                                Go Back
                            </Link>
                            <h1 class="display-4 text-center">Add Your Experience</h1>
                            <p class="lead text-center">Add any developer/programming positions that you have had in the past</p>
                            <small class="d-block pb-3">* = required field</small>
                            <form action="add-education.html">

                                <InputComponent 
                                placeholder='Title of experience *'
                                name='title'
                                onChange={this.changeValueOfInput}  
                                addClass={['form-control-lg']}
                                error={errors.title}
                                value={this.state.title} />

                                <InputComponent 
                                placeholder='Company name *'
                                name='company'
                                onChange={this.changeValueOfInput}  
                                addClass={['form-control-lg']}
                                error={errors.company}
                                value={this.state.company} />

                                <InputComponent 
                                placeholder='Location of company...'
                                name='location'
                                onChange={this.changeValueOfInput}  
                                addClass={['form-control-lg']}
                                error={errors.location}
                                value={this.state.location} />

                                <h6>From Date</h6>

                                <InputComponent 
                                type='date'
                                name='from'
                                onChange={this.changeValueOfInput}  
                                addClass={['form-control-lg']}
                                error={errors.from}
                                value={this.state.from} />

                                <h6>To Date</h6>

                                <InputComponent 
                                type='date'
                                name='to'
                                onChange={this.changeValueOfInput}  
                                addClass={['form-control-lg']}
                                error={errors.to}
                                value={this.state.to} />

                                <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" name="current" id="current" onChange={() => {this.setState((prev) => ({...prev, current: !this.state.current}))}} />
                                <label class="form-check-label" for="current">
                                    Current Job
                                </label>
                                </div>

                                <TextareaComponent
                                info="Some of your responsabilities, etc" 
                                aria_describe='descriptionInfo' 
                                name='description' 
                                placeholder={'Job Description...'} 
                                value={this.state.description} 
                                onChange={this.changeValueOfInput}  
                                error={errors.description}
                                />

                                <button type="submit" class="mt-2 btn main_color white_text" onClick={this.submitExperience}>Submit</button>
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

AddExperience.propTypes = {
    errors: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps =  state => ({
    errors: state.errors,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile, setEducation, clearErrors})(AddExperience);