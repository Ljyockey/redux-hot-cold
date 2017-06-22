import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessList} from '../../components/guess-list';

describe('<GuessList />', () => {

	it('renders without crashing', () => {
		shallow(<GuessList guesses={[]} />);
	});

	it('renders list of guesses', () => {
		const guessList = [8, 16, 24, 32];
		const wrapper = shallow(<GuessList guesses={guessList}/>);
		const listElements = wrapper.find('li');
		expect(listElements.length).toEqual(guessList.length);
		guessList.forEach((value, index) => {
			expect(listElements.at(index).text()).toEqual(value.toString());
		});
	});

});