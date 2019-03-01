import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

class ExperienceTab extends React.Component {
    constructor() {
        super();

        this.createTable = this.createTable.bind(this);
    }

    createTable() {
        console.log('in tableContent');
        const {profile} = this.props;
        const tableContent = [];

        profile.profile.experience.forEach(exp => {
            tableContent.push(
                <tr>
        
                    <td>{exp.company}</td>
                    <td>{exp.title}</td>
                    <td>
                        02-03-2009 - 01-02-2018
                    </td>
                    <td>
                        <button class="btn btn-danger">
                        Delete
                        </button>
                    </td>
        
            </tr>
            );
                
            });

        console.log(tableContent, 'tableContent');

         return tableContent;
    }

    render() {
        const {profile} = this.props;
        const isExperience = isEmpty(profile.profile.experience);

        const table = (
                <div>
                    <h4 class="mb-2">Experience Credentials</h4>
                    <table class="table">
                    <thead>
                        <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th />
                        </tr>
                    </thead>
                    <tbody>

                    {this.createTable()}

                   

                    </tbody>
                    </table>
                </div>
        );

        return (
            <div>
                {isExperience ? table : <div class='mt-4 mb-5'><h4>No experience to show</h4><p class='mt-2'>Please create one by clicking 'Add Experience' tab.</p></div>}
            </div>

        );
    }

}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps)(ExperienceTab);
