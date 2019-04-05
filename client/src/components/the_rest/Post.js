import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {isEmpty, isEqual} from 'lodash';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import {getPost, addComment} from '../../actions/postActions';
import {getCurrentProfile} from '../../actions/profileActions';
import Loader from '../common/Loader';
import TextareaComponent from '../common/TextareaComponent';


class Post extends React.Component {
    constructor() {
        super();
        this.state = {
            postTextarea: ''
        };

        this.writeContent = this.writeContent.bind(this);
        this.addComment = this.addComment.bind(this);
        this.makeAsync = this.makeAsync.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentProfile();
        this.props.getPost(this.props.match.params.id);
    }

    writeContent(e) {
        e.persist();
        this.setState(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      }

      makeAsync(action, args) {
        return new Promise((resolve, reject) => {
            try {
                if (args.length > 0) {
                    action(...args);
                } else {
                    action();
                }
                resolve('action made');
            } catch(e) {
                reject(e);
            }
        });
      }

    addComment(e) {
        e.preventDefault();
        const commentInfo = {
          text: this.state.postTextarea,
          name: this.props.profile.profile.handle,
          avatar: this.props.profile.profile.user.avatar,
          user: this.props.profile.profile.user._id
        };
  
        this.makeAsync(this.props.addComment, [this.props.match.params.id, commentInfo])
        .then(res => this.makeAsync(this.props.getPost, [this.props.match.params.id]))
        .catch(e => console.log(e));
      }

    render() {
        let content;
        
        if (!isEmpty(this.props.posts.data)) {
            const postData = this.props.posts.data[0];

            content = (
                <div class="col-md-12">
                    <div class="card card-body mb-3">
                        <div class="row">
                        <div class="col-md-2">
                            <Link to="Profile">
                            <img class="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/anything?s=153&d=mm"
                                alt="" />
                            </Link>
                            <br />
                            <p class="text-center">{postData.name}</p>
                        </div>
                        <div class="col-md-10">
                            <p class="lead">{postData.text}</p>
                        </div>
                        </div>
                    </div>

                    <div class="post-form mb-3">
                        <div class="card card-info">
                        <div class="card-header main_color text-white">
                            Say what you think about that...
                        </div>
                        <div class="card-body">
                            <form onSubmit={this.addComment}>
                                <TextareaComponent
                                aria_describe='postTextareaInfo' 
                                name='postTextarea' 
                                placeholder={'Say something...'} 
                                value={this.state.postTextarea} 
                                onChange={this.writeContent}  
                                />

                                <button type="submit" class="btn main_color text-white">Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>

                    <div class="comments">

                        {!isEmpty(postData.comments) ? postData.comments.map(comment => {
                        return (
                            <div class="card card-body mb-3">
                                <div class="row">
                                    <div class="col-md-2">
                                    <Link to="Profile">
                                        <img class="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/anything?s=153&d=mm" alt="" />
                                    </Link>
                                    <br />
                                    <p class="text-center">{comment.name}</p>
                                    </div>
                                    <div class="col-md-10">
                                    <p class="lead">{comment.text}</p>
                                    </div>
                                </div>
                            </div>
                        );
                        }) : (
                            <div class="card card-body mb-3">
                                <div class="row">
                                    <div class="col-md-10">
                                        <p class="lead">There are no comments yet.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            );
        } else {
            content = <Loader />
        }

        return (
            <div class='main_wrapper'>
                <Navbar_secondary/>

                <div class="post mt-4">
                    <div class="container">
                        <div class="row">
                            {content}
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

export default connect(mapStateToProps, {getPost, getCurrentProfile, addComment})(Post);