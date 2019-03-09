import AuthService from '../services/auth.service'
import { userConstants } from '../constants/user.constants'
import { history } from '../helpers/history'

export const userActions = {
    login,
    logout
};

function login() {
    return dispatch => {

        AuthService.handleAuthentication().then((user) => {
            dispatch(success(user));
            history.push('/');
        }, error => {
            dispatch(failure(error && error.toString()));
        });
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        AuthService.signOut().then(() => {
            dispatch(success());
        })
    };

    function success() { return { type: userConstants.LOGOUT } }
}