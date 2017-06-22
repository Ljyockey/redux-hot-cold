import React from 'react';
import {mount, shallow} from 'enzyme';

import {InfoModal} from '../../components/info-modal';
import {toggleInfoModal} from '../../actions';

describe('<InfoModal >', () => {

	it('renders without crashing', () => {
		shallow(<InfoModal />);
	});

	it('should fire onClose on click', () => {
		const callback = jest.fn();
		const wrapper = mount(<InfoModal dispatch={callback} />);
		const close = wrapper.find('.close');
		close.simulate('click');
		expect(callback).toHaveBeenCalled();

		//from solution
		expect(callback.mock.calls[0][0]).toEqual(toggleInfoModal());
	});

});