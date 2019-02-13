import React from 'react';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';


class SignUp extends React.Component {
    render() {
        return (
            <div class='main_wrapper'>
            <Navbar_secondary />
            <section class="jumbotron d-flex justify-content-center m-0 pt-0">
                <div class='justify-content-center'>
                    <h1 class="logInH1 display-4">Create your account!</h1>

                    <form class='log-in-form'>
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input type="text" class="form-control"  aria-describedby="nameInfo" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label for="Email">Email address</label>
                            <input type="email" class="form-control" aria-describedby="emailInfo" placeholder="Enter email" />
                            <small id="emaiInfo" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" class="form-control" placeholder="Password..." />
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm password</label>
                            <input type="password" class="form-control" placeholder="Confirm password.." />
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