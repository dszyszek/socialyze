import React from 'react';
import axios from 'axios';

import Navbar_logged_out from './Navbar_logged_out';
import Footer_main from './Footer_main';


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

        axios.post('http://localhost:3000/api/users/register', userCredentials)
        .then(res => console.log(res.data))
        .catch(e => console.log(e.response.data));
    }

    render() {
        return (
            <div class='main_wrapper'>
            <Navbar_logged_out />
            <section class="jumbotron d-flex justify-content-center m-0 pt-0">
                <div class='justify-content-center'>
                    <h1 class="logInH1 display-4">Create your account!</h1>

                    <form class='log-in-form' onSubmit={this.submitForm}>
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input type="text" class="form-control"  aria-describedby="nameInfo" name='name' placeholder="Name" value={this.state.name} onChange={this.changeValueOfInput} />
                        </div>
                        <div class="form-group">
                            <label for="Email">Email address</label>
                            <input type="email" class="form-control" aria-describedby="emailInfo" name='email' placeholder="Enter email" value={this.state.email} onChange={this.changeValueOfInput}/>
                            <small id="emaiInfo" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" placeholder="Password..." name='password' value={this.state.password} onChange={this.changeValueOfInput}/>
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm password</label>
                            <input type="password" class="form-control" placeholder="Confirm password.." name='confirmPassword' value={this.state.confirmPassword} onChange={this.changeValueOfInput}/>
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

export default SignUp;