import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import AddPayment from './AddPayment';

const payments = [
  {
    name: 'Payment1',
    amount: '56',
    startDate: '2021-01-13T12:00:00+00:00',
    frequency: 'Monthly',
  },
];

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

let history, wrapper;

beforeEach(() => {
  history = { push: jest.fn() };
  wrapper = shallow(<AddPayment history={history} />);
});

test('should render AddPayment correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle form submit', () => {
  wrapper.find('PaymentForm').prop('onSubmit')(payments[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(mockDispatch).toHaveBeenLastCalledWith(expect.any(Function));
});
