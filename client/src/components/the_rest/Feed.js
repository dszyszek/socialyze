import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {isEmpty, isEqual} from 'lodash';
import classnames from 'classnames';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import {getPosts, addLike, removeLike, addPost} from '../../actions/postActions';
import {getCurrentProfile, clearErrors} from '../../actions/profileActions';
import TextareaComponent from '../common/TextareaComponent';
import Loader from '../common/Loader';

class Feed extends React.Component {
    constructor() {
        super();

        this.state = {
            userLikesStatus: {},
            postTextarea: ''
        };

        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
        this.setLikesColor = this.setLikesColor.bind(this);
        this.addPost = this.addPost.bind(this);
        this.writeContent = this.writeContent.bind(this);
    }

    componentWillMount() {
        this.props.getPosts();
        this.props.getCurrentProfile();

    }

    componentWillUpdate(oldProps) {
      if (!isEqual(oldProps.posts.data, this.props.posts.data)) {
        this.props.getPosts();
      }
    }

    componentWillReceiveProps(newProps) {
      if (!isEmpty(newProps.profile.profile)) {
        this.setLikesColor(newProps.profile.profile);
      }

    }

    setLikesColor(profile) {
      let likesStatus = {};

      this.props.posts.data.map((post, i) => {

        if (isEmpty(post.likes)) {
          likesStatus[post._id] = false;
        } else {
          post.likes.map(like => {
            if (like.user === profile.user._id) {
              likesStatus[post._id] = true;
            }
  
          });
        }
      });

        this.setState(prev => ({
          ...prev,
          userLikesStatus: likesStatus
        }));

    }

    like(e) {
      e.persist();
      this.props.addLike(e.target.getAttribute('data-id'));
    }

    dislike(e) {
      e.persist();
      this.props.removeLike(e.target.getAttribute('data-id'));
    }

    writeContent(e) {
      e.persist();
      this.setState(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }

    addPost(e) {
      e.preventDefault();
      const userInfo = {
        text: this.state.postTextarea,
        name: this.props.profile.profile.user.name,
        avatar: this.props.profile.profile.user.avatar
      };

      this.props.addPost(userInfo);
      this.props.getPosts();
      this.props.clearErrors();
    }

    render() {
        let content;


        if (isEmpty(this.props.posts.data)){
          content = <Loader />
        } else {
            const data = this.props.posts.data;

            content = data.map(d => (
                <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-2">
                        <Link to={`/Profile/${d.user}`}>
                          <img class="rounded-circle photoSize_posts" src={d.avatar}
                            alt="Profile picture"
                           />
                        </Link>
                        <br />
                        <p class="text-center">{d.name}</p>
                      </div>

                      <div class="col-md-10">
                        <p class="lead">{d.text}</p>

                        <button data-id={d._id} type="button" class="btn btn-light mr-1" onClick={this.like}>
                          <i data-id={d._id} class={classnames('fas fa-thumbs-up', 'fas', {'text-info': this.state.userLikesStatus[d._id]})}></i>
                          <span data-id={d._id} class="badge badge-light">{d.likes ? d.likes.length: 0}</span>
                        </button>

                        <button data-id={d._id} type="button" class="btn btn-light mr-1" onClick={this.dislike}>
                          <i data-id={d._id} class={classnames('fas fa-thumbs-down', 'fas', {'text-info': !this.state.userLikesStatus[d._id]})}></i>
                          <span data-id={d._id} class="badge badge-light"></span>
                        </button>

                        <Link to={`/Post/${d._id}`} class="btn main_color mr-1">
                          Comments
                        </Link>

                      </div>
                    </div>
                </div>
            ));
                    
        }

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
                          Add new post
                        </div>
                        <div class="card-body">
                          <form onSubmit={this.addPost}>
                            <div class="form-group">

                            <TextareaComponent
                              aria_describe='postTextareaInfo' 
                              name='postTextarea' 
                              placeholder={'Say something...'} 
                              value={this.state.postTextarea} 
                              onChange={this.writeContent}  
                              error={this.props.errors.text}
                            />
                            
                            </div>
                            <button type="submit" class="mt-2 btn btn-light">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
          

                    <div class="posts">
                      {content}
          
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

const mapStateToProps = state => ({
    posts: state.posts,
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, {getPosts, addLike, removeLike, getCurrentProfile, addPost, clearErrors})(Feed);