import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import TextareaComponent from '../common/TextareaComponent';
import {getCurrentProfile, setEducation, clearErrors} from '../../actions/profileActions';
import InputComponent from '../common/InputComponent';

class AddEducation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            school: '',
            degree: '',
            fieldofstudy: '',
            from: '',
            to: '',
            current: false,
            description: ''
        };

        this.changeValueOfInput = this.changeValueOfInput.bind(this);
        this.submitEducation = this.submitEducation.bind(this);
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

    submitEducation(e) {
        e.preventDefault();
        this.props.setEducation(this.state, this.props.history);
    }

    render() {
        const {errors} = this.props;
        const {profile} = this.props;

        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="add-education">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8 mt-4 mr-auto mb-auto ml-auto">
                        <Link to="Dashboard" class="btn btn-light">
                            Go Back
                        </Link>
                        <h1 class="display-4 text-center">Add Your Education</h1>
                        <p class="lead text-center">Add any school, bootcamp, etc that you have attended</p>
                        <small class="d-block pb-3">* = required field</small>
                        <form action="login.html">
                        
                            <InputComponent 
                            placeholder='School Or Bootcamp *'
                            name='school'
                            onChange={this.changeValueOfInput}  
                            addClass={['form-control-lg']}
                            error={errors.school} />

                            <InputComponent 
                            placeholder='Degree Or Certificate *'
                            name='degree'
                            onChange={this.changeValueOfInput}  
                            addClass={['form-control-lg']}
                            error={errors.degree} />

                            <InputComponent 
                            placeholder='Field Of Study *'
                            name='fieldofstudy'
                            onChange={this.changeValueOfInput}  
                            addClass={['form-control-lg']}
                            error={errors.fieldofstudy} />

                            <h6>From Date</h6>

                            <InputComponent 
                            type='date'
                            name='from'
                            onChange={this.changeValueOfInput}  
                            addClass={['form-control-lg']}
                            error={errors.from} />

                            <h6>To Date</h6>

                            <InputComponent 
                            type='date'
                            name='to'
                            onChange={this.changeValueOfInput}  
                            addClass={['form-control-lg']}
                            error={errors.to} />

                            <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" name="current" value="" id="current" onChange={() => {this.setState((prev) => ({...prev, current: !this.state.current}))}} />
                            <label class="form-check-label" for="current">
                                Current Job
                            </label>
                            </div>

                            <TextareaComponent
                                info="Tell us about your experience and what you learned" 
                                aria_describe='descriptionInfo' 
                                name='description' 
                                placeholder={'Program Description...'} 
                                value={this.state.description} 
                                onChange={this.changeValueOfInput}  
                                error={errors.description}
                            />

                            <button type="submit" class="mt-2 btn main_color white_text" onClick={this.submitEducation}>Submit</button>

                        </form>
                        </div>
                    </div>
                    </div>
                </div>

                <Footer_main/>
            </div>
        );
    }
}

AddEducation.propTypes = {
    errors: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps =  state => ({
    errors: state.errors,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile, setEducation, clearErrors})(withRouter(AddEducation));