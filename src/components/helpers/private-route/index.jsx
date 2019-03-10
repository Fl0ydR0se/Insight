import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';



export default class PrivateRoute extends Component {
    render() {
        const { component: Component, loggedIn, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props => (
                    loggedIn
                        ? <Component {...props} />
                        : <Redirect to="/" />
                )}
            />
        )
    }
}

// const PrivateRoute = ({ component: Component, authed, ...rest }) => (
//     <Route
//         {...rest}
//         render={props => (
//             authed
//                 ? <Component {...props} />
//                 : <Redirect to="/login" />
//         )}
//     />
// );

// export default PrivateRoute;