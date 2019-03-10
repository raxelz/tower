import {mount} from 'enzyme';
import * as React from 'react';
import {
    TableHeaderItemInterface,
    UserData,
    UserDataProps,
} from './index';
import { UserDataFooter } from './UserDataFooter';
import { UserDataHeader } from './UserDataHeader';
import { UserDocument } from './UserDocument';
import { UserLabel } from './UserLabel';
import { UserSummary } from './UserSummary';

const defaults: UserDataProps = {
    addNewLabel: jest.fn(),
    editLabel: jest.fn(),
    changeLabelName: jest.fn(),
    changeLabelScope: jest.fn(),
    changeLabelValue: jest.fn(),
    closeModal: jest.fn(),
    deleteUserLabel: jest.fn(),
    handleChangeUserState: jest.fn(),
    handleChangeRole: jest.fn(),
    handleChangeUserOTP: jest.fn(),
    newLabelName: '',
    newLabelScope: '',
    newLabelValue: '',
    isAddLabelModalOpened: false,
    isEditLabelModalOpened: false,
    openAddLabelModal: jest.fn(),
    openEditLabelModal: jest.fn(),
    user: {labels: [], phones: [], profile: {country: 'US'}},
    page: 0,
    rowsPerPage: 0,
    handleChangePage: jest.fn(),
    documentsRows: [] as TableHeaderItemInterface[],
    showMore: false,
    showMoreUserInfo: jest.fn(),
};

describe('UserData component', () => {
    const setup = (props: Partial<UserDataProps> = {}) => {
        return mount(<UserData {...{...defaults, ...props}}/>);
    };

    it('should render', () => {
        const wrapper = setup();
        expect(wrapper).toBeDefined();
    });

    it('should render UserDataHeader', () => {
        const wrapper = setup();
        expect(wrapper.find(UserDataHeader)).toHaveLength(1);
    });

    it('should render UserSummary', () => {
        const wrapper = setup();
        expect(wrapper.find(UserSummary)).toHaveLength(1);
    });

    it('should render UserLabel', () => {
        const wrapper = setup();
        expect(wrapper.find(UserLabel)).toHaveLength(1);
    });

    it('should render UserDocument', () => {
        const wrapper = setup();
        expect(wrapper.find(UserDocument)).toHaveLength(1);
    });

    it('should render UserDataFooter', () => {
        const wrapper = setup();
        expect(wrapper.find(UserDataFooter)).toHaveLength(1);
    });
});
