import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Navbar_logged_out from './Navbar_logged_out';
import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import {registerUser, logoutUser} from '../../actions/authActions';
import InputComponent from '../common/InputComponent';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.changeValueOfInput = this.changeValueOfInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        if (localStorage.jwt_token) {
            this.props.logoutUser();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    changeValueOfInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();

        const userCredentials = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }

        this.props.registerUser(userCredentials, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return (
            <div class='main_wrapper'>
            {localStorage.jwt_token ? <Navbar_secondary /> : <Navbar_logged_out />}
            <section class="jumbotron d-flex justify-content-center m-0 pt-0">
                <div class='justify-content-center'>
                    <h1 class="logInH1 display-4">Create your account!</h1>

                    <form class='log-in-form' noValidate onSubmit={this.submitForm}>
                        <InputComponent label='Name' type='text' error={errors.name} aria_describe='nameInfo' name='name' placeholder='Name...' value={this.state.name} onChange={this.changeValueOfInput} />
                        
                        <InputComponent label='Email' type='email' error={errors.email} aria_describe='emailInfo' name='email' placeholder='Email...' value={this.state.email} onChange={this.changeValueOfInput} info="We'll never share your email with anyone else." />

                        <InputComponent label='Password' type='password' error={errors.password} aria_describe='passwordInfo' name='password' placeholder='Password...' value={this.state.password} onChange={this.changeValueOfInput} />
                        
                        <InputComponent label='Confirm password' type='password' error={errors.confirmPassword} aria_describe='confirmPasswordInfo' name='confirmPassword' placeholder='Confirm password...' value={this.state.confirmPassword} onChange={this.changeValueOfInput} />
                        
                        <button type="submit" class="aaa btn main_color white_text">Submit</button>
                    
                    </form>
                </div>
                

            </section>
            <Footer_main />

        </div>
        );
    }
}

SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser, logoutUser})(withRouter(SignUp));