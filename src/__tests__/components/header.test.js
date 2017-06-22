import React from 'react';
import {shallow} from 'enzyme';

import {Header} from '../../components/header';
import InfoModal from '../../components/info-modal';

describe('<Header />', () => {

	it('renders without crashing', () => {
		shallow(<Header />);
	});

	it('loads without InfoModal', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find(InfoModal).exists()).toEqual(false);
	});

	it('should render InfoModal if showInfoModal is true', () => {
		const wrapper = shallow(<Header showInfoModal={true}/>);
		expect(wrapper.find(InfoModal).exists()).toEqual(true);
	});

});