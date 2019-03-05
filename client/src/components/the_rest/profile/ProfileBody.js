import React from 'react';
import isEmpty from 'lodash/isEmpty';
import date from 'date-and-time';
import {capitalize} from '../../common/capitalize';

class ProfileBody extends React.Component {
    constructor() {
        super();

        this.fillList = this.fillList.bind(this);
        this.parseDate = this.parseDate.bind(this);
    }

    parseDate(dat) {
        return date.format(date.parse(dat.slice(1,10), 'YYYY-MM-DD'), 'MM.YYYY')
    }

    fillList() {
        const arrayOfElements = [];

        this.props.param.forEach(p => {

            arrayOfElements.push(
                <li class="list-group-item">
                        <h4>{capitalize(p.company)}</h4>
                        <p> {this.parseDate(p.from)} - {p.current ? 'Now' : (p.to ? this.parseDate(p.to) : '')}</p>
                        <p>
                        {p.title ? <span> <strong>Position:</strong> {p.title} </span> : ''}
                        </p>
                        {p.description ? 
                        <p>
                            <strong>Description:</strong> {p.description}
                        </p> : ''}
                </li>
            );
        });
        return arrayOfElements;
    }

    render() {
        return (
            <div class="col-md-6">
                <h3 class="text-center" style={{color: '#297c6c'}}>{capitalize(this.props.type)}</h3>
                

                <ul class="list-group">

                    {!isEmpty(this.props.param) && this.fillList()}

                </ul>
            </div>
        );
    }
    
};

export default ProfileBody;