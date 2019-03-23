import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import classnames from 'classnames';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import {getPosts, addLike, removeLike} from '../../actions/postActions';


class Feed extends React.Component {
    constructor() {
        super();

        this.state = {
            likesStatus: {},
            liked: false
        };

        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
    }

    componentDidMount() {
        this.props.getPosts();
    }

    componentWillReceiveProps(newProps) {
      const likesStatus = newProps.posts.data.map(d => (
        {
          id: d._id,
          likes: d.likes
        }
      ));

      
      this.setState({
        likesStatus
      });
    }

    like(e) {
      e.persist();
      this.props.addLike(e.target.getAttribute('data-id'));

      this.setState(prev => ({
        ...prev, 
        liked: !this.state.liked
      }));
    }

    dislike(e) {
      e.persist();
      this.props.removeLike(e.target.getAttribute('data-id'));

      this.setState(prev => ({
        ...prev, 
        liked: !this.state.liked
      }));
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
                          <i data-id={d._id} class={classnames('fas fa-thumbs-up', 'fas', {'text-info': !this.state.liked})}></i>
                          <span data-id={d._id} class="badge badge-light">{d.likes.length}</span>
                        </button>

                        <button data-id={d._id} type="button" class="btn btn-light mr-1" onClick={this.dislike}>
                          <i data-id={d._id} class={classnames('fas fa-thumbs-down', 'fas', {'text-info': this.state.liked})}></i>
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
    profile: state.profile
});

export default connect(mapStateToProps, {getPosts, addLike, removeLike})(Feed);