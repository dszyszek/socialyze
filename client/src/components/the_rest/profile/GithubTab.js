import React from 'react';
import * as axios from 'axios';


class GithubTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUsername: props.githubUsername,
            data: null,
            error: ''
        };
    }

    componentWillReceiveProps(newProps) {
        const userName = newProps.githubUsername;
        if (userName) {
            const link = `https://api.github.com/users/${userName}/repos`;

            try {
                delete axios.defaults.headers.common["x-auth"];
               
                axios.get(link)
                    .then(res => {
                        this.setState(prev => ({
                            ...prev,
                            githubUsername: newProps.githubUsername,
                            data: res.data
                        }));
                })
    
            } catch (e) {
                this.setState(prev => ({
                    ...prev,
                    githubUsername: newProps.githubUsername,
                    error: 'Cannot fetch profile'
                }));
            }
        }
    }

    render () {
        let content;

        if (this.state.data) {
            content = this.state.data.map(rep => {
                return (
                <div class="row" style={{borderBottom: '1px solid rgba(0,0,0,.125)', padding: '10px', marginLeft: '10px', marginRight: '10px'}}>
                    <div class="col-md-6">
                    <h4>    
                        <a href={rep.html_url} class="" style={{color: 'black'}} target="_blank"> {rep.name}
                        </a>
                    </h4>

                    </div>
                    <div class="col-md-6 text-right">
                    <span class="badge badge-info mr-1">
                        Stars: {rep.stargazers_count}
                    </span>
                    <span class="badge badge-secondary mr-1">
                        Watchers: {rep.watchers_count}
                    </span>
                    <span class="badge badge-success">
                        Forks: {rep.forks_count}
                    </span>
                    </div>
                </div>
            )
        })
        } else if (this.state.error) {
            content = (
                <div class="row col-md-6">
                    <h4> Cannot fetch your profile </h4>
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
                    <h3 class="mb-4" style={{color: '#297c6c'}}>Latest Github Repos</h3>    

                    <div class="card card-body mb-2 overflow-auto repos-list">
                    
                        {content}  

                    </div>
                </div>
        );
    };
};

export default GithubTab;