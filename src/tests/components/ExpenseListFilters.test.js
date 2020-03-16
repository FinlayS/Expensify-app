import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from "../../components/ExpenseListFilters"
import {filters, altFilters} from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTetFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('should render expenseListFilters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilters with altFilters', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

//  (spies)
test ('should handle text change', () => {

});
//  (spies)
test ('should sort by date', () => {

});
//  (spies)
test ('should sort by amount', () => {

});
//  (spies)
test ('should handle date changes', () => {

});
//  (assert state, simulate change on e.target)
test ('should handle date focus changes', () => {

});
