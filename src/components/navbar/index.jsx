import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { UserMenuComponent } from '../user-menu'
import { connect } from 'react-redux';
import authService from '../../services/auth.service';

class NavBarComponent extends Component {

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
                id: 3,
                displayName: 'features',
                path: '/features'
            },
            {
                id: 4,
                displayName: 'pricing',
                path: '/pricing'
            },
            {
                id: 5,
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

                        {this.props.loggedIn ? <UserMenuComponent/> : <Button color="inherit" onClick={authService.signIn}>Login</Button>}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state;

    return {
        loggedIn
    };
}

const connectedNavBarComponent = connect(mapStateToProps,)(NavBarComponent);
export { connectedNavBarComponent as NavBarComponent }; 