import React from 'react';

import Navbar from '../Navbar'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Main page</h1>
            </div>

        );
    }
}

export {
    Main as default
};