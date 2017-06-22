import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessSection} from '../../components/guess-section';

describe('<GuessSection />', () => {

	it('renders without crashing', () => {
		shallow(<GuessSection />);
	});

	it('should render feedback', () => {
		const feedback = 'test feedback';
		const wrapper = shallow(<GuessSection feedback={feedback} />);
		const section = wrapper.find('#feedback');
		expect(section.text()).toEqual(feedback);
		
		//from solution
		expect(wrapper.contains(feedback)).toEqual(true);

	})

});