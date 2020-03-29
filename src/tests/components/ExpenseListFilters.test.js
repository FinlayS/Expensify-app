import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from "../../components/ExpenseListFilters"
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment";

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
      setTextFilter={setTextFilter}
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
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
   expect(setTextFilter).toHaveBeenLastCalledWith(value)
});
//  (spies)
test ('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled()
});
//  (spies)
test ('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled()
});
//  (spies)
test ('should handle date changes', () => {
  const startDate = new moment(0).subtract(14, 'days').valueOf();
  wrapper.find('select').prop(setStartDate(startDate))
  expect(setStartDate).toHaveBeenCalled()
});
//  (assert state, simulate change on e.target)
test ('should handle date focus changes', () => {
  const endDate = new moment(0).add(14, 'days').valueOf();
  wrapper.find('select').prop(setEndDate(endDate))
  expect(setEndDate).toHaveBeenCalled()
});
