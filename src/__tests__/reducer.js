import reducer from '../reducer';
import {newGame, makeGuess, toggleInfoModal} from '../actions';


describe('newGame reducer', () => {
	it('should return NEW_GAME state', () => {
		let state = {
			guesses: [2, 4, 6, 8],
			feedback: 'foo!',
			correctAnswer: 0,
			showInfoModal: true
		};
		state = reducer(state, newGame());
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
		expect(state.showInfoModal).toEqual(false);
	});
});

describe('makeGuess', () => {
	it('should change state of feedback and guesses', () => {
		let state = {
			guesses: [],
			feedback: '',
			correctAnswer: 80
		};

		state = reducer(state, makeGuess(8));
		expect(state.guesses).toEqual([8]);
		expect(state.feedback).toEqual('You\'re Ice Cold...');

		state = reducer(state, makeGuess(50));
		expect(state.guesses).toEqual([8, 50]);
		expect(state.feedback).toEqual('You\'re Cold...');

		state = reducer(state, makeGuess(90));
		expect(state.guesses).toEqual([8, 50, 90]);
		expect(state.feedback).toEqual('You\'re Warm');

		state = reducer(state, makeGuess(81));
		expect(state.guesses).toEqual([8, 50, 90, 81]);
		expect(state.feedback).toEqual('You\'re Hot!');

		state = reducer(state, makeGuess(80));
		expect(state.guesses).toEqual([8, 50, 90, 81, 80]);
		expect(state.feedback).toEqual('You got it!');		
	});
});

describe('toggleInfoModal', () => {
	it('should change the showInfoModal state', () => {
		let trueState = {showInfoModal: true};
		let falseState = {showInfoModal: false};

		trueState = reducer(trueState, toggleInfoModal());
		expect(trueState.showInfoModal).toEqual(false);

		falseState = reducer(falseState, toggleInfoModal());
		expect(falseState.showInfoModal).toEqual(true);
	});
});


//from solution - this is how initial state is 
//set on page load???
describe('initial reducer', () => {
	it('should set initial state when nothing is passed',() => {
		let state = reducer(undefined, 'INVALID');
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.showInfoModal).toEqual(false);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
	});
});

//also from solution
describe('invalid reducer', () => {
	it('should not change state with invalid reducer', () => {
		let state = {};
		const newState = reducer(state, 'INVALID');
		expect(newState).toEqual(state);
	});
});