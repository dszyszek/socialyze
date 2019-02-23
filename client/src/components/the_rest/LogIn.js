import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';

import Navbar_logged_out from './Navbar_logged_out';
import Footer_main from './Footer_main';
import {loginUser, logoutUser} from '../../actions/authActions';
import InputComponent from '../common/InputComponent';

class LogIn extends React.Component{
    constructor() {
        super();

        this.state = {
            emai: '',
            password: '',
            checkOut: false,
            errors: {}
        };

        this.changeValueOfInput = this.changeValueOfInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.changeStateOfCheckbox = this.changeStateOfCheckbox.bind(this);
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
        });
    }

    submitForm(e) {
        e.preventDefault();

        const userCredentials = {
            email: this.state.email,
            password: this.state.password,
            checkOut: this.state.checkOut,
            errors: this.state.errors
        };

        this.props.loginUser(userCredentials, this.props.history);
    }

    changeStateOfCheckbox() {
        this.setState({
            checkOut: !this.state.checkOut
        });
    }

    render() {
        const {errors} = this.state;

        return (
            <div class='main_wrapper'>
                <Navbar_logged_out />
                <section class="jumbotron d-flex justify-content-center m-0">
                    <div class='justify-content-center'>
                        <h1 class="logInH1 display-4">Log in to your account!</h1>

                        <form class='log-in-form' noValidate onSubmit={this.submitForm} >
                            <InputComponent label='Email' type='email' error={errors.email} aria_describe='emailInfo' name='email' placeholder='Email...' value={this.state.email} onChange={this.changeValueOfInput} />
                            
                            <InputComponent label='Password' type='password' error={errors.password} aria_describe='passwordInfo' name='password' placeholder='Password...' value={this.state.password} onChange={this.changeValueOfInput} />
                            
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" name='checkOut' onChange={this.changeStateOfCheckbox}/>
                                <label class="formCheck" for="checkBox">Check me out</label>
                            </div>
                            <button type="submit" class="aaa btn main_color white_text">Submit</button>
                        
                        </form>
                    </div>
                    

                </section>
                <Footer_main />

            </div>
        )
    }

};

LogIn.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser, logoutUser})(withRouter(LogIn));