import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navbar_secondary from './Navbar_secondary';
import Navbar_logged_out from './Navbar_logged_out';
import Footer_main from './Footer_main';


class NotFound extends Component  {
    render() {
        return (
            <div class='main_wrapper'>
                {this.props.auth.auth ? <Navbar_secondary/> : <Navbar_logged_out />}
                <div class='container'>
                    
                    <div class='jumbotron pl-0 pr-0 text-center mt-5'>
                        <h1 style={{fontSize: '3em'}}>
                            404 NOT FOUND
                        </h1>
                        <p>
                            It seems like there is no such page :&#40;
                        </p>
                    </div>

                </div>
                <Footer_main/>
            </div>
        );
    }
};


const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps)(NotFound);