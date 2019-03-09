import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { UserMenuComponent } from '../user-menu'
import { connect } from 'react-redux';
import authService from '../../services/auth.service';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    listItem: {
        textTransform: 'uppercase'

    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
}

class NavBarComponent extends Component {

    state = {
        isOpen: false
    }

    toggleDrawer = (open) => () => {
        this.setState({
            isOpen: open,
        });
    };

    render() {
        const { classes } = this.props;

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

        const menuItems = function (isMobile) {
            if (isMobile) {
                return (
                    <div className={classes.list}>
                        <List>
                            {links.map(link => <ListItem className={classes.listItem} button component={Link} to={link.path} key={link.id}><ListItemText >{link.displayName}</ListItemText></ListItem>)}
                        </List>
                    </div>
                )

            } else {
                return links.map(link => <Button className={classes.menuButton} variant="outlined" key={link.id} color="primary" component={Link} to={link.path}>{link.displayName}</Button>);
            }
        }


        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Hidden mdUp>
                            <div className={classes.grow}>
                                <IconButton className={classes.menuButton} onClick={this.toggleDrawer(true)} color="primary" aria-label="Menu">
                                    <MenuIcon />
                                </IconButton>
                                <Drawer open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        onClick={this.toggleDrawer(false)}
                                        onKeyDown={this.toggleDrawer(false)}
                                    >
                                        {menuItems(true)}
                                    </div>
                                </Drawer>
                            </div>
                        </Hidden>
                        <Hidden smDown>
                            <div className={classes.grow}>
                                {
                                    menuItems(false)
                                }
                            </div>
                        </Hidden>
                        {this.props.loggedIn ? <UserMenuComponent /> : <Button color="inherit" onClick={authService.signIn}>Login</Button>}
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


const withStylesComponent = withStyles(styles)(NavBarComponent);
const connectedNavBarComponent = connect(mapStateToProps)(withStylesComponent);
export { connectedNavBarComponent as NavBarComponent }; 