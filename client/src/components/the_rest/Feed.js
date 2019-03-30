import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {isEmpty, includes} from 'lodash';
import classnames from 'classnames';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import {getPosts, addLike, removeLike, addPost} from '../../actions/postActions';
import {getCurrentProfile, clearErrors} from '../../actions/profileActions';
import TextareaComponent from '../common/TextareaComponent';

class Feed extends React.Component {
    constructor() {
        super();

        this.state = {
            userLikesStatus: {},
            liked: false,
            postTextarea: ''
        };

        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
        this.setLikesColor = this.setLikesColor.bind(this);
        this.addPost = this.addPost.bind(this);
        this.writeContent = this.writeContent.bind(this);
    }

    componentDidMount() {
        this.props.getPosts();
        this.props.getCurrentProfile();
    }

    componentWillReceiveProps(newProps) {
      this.setLikesColor();
      // this.props.getPosts();
    }

    setLikesColor() {
      // console.log('executed seLikesColor');

      this.props.posts.data.map(post => {
        let likes = post.likes;

        if (!likes) {
          return;
        }

        likes.map(like => {
          // console.log(like.user, 'like from Feed');
          console.log(post, 'post from Feed');

          if (like.user === post.user) {
            // console.log('true');
            this.setState(prev => ({
              ...prev,
              userLikesStatus: {
                ...prev.userLikesStatus,
                [post._id]: {
                  userID: post.user,
                  isLiked: true
                }
              }
            }));

          } else {
            // console.log('false');
            this.setState(prev => ({
              ...prev,
              userLikesStatus: {
                ...prev.userLikesStatus,
                [post._id]: {
                  userID: post.user,
                  isLiked: false
                }
              }
            }));
          }

        });
      });

      // console.log(this.state.userLikesStatus, 'userLikesStatus from Feed');
    }

    like(e) {
      e.persist();
      this.props.addLike(e.target.getAttribute('data-id'));

      // future -> make this.setState async and execute this.props.getPosts() here (using componentWillReceiveProps makes too many calls)
      this.setState(prev => ({
        ...prev, 
        liked: true
      }));

      this.props.getPosts();
    }

    dislike(e) {
      e.persist();
      this.props.removeLike(e.target.getAttribute('data-id'));

      // future -> make this.setState async and execute this.props.getPosts() here (using componentWillReceiveProps makes too many calls)
      this.setState(prev => ({
        ...prev, 
        liked: false
      }));

      this.props.getPosts();
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
        name: this.props.profile.profile.handle,
        avatar: this.props.profile.profile.user.avatar
      };

      this.props.addPost(userInfo);
      this.props.getPosts();
      this.props.clearErrors();
    }

    render() {
        let content;
        const postsState = this.props.posts;

        if (!isEmpty(this.props.posts)) {
            const data = postsState.data;

            content = data.map(d => (
                <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-2">
                        <Link to="Profile">
                          <img class="rounded-circle" src={d.avatar}
                            alt="Profile picture" />
                        </Link>
                        <br />
                        <p class="text-center">{d.name}</p>
                      </div>

                      <div class="col-md-10">
                        <p class="lead">{d.text}</p>

                        <button data-id={d._id} type="button" class="btn btn-light mr-1" onClick={this.like}>
                          <i data-id={d._id} class={classnames('fas fa-thumbs-up', 'fas', {'text-info': this.state.liked})}></i>
                          <span data-id={d._id} class="badge badge-light">{d.likes ? d.likes.length: 0}</span>
                        </button>

                        <button data-id={d._id} type="button" class="btn btn-light mr-1" onClick={this.dislike}>
                          <i data-id={d._id} class={classnames('fas fa-thumbs-down', 'fas', {'text-info': !this.state.liked})}></i>
                          <span data-id={d._id} class="badge badge-light"></span>
                        </button>

                        <Link to="Post" class="btn main_color mr-1">
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