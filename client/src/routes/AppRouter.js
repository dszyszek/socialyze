import React from 'react';
import {NavLink, BrowserRouter, Switch, Route} from 'react-router-dom';


import Main from '../components/landing_page/Main';
import LogIn from '../components/the_rest/LogIn';
import SignUp from '../components/the_rest/SignUp';
import Dashboard from '../components/the_rest/Dashboard';
import AddEducation from '../components/the_rest/AddEducation'
import AddExperience from '../components/the_rest/AddExperience'
import Feed from '../components/the_rest/Feed'
import EditProfile from '../components/the_rest/EditProfile'

import NotFound from '../components/the_rest/NotFound';

const AppRouter = () => (

    <BrowserRouter>
        <div className='main_wrapper'>
            <Switch>
                <Route path='/' component={Main} exact={true} />
                <Route path='/Login' component={LogIn} />
                <Route path='/SignUp' component={SignUp} />
                <Route path='/Dashboard' component={Dashboard} />
                <Route path='/AddEducation' component={AddEducation} />
                <Route path='/AddExperience' component={AddExperience} />
                <Route path='/Feed' component={Feed} />
                <Route path='/EditProfile' component={EditProfile} />

                <Route component={NotFound} />
            </Switch>
        </div>

    </BrowserRouter>
);


export {
    AppRouter as default
};
