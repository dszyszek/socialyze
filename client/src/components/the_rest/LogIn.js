import React from 'react';

import Navbar_logged_out from './Navbar_logged_out';
import Footer_main from './Footer_main';
 
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

        console.log('User info to log in', userCredentials);
    }

    changeStateOfCheckbox() {
        this.setState({
            checkOut: !this.state.checkOut
        });
    }

    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_logged_out />
                <section class="jumbotron d-flex justify-content-center m-0">
                    <div class='justify-content-center'>
                        <h1 class="logInH1 display-4">Log in to your account!</h1>

                        <form class='log-in-form' noValidate onSubmit={this.submitForm} >
                            <div class="form-group">
                                <label for="Email">Email address</label>
                                <input type="email" class="form-control" aria-describedby="emailInfo" name='email' placeholder="Email..." value={this.state.email} onChange={this.changeValueOfInput}/>
                            </div>
                            <div class="form-group">
                                <label for="Password">Password</label>
                                <input type="password" class="form-control" name='password' placeholder="Password..." value={this.state.password} onChange={this.changeValueOfInput}/>
                            </div>
                            
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

export default LogIn;