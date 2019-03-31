import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';
import {getPost} from '../../actions/postActions';
import Loader from '../common/Loader';


class Post extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        // console.log(this.props);
        this.props.getPost(this.props.match.params.id);
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

                        {!isEmpty(postData.comments) ? postData.comments.map(comment => {
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
    posts: state.posts
});

export default connect(mapStateToProps, {getPost})(Post);