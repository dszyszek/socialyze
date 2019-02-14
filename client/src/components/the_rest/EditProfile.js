import React from 'react';
import {Link} from 'react-router-dom';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';

class EditProfile extends React.Component {
    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>


                <div class="create-profile mt-4">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-8 m-auto">
                        <Link to="Dashboard" class="btn btn-light">
                            Go Back
                        </Link>
                        <h1 class="display-4 text-center">Edit Your Profile</h1>
                        <p class="lead text-center">Ok, now tell something about yourself</p>
                        <small class="d-block pb-3">* = required field</small>
                        <form action="Dashboard">
                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="* Profile handle" name="handle"
                                required />
                            <small class="form-text">Nickname (This CAN'T be changed later)</small>
                            </div>
                            <div class="form-group">
                            <select class="form-control form-control-lg" name="status">
                                <option value="0" selected>* Select Professional Status</option>
                                <option value="Developer">Developer</option>
                                <option value="Junior Developer">Junior Developer</option>
                                <option value="Senior Developer">Senior Developer</option>
                                <option value="Manager">Manager</option>
                                <option value="Student or Learning">Student</option>
                                <option value="Other">Other</option>
                            </select>
                            <small class="form-text">Current point of your career</small>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Company" name="company" />
                            <small class="form-text">Name of the company you're working for (or you own)</small>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Website" name="website"
                            />
                            <small class="form-text">Place URL of your (or company) website</small>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Location" name="location" />
                            <small class="form-text">Tell us where do you live</small>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Skills" name="skills" />
                            <small class="form-text">Please stick to csv (comma separated values) format (eg. Python,JavaScript,C++)</small>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Github Username" name="githubusername"
                            />
                            <small class="form-text">If you want your latest repos and a Github link, include your username</small>
                            </div>
                            <div class="form-group">
                            <textarea class="form-control form-control-lg" placeholder="A short bio of yourself" name="bio"></textarea>
                            <small class="form-text">Describe yourself</small>
                            </div>

                            <div class="mb-3">
                            <button type="button" class="btn btn-light">Add Social Network Links</button>
                            <span class="Optional"></span>
                            </div>

                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <i class="fab fa-facebook"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control form-control-lg" placeholder="Facebook Page URL" name="facebook" />
                            </div>

                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <i class="fab fa-linkedin"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control form-control-lg" placeholder="Linkedin Profile URL" name="linkedin" />
                            </div>

                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                <i class="fab fa-instagram"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control form-control-lg" placeholder="Instagram Page URL" name="instagram" />
                            </div>
                            <button type="submit" class="mt-2 btn main_color white_text">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>


                <Footer_main/>
            </div>
        )
    }
}

export default EditProfile;