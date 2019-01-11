import React from 'react';
import {NavLink, BrowserRouter, Switch, Route} from 'react-router-dom';




import Main from '../components/Main';
import LogIn from '../components/LogIn';

import NotFound from '../components/NotFound';

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
