import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...restOfProps}) => {
        console.log(restOfProps.isLoggedIn);

    return(
    <Route {...restOfProps} render={props => (restOfProps.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)} />
    )
}