import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { UserMenuComponent } from '../user-menu'

import Auth from '../../Auth'

export class NavBarComponent extends React.Component {

    state = {
        isAuth: false,
        profile: null
    };

    componentDidMount() {
        if (Auth.isAuthenticated) {
            this.setState({
                isAuth: true,
                profile: Auth.profile
            })
        }
    }

    render() {
        const links = [
            {
                id: 1,
                displayName: 'Home',
                path: '/'
            },
            {
                id: 2,
                displayName: 'About',
                path: '/about'
            },
            {
                id: 2,
                displayName: 'features',
                path: '/features'
            },
            {
                id: 2,
                displayName: 'pricing',
                path: '/pricing'
            },
            {
                id: 2,
                displayName: 'contactus',
                path: '/contactus'
            }
        ];

        const styles = {
            root: {
                flexGrow: 1,
            },
            grow: {
                flexGrow: 1,
            },
            menuButton: {
                marginLeft: -12,
                marginRight: 20,
            },
        };


        return (
            <div style={styles.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <div style={styles.grow}>
                            {
                                links.map(link => <Button style={styles.menuButton} variant="outlined" key={link.id} color="primary" component={Link} to={link.path}>{link.displayName}</Button>)
                            }
                        </div>

                        {this.state.isAuth ? <UserMenuComponent onSignOut={Auth.signOut}/> : <Button color="inherit" onClick={Auth.signIn}>Login</Button>}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}