import auth0 from 'auth0-js';
import { resolve } from 'path';

export default new class {
    constructor() {

        this.auth0 = new auth0.WebAuth({
            // the following three lines MUST be updated
            domain: 'floydrose.eu.auth0.com',
            audience: 'https://floydrose.eu.auth0.com/userinfo',
            clientID: 'g2YDROYjBOH8RX6Tku70WGootwuuWjIC',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'id_token',
            scope: 'openid profile',
            state: 'test'
        });
    }

    signIn = () => {
        this.auth0.authorize();
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {

                if (err) {
                    return reject(err);
                }

                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }

                localStorage.setItem('user', JSON.stringify(authResult.idTokenPayload));

                resolve(authResult.idTokenPayload);
            });
        })
    }

    getUserProfile() {
        let profile = localStorage.getItem('user');

        if (profile) {
            return JSON.parse(profile);
        }

        return null;
    }

    signOut() {
        return new Promise((resolve) => {
            localStorage.removeItem('user');
            resolve();
        });
    }
}