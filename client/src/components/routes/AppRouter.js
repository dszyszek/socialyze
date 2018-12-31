import React from 'react';
import {NavLink, BrowserRouter, Switch, Route} from 'react-router-dom';




import Main from './Main';
import NotFound from './NotFound';

const AppRouter = () => (

    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={Main} exact={true} />

                <Route component={NotFound} />
            </Switch>
        </div>

    </BrowserRouter>
);


export {
    AppRouter as default
};
