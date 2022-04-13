import homeReducer, { FETCH_COMPANIES } from '../redux/home/home';

describe('Testing  homeReducer ', () => {
  it('when the action is FETCH_COMPANIES, we have a new state equal to the details of the new company added from the payload', () => {
    // arrange
    const state = [{
      symbol: 'aapl',
      name: 'apple',
      price: 1,
    }];

    const action = { type: FETCH_COMPANIES, payload: state };

    // act
    const result = homeReducer([], action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('When we give wrong action in homeReducer ', () => {
  it('when the action is wrong, we return the same state with no changes', () => {
    // arrange
    const state = [{
      symbol: 'aapl',
      name: 'apple',
      price: 1,
    }];
    const WRONG_ACTION = 'WRONG_ACTION';
    const action = { type: WRONG_ACTION, payload: state };
    // act
    const result = homeReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
