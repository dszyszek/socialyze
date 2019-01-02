import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Landing_page from './Landing_page';

// import '../App.css';
import '../styles/styles.scss';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing_page />
                <Footer />
            </div>

        );
    }
}

export {
    Main as default
};