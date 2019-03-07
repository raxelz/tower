import {UserSummary, UserSummaryProps} from './index';
import {shallow} from 'enzyme';
import * as React from 'react';

const defaults: UserSummaryProps = {
    classes: {},
    user: {phones: [], profile: {country: 'US'}},
    handleChangeUserState: jest.fn(),
    handleChangeRole: jest.fn(),
    handleChangeUserOTP: jest.fn(),
    showMore: false,
    showMoreUserInfo: jest.fn(),
};

describe('UserSummary component', () => {
    const setup = (props: Partial<UserSummaryProps> = {}) =>
        shallow(<UserSummary {...{...defaults, ...props}}/>);

    it('should render', () => {
        const wrapper = setup();
        expect(wrapper).toBeDefined();
    });
});
