import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore()

console.log(store.getState())

store.dispatch(addExpense({description: 'Water Bill', amount: 544400}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 6600, createdAt: 1542633}));
store.dispatch(addExpense({description: 'Rent', amount: 19500}));

store.dispatch(setTextFilter('WATER'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'))
},3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx,
    document.getElementById('app'));
