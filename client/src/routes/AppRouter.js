import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {connect} from 'react-redux';

import Main from '../components/landing_page/Main';
import LogIn from '../components/the_rest/LogIn';
import SignUp from '../components/the_rest/SignUp';
import Dashboard from '../components/the_rest/dashboard/Dashboard';
import AddEducation from '../components/the_rest/AddEducation'
import AddExperience from '../components/the_rest/AddExperience'
import Feed from '../components/the_rest/Feed'
import EditProfile from '../components/the_rest/EditProfile'
import Profile from '../components/the_rest/Profile'
import Profiles from '../components/the_rest/profiles/Profiles'
import Post from '../components/the_rest/Post'
import NotFound from '../components/the_rest/NotFound';

import store from '../store';

import setAuthToken from '../utils/setAuthToken';
import {setCurrentUser, logoutUser} from '../actions/authActions';
import {logoutProfile} from '../actions/profileActions';
import PrivateRoute from '../components/common/PrivateRoute';
import { SET_CURRENT_USER } from '../actions/types';
import { decode } from 'punycode';

if (localStorage.jwt_token) {
    const decoded = jwt_decode(localStorage.jwt_token);
    const current_time = Date.now()/1000;

    setAuthToken(localStorage.jwt_token);
    store.dispatch(setCurrentUser(decoded));

    if (decoded.exp < current_time) {

        store.dispatch(logoutUser());
        store.dispatch(logoutProfile());
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
                    <PrivateRoute path='/Dashboard' component={Dashboard} />
                    <PrivateRoute path='/AddEducation' component={AddEducation} />
                    <PrivateRoute path='/AddExperience' component={AddExperience} />
                    <PrivateRoute path='/Feed' component={Feed} />
                    <PrivateRoute path='/EditProfile' component={EditProfile} />
                    <PrivateRoute path='/Profile/:handle' component={Profile} />
                    <PrivateRoute path='/Profiles' component={Profiles} />
                    <PrivateRoute path='/Post' component={Post} />


                    <Route component={NotFound} />
                </Switch>
            </div>

         </BrowserRouter>
    </Provider>

);


export default AppRouter;
