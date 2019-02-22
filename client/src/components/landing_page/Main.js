import React from 'react';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Footer from './Footer';
import Landing_page from './Landing_page';

import {logoutUser} from '../../actions/authActions';

import '../../styles/styles.scss';

class Main extends React.Component {
    componentWillMount() {
        if (localStorage.jwt_token) {
            this.props.logoutUser();
        }
    }

    render() {
        return (
            <div className='main_wrapper text-center'>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column main">
                    <Navbar />
                    <Landing_page />
                    <Footer />
                </div>
            </div>


        );
    }
}

export default connect(null, {logoutUser})(Main);
