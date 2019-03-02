import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import {updateExperienceArray} from '../../../actions/profileActions';


class ExperienceTab extends React.Component {
    constructor() {
        super();

        this.createTable = this.createTable.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    deleteRow(e) {
        const {profile} = this.props;
        let expToDeleteID;

        profile.profile.experience.forEach(exp => {
            if (exp._id === e.target.parentElement.parentElement.id) {
                expToDeleteID = exp._id;
            }
        });

        const newTab = profile.profile.experience.filter(exp => (exp._id !== e.target.parentElement.parentElement.id));
        
        this.props.updateExperienceArray(expToDeleteID, newTab);
   
    }

    createTable() {
        const {profile} = this.props;
        const tableContent = [];

        profile.profile.experience.forEach(exp => {
            tableContent.push(
                <tr id={exp._id}>
        
                    <td>{exp.company}</td>
                    <td>{exp.title}</td>
                    <td>
                        {exp.from.slice(0, 10)} - {exp.to ? exp.to.slice(0, 10) : ''}
                    </td>
                    <td>
                        <button class="btn btn-danger" onClick={this.deleteRow}>
                        Delete
                        </button>
                    </td>
        
            </tr>
            );
                
            });

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
                {!isExperience ? table : <div class='mt-4 mb-5'><h4>No experience to show</h4><p class='mt-2'>Please create one by clicking 'Add Experience' tab.</p></div>}
            </div>

        );
    }

}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {updateExperienceArray})(ExperienceTab);
