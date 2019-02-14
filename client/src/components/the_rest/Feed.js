import React from 'react';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';

class Feed extends React.Component {
    render() {
        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                    
                <div class="feed">
                <div class="container">
                  <div class="row mt-5">
                    <div class="col-md-12">
                      <div class="post-form mb-3">
                        <div class="card card-info">
                          <div class="card-header main_color text-white">
                            Say Something...
                          </div>
                          <div class="card-body">
                            <form>
                              <div class="form-group">
                                <textarea class="form-control form-control-lg" placeholder="Create a post"></textarea>
                              </div>
                              <button type="submit" class="mt-2 btn btn-light">Submit</button>
                            </form>
                          </div>
                        </div>
                      </div>
            

                      <div class="posts">
                        <div class="card card-body mb-3">
                          <div class="row">
                            <div class="col-md-2">
                              <a href="profile.html">
                                <img class="rounded-circle" src="https://www.gravatar.com/avatar/anything?s=153&d=mm"
                                  alt="" />
                              </a>
                              <br />
                              <p class="text-center">Anonymous</p>
                            </div>

                            <div class="col-md-10">
                              <p class="lead"> Bacon ipsum dolor amet capicola hamburger salami burgdoggen ball tip meatball, andouille cow jowl cupim swine t-bone pork 
                                belly beef short loin. Shank drumstick short loin, sirloin meatball pork chop andouille pastrami pork belly 
                                bacon ball tip alcatra sausage pancetta. 
                                </p>
                              <button type="button" class="btn btn-light mr-1">
                                <i class="text-info fas fa-thumbs-up"></i>
                                <span class="badge badge-light">1</span>
                              </button>
                              <button type="button" class="btn btn-light mr-1">
                                <i class="text-secondary fas fa-thumbs-down"></i>
                              </button>
                              <a href="post.html" class="btn main_color mr-1">
                                Comments
                              </a>

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

export default Feed;