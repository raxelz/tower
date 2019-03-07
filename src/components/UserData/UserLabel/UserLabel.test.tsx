import {UserLabel, UserLabelProps} from './index';
import {shallow} from 'enzyme';
import * as React from 'react';

const defaults: UserLabelProps = {
    classes: {},
    user: {labels: []},
    newLabelName: '',
    newLabelValue: '',
    newLabelScope: '',
    addNewLabel: jest.fn(),
    editLabel: jest.fn(),
    deleteUserLabel: jest.fn(),
    changeLabelName: jest.fn(),
    changeLabelScope: jest.fn(),
    changeLabelValue: jest.fn(),
    isAddLabelModalOpened: false,
    isEditLabelModalOpened: false,
    openAddLabelModal: jest.fn(),
    openEditLabelModal: jest.fn(),
    closeModal: jest.fn(),
};

describe('UserLabel component', () => {
    const setup = (props: Partial<UserLabelProps> = {}) =>
        shallow(<UserLabel {...{...defaults, ...props}}/>);

    it('should render', () => {
        const wrapper = setup();
        expect(wrapper).toBeDefined();
    });
});
