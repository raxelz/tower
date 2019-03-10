import {shallow} from 'enzyme';
import * as React from 'react';
import {UserDataHeader, UserDataHeaderProps} from './index';

const defaults: UserDataHeaderProps = {
    classes: {},
};

describe('UserDataHeader component', () => {
    const setup = (props: Partial<UserDataHeaderProps> = {}) =>
        shallow(<UserDataHeader {...{...defaults, ...props}}/>);

    it('should render', () => {
        const wrapper = setup();
        expect(wrapper).toBeDefined();
    });
});
