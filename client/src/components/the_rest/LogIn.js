import React from 'react';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
 
class LogIn extends React.Component{

    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary />
                <section class="jumbotron d-flex justify-content-center no_margin">
                    <div class='justify-content-center'>
                        <h1 class="logInH1 display-4">Log in to your account!</h1>

                        <form class='log-in-form'>
                            <div class="form-group">
                                <label for="Email">Email address</label>
                                <input type="email" class="form-control" aria-describedby="emailInfo" placeholder="Email..." />
                            </div>
                            <div class="form-group">
                                <label for="Password">Password</label>
                                <input type="password" class="form-control" placeholder="Password..." />
                            </div>
                            
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
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