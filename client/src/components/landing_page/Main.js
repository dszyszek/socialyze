import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Landing_page from './Landing_page';

import '../../styles/styles.scss';

class Main extends React.Component {
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

export default Main;
