import React from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import {updateExperienceArray} from '../../../actions/profileActions';
import {capitalize} from '../../common/capitalize'

class ExperienceTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            whichTable: this.props.whichTable,
            rowArray: this.props.rowArray
        }

        this.createTable = this.createTable.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    deleteRow(e) {
        const {profile} = this.props;
        let expToDeleteID;

        profile.profile[this.state.whichTable].forEach(exp => {
            if (exp._id === e.target.parentElement.parentElement.id) {
                expToDeleteID = exp._id;
            }
        });

        const newTab = profile.profile[this.state.whichTable].filter(exp => (exp._id !== e.target.parentElement.parentElement.id));
        
        this.props.updateExperienceArray(expToDeleteID, newTab, this.state.whichTable);
   
    }

    createTable() {
        const {profile} = this.props;
        const tableContent = [];

        profile.profile[this.state.whichTable].forEach(row => {
            tableContent.push(
                <tr id={row._id}>
        
                    <td>{row[this.state.rowArray[0]]}</td>
                    <td>{row[this.state.rowArray[1]]}</td>
                    <td>
                        {row.from.slice(0, 10)} - {row.current ? 'Now' : (row.to ? row.to.slice(0, 10) : '')}
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
        const isEducation = isEmpty(profile.profile.education);

        const table = (
                <div>
                    <h4 class="mb-2">{capitalize(this.state.whichTable)} Credentials</h4>
                    <table class="table">
                    <thead>
                        <tr>
                        <th>{capitalize(this.state.rowArray[0])}</th>
                        <th>{capitalize(this.state.rowArray[1])}</th>
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
                
                {this.state.whichTable === 'experience' ? (!isExperience ? table : <div class='mt-4 mb-5'><h4>No experience to show</h4><p class='mt-2'>You can change that by clicking on 'Add Experience' tab.</p></div>) : (!isEducation ? table : <div class='mt-4 mb-5'><h4>No education to show</h4><p class='mt-2'>You can change that by clicking on 'Add Education' tab.</p></div>)}
            
            </div>

        );
    }

}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {updateExperienceArray})(ExperienceTab);
