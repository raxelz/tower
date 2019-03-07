import * as actions from '../actions';

describe('Auth actions', () => {
    it('should check logout action creator', () => {
        const expectedAction = { type: 'LOGOUT_FETCH' };
        expect(actions.logout()).toEqual(expectedAction);
    });

    it('should check logoutData action creator', () => {
        const expectedAction = { type: 'LOGOUT_DATA' };
        expect(actions.logoutData()).toEqual(expectedAction);
    });

    it('should check login action creator', () => {
        const payload = {
            email: 'john.barong@gmail.com',
            password: '123123',
        };
        const expectedAction = { type: 'LOGIN_FETCH', payload };
        expect(actions.login(payload)).toEqual(expectedAction);
    });

    it('should check signInRequire2FA action creator', () => {
        const payload = {
            email: 'admin@barong.io',
            uid: 'ID26C901376F',
            role: 'admin',
            level: 3,
            otp: false,
            state: 'active',
        };
        const expectedAction = { type: 'LOGIN_DATA', payload };
        expect(actions.loginData(payload)).toEqual(expectedAction);
    });
});
