import React from 'react';
import {Link} from 'react-router-dom';

const GithubTab = (props) => {

    let content;
    console.log(props.githubUsername, 'from ghTab');

    if (props.githubUsername) {
        content = (
            <div class="row">
                <div class="col-md-6">
                <h4>
                    <Link to='Dashboard' class="" style={{color: '#297c6c'}} target="_blank"> Some repo
                    </Link>
                </h4>
                <p>Description here</p>
                </div>
                <div class="col-md-6">
                <span class="badge badge-info mr-1">
                    Stars: 44
                </span>
                <span class="badge badge-secondary mr-1">
                    Watchers: 21
                </span>
                <span class="badge badge-success">
                    Forks: 122
                </span>
                </div>
            </div>
        );
    } else {
        content = (
            <div class="row col-md-6">
                <h4> No content to show </h4>
            </div>
        );
    }

    return (
            <div>
                <h3 class="mb-4">Latest Github Repos</h3>
                                
                <div class="card card-body mb-2">
                    {content}
                </div>
            </div>
    );
};

export default GithubTab;