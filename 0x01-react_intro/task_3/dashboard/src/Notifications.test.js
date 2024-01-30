import React from  'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders list items', () => {
        const items = shallow(<Notifications />);
        expect(items.find('li')).toHaveLength(3);
    });

    it('renders the notifications text', () => {
        const text = 'Here is the list of notifications';
        const items = shallow(<Notifications />);
        expect(items.find('p').text()).toBe(text);
    })
})