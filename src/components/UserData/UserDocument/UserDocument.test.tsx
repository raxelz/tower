import {shallow} from 'enzyme';
import * as React from 'react';
import { TableHeaderItemInterface } from '../index';
import { UserDocument, UserDocumentProps } from './index';

const defaults: UserDocumentProps = {
    user: {},
    page: 0,
    handleChangePage: jest.fn(),
    documentsRows: {} as TableHeaderItemInterface[],
};

describe('UserDocument component', () => {
    const setup = (props: Partial<UserDocumentProps> = {}) =>
        shallow(<UserDocument {...{...defaults, ...props}}/>);

    it('should render', () => {
        const wrapper = setup();
        expect(wrapper).toBeDefined();
    });
});
