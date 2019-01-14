import React from 'react';
import {NavLink, BrowserRouter, Switch, Route} from 'react-router-dom';




import Main from '../components/landing_page/Main';
import LogIn from '../components/the_rest/LogIn';

import NotFound from '../components/the_rest/NotFound';

const AppRouter = () => (

    <BrowserRouter>
        <div className='main_wrapper'>
            <Switch>
                <Route path='/' component={Main} exact={true} />
                <Route path='/Login' component={LogIn} />

                <Route component={NotFound} />
            </Switch>
        </div>

    </BrowserRouter>
);


export {
    AppRouter as default
};
