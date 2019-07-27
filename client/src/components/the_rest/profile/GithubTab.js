import React from 'react';
import * as axios from 'axios';


const getGithubInfo = (userName) => {
    const link = `https://api.github.com/users/${userName}/repos`;

    try {
        delete axios.defaults.headers.common["x-auth"];
       
        return axios.get(link).then(res => res.data);

    } catch (e) {
        return false;
    }
}

const serveContent = (userName) => {
    let content;
    const payload = getGithubInfo(userName);
    console.log(payload);

    if (payload) {
        content = payload.map(rep => {
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
    } else {
        content = (
            <div class="row col-md-6">
                <h4> Cannot fetch your profile </h4>
            </div>
        );
    }

    return content;
}


const GithubTab = props => {
    let body;
    
    if (props.githubUsername) {
        body = serveContent(props.githubUsername);
    } else {
        body = (
            <div class="row col-md-6">
                <h4> No content to show </h4>
            </div>
        );
    }

    return (
            <div>
                <h3 class="mb-4" style={{color: '#297c6c'}}>Latest Github Repos</h3>    

                <div class="card card-body mb-2 overflow-auto repos-list">
                    {body}  
                </div>
            </div>
    );
};

export default GithubTab;

// class GithubTab extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             githubUsername: props.githubUsername
//         };
//     }

//     getGithubInfo() {
//         const userName = this.state.githubUsername;
//         const link = `https://api.github.com/users/${userName}/repos`;

//         try {
//             delete axios.defaults.headers.common["x-auth"];
           
//             axios.get(link)
//                 .then(res => {
//                     return {
//                         data: res.data
//                     };
//             })

//         } catch (e) {
//             return {
//                 data: false
//             };
//         }
//     }

//     serveContent() {
//         let content;
//         const {data} = getGithubInfo();

//         if (data) {
//             content = data.map(rep => {
//                 return (
//                 <div class="row" style={{borderBottom: '1px solid rgba(0,0,0,.125)', padding: '10px', marginLeft: '10px', marginRight: '10px'}}>
//                     <div class="col-md-6">
//                     <h4>    
//                         <a href={rep.html_url} class="" style={{color: 'black'}} target="_blank"> {rep.name}
//                         </a>
//                     </h4>

//                     </div>
//                     <div class="col-md-6 text-right">
//                     <span class="badge badge-info mr-1">
//                         Stars: {rep.stargazers_count}
//                     </span>
//                     <span class="badge badge-secondary mr-1">
//                         Watchers: {rep.watchers_count}
//                     </span>
//                     <span class="badge badge-success">
//                         Forks: {rep.forks_count}
//                     </span>
//                     </div>
//                 </div>
//             )
//         })
//         } else {
//             content = (
//                 <div class="row col-md-6">
//                     <h4> Cannot fetch your profile </h4>
//                 </div>
//             );
//         }

//         return content;
//     }

//     render () {
//         let body;
        
//         if (this.state.githubUsername) {
//             body = this.serveContent();
//         } else {
//             body = (
//                 <div class="row col-md-6">
//                     <h4> No content to show </h4>
//                 </div>
//             );
//         }

//         return (
//                 <div>
//                     <h3 class="mb-4" style={{color: '#297c6c'}}>Latest Github Repos</h3>    

//                     <div class="card card-body mb-2 overflow-auto repos-list">
                    
//                         {body}  

//                     </div>
//                 </div>
//         );
//     };
// };

// export default GithubTab;



