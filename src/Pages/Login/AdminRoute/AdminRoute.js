import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading} = UseAuth();
    if(isLoading){ return <CircularProgress></CircularProgress>}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;