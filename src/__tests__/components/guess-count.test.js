import React from 'react';
import {mount, shallow} from 'enzyme';

import {GuessCount} from '../../components/guess-count';

describe('<GuessCount />', () => {

	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('renders guess count', () => {
		const value = 8;
		const wrapper = shallow(<GuessCount count={value}/>);
		expect(wrapper.text()).toEqual((`Guess #${value}!`));
	});

});