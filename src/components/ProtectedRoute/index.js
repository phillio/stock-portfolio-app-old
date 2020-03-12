import React from 'react'
import authService from '../../services/authService'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard';

/**
 * Protected route using React Router
 * https://tylermcginnis.com/react-router-protected-routes-authentication/
 */
function ProtectedRoute ({ component: Dashboard, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authService.isAuthenticated() ? (
            <Dashboard {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }
  
  export default ProtectedRoute