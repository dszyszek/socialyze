import React from 'react';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Footer from './Footer';
import Landing_page from './Landing_page';

import '../../styles/styles.scss';

class Main extends React.Component {
    componentDidMount() {
        if (this.props.auth.auth) {
            this.props.history.push('/Dashboard');
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, null)(Main);
