import React from 'react';
import {Link} from 'react-router-dom';

class ProfileBox extends React.Component {
    render() {
        return (
            <div class="card card-body bg-light mb-3">
                <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                </div>
                <div class="col-lg-6 col-md-4 col-8">
                    <h3>Anonymous_1</h3>
                    <p>Developer at NASA</p>
                    <p>Warsaw, PL</p>
                    <Link to="Profile" class="btn main_color">View Profile</Link>
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
        );
    }
}

export default ProfileBox;