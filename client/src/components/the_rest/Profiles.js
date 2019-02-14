import React from 'react';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';

class AddEducation extends React.Component {
    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="profiles">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        <h1 class="display-4 text-center">Profiles</h1>
                        <p class="lead text-center">Browse and connect with other people</p>
                
                        <div class="card card-body bg-light mb-3">
                            <div class="row">
                            <div class="col-2">
                                <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                            </div>
                            <div class="col-lg-6 col-md-4 col-8">
                                <h3>Anonymous_1</h3>
                                <p>Developer at NASA</p>
                                <p>Warsaw, PL</p>
                                <a href="Profile" class="btn btn-info">View Profile</a>
                            </div>
                            <div class="col-md-4 d-none d-lg-block">
                                <h4>Skill Set</h4>
                                <ul class="list-group">
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>HTML</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>CSS</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>JavaScript</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>Python</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>C#</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                
                        <div class="card card-body bg-light mb-3">
                            <div class="row">
                            <div class="col-2">
                                <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                            </div>
                            <div class="col-lg-6 col-md-4 col-8">
                                <h3>Anonymous_2</h3>
                                <p>Developer at Google</p>
                                <p>Wroclove, PL</p>
                                <a href="Profile" class="btn btn-info">View Profile</a>
                            </div>
                            <div class="col-md-4 d-none d-lg-block">
                                <h4>Skill Set</h4>
                                <ul class="list-group">
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>HTML</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>CSS</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>PHP</li>
                                <li class="list-group-item">
                                    <i class="fa fa-check pr-1"></i>MySQL</li>
                                </ul>
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

export default AddEducation;