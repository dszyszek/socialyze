import React from 'react';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';

class Post extends React.Component {
    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="post mt-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">

                            <div class="card card-body mb-3">
                                <div class="row">
                                <div class="col-md-2">
                                    <a href="profile.html">
                                    <img class="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/anything?s=153&d=mm"
                                        alt="" />
                                    </a>
                                    <br />
                                    <p class="text-center">Anonymous_1</p>
                                </div>
                                <div class="col-md-10">
                                    <p class="lead">Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                                    belly beef short loin. Shank drumstick short loin, sirloin meatball pork chop andouille pastrami pork belly 
                                    bacon ball tip alcatra sausage pancetta.</p>
                                </div>
                                </div>
                            </div>

                            <div class="post-form mb-3">
                                <div class="card card-info">
                                <div class="card-header main_color text-white">
                                    Say Somthing...
                                </div>
                                <div class="card-body">
                                    <form>
                                    <div class="form-group">
                                        <textarea class="form-control form-control-lg" placeholder="Create a post"></textarea>
                                    </div>
                                    <button type="submit" class="btn main_color text-white">Submit</button>
                                    </form>
                                </div>
                                </div>
                            </div>

                            <div class="comments">

                                <div class="card card-body mb-3">
                                <div class="row">
                                    <div class="col-md-2">
                                    <a href="profile.html">
                                        <img class="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                                    </a>
                                    <br />
                                    <p class="text-center">Anonymous_2</p>
                                    </div>
                                    <div class="col-md-10">
                                    <p class="lead">Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                                    belly beef short loin.</p>
                                    </div>
                                </div>
                                </div>

                                <div class="card card-body mb-3">
                                <div class="row">
                                    <div class="col-md-2">
                                    <a href="profile.html">
                                        <img class="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                                    </a>
                                    <br />
                                    <p class="text-center">Anonymous_3</p>
                                    </div>
                                    <div class="col-md-10">
                                    <p class="lead"> Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                                    belly beef short loin.</p>
                                    </div>
                                </div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer_main/>
            </div>
        )
    }
}

export default Post;