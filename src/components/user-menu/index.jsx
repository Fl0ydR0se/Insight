import React, {Component} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';

import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { userActions } from '../../actions';

class UserMenuComponent extends Component {
    state = {
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { user } = this.props;
        const open = Boolean(anchorEl);

        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography>{user.name}</Typography>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit">
                    <Avatar alt={user.name} src={user.picture} />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={(e) => {
                        this.handleClose();
                        this.props.dispatch(userActions.logout());
                    }}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        user
    };
}

const connectedUserMenuComponent = connect(mapStateToProps)(UserMenuComponent);
export { connectedUserMenuComponent as UserMenuComponent }; 