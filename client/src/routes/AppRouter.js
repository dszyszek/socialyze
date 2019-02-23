import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Main from '../components/landing_page/Main';
import LogIn from '../components/the_rest/LogIn';
import SignUp from '../components/the_rest/SignUp';
import Dashboard from '../components/the_rest/dashboard/Dashboard';
import AddEducation from '../components/the_rest/AddEducation'
import AddExperience from '../components/the_rest/AddExperience'
import Feed from '../components/the_rest/Feed'
import EditProfile from '../components/the_rest/EditProfile'
import Profile from '../components/the_rest/Profile'
import Profiles from '../components/the_rest/Profiles'
import Post from '../components/the_rest/Post'
import NotFound from '../components/the_rest/NotFound';

import store from '../store';

import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import {setCurrentUser, logoutUser} from '../actions/authActions';


if (localStorage.jwt_token) {
    setAuthToken(localStorage.jwt_token);

    const decoded = jwt_decode(localStorage.jwt_token);
    store.dispatch(setCurrentUser(decoded));

    // Check if token expired
    const current_time = Date.now()/1000;
    if (decoded.expiresIn < current_time) {
        store.dispatch(logoutUser);
        window.location.assign('/Login');
    }
}

const AppRouter = () => (

    <Provider store={store}>
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
                    <Route path='/Profile' component={Profile} />
                    <Route path='/Profiles' component={Profiles} />
                    <Route path='/Post' component={Post} />


                    <Route component={NotFound} />
                </Switch>
            </div>

         </BrowserRouter>
    </Provider>

);


export {
    AppRouter as default
};
