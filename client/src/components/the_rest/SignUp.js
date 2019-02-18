import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';

import Navbar_logged_out from './Navbar_logged_out';
import Footer_main from './Footer_main';
import {registerUser} from '../../actions/authActions';


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

        // console.log('New user: ', userCredentials);

        // axios.post('http://localhost:3000/api/users/register', userCredentials)
        // .then(res => console.log(res.data))
        // .catch(e => this.setState({errors: e.response.data}));

        this.props.registerUser(userCredentials);
    }

    render() {
        const {errors} = this.state;

        return (
            <div class='main_wrapper'>
            <Navbar_logged_out />
            <section class="jumbotron d-flex justify-content-center m-0 pt-0">
                <div class='justify-content-center'>
                    <h1 class="logInH1 display-4">Create your account!</h1>

                    <form class='log-in-form' noValidate onSubmit={this.submitForm}>
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input type="text" class={classnames('form-control',
                            {
                                'is-invalid': errors.name
                            })}
                             aria-describedby="nameInfo" name='name' placeholder="Name" value={this.state.name} onChange={this.changeValueOfInput} />
                             {this.state.errors && <div class='invalid-feedback'>{this.state.errors.name}</div>}
                        </div>
                        <div class="form-group">
                            <label for="Email">Email address</label>
                            <input type="email" class={classnames('form-control',
                            {
                                'is-invalid': errors.email
                            })}
                            aria-describedby="emailInfo" name='email' placeholder="Enter email" value={this.state.email} onChange={this.changeValueOfInput}/>

                            <small id="emaiInfo" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            {this.state.errors && <div class='invalid-feedback'>{this.state.errors.email}</div>}
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class={classnames('form-control',
                            {
                                'is-invalid': errors.password
                            })}
                            placeholder="Password..." name='password' value={this.state.password} onChange={this.changeValueOfInput}/>
                            {this.state.errors && <div class='invalid-feedback'>{this.state.errors.password}</div>}
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm password</label>
                            <input type="password" class={classnames('form-control',
                            {
                                'is-invalid': errors.confirmPassword
                            })}
                            placeholder="Confirm password.." name='confirmPassword' value={this.state.confirmPassword} onChange={this.changeValueOfInput}/>
                            {this.state.errors && <div class='invalid-feedback'>{this.state.errors.confirmPassword}</div>}
                        </div>
                        
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
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {registerUser})(SignUp);