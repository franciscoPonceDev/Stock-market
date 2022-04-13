import detailsReducer from '../redux/details/details';

describe('When we give wrong action in detailsReducer ', () => {
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
    const result = detailsReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
