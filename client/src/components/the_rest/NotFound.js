import React from 'react';

import Navbar_secondary from './Navbar_secondary';
import Footer_main from './Footer_main';

const NotFound = () => {
    return (
        <div class='main_wrapper'>
            <Navbar_secondary/>
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
};

export {
    NotFound as default
};