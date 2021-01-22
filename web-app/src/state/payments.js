import { createSlice } from '@reduxjs/toolkit';
import {
  addPayment,
  getPayments,
  fetchUpdatePayment,
  fetchDeletePayment,
} from '../utils/utils';

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: [],
  reducers: {
    createPayment: (state, action) => {
      console.log(action.payload);
      if (!Array.isArray(action.payload)) return [...state, action.payload];
      else return action.payload.forEach(payment => state.push(payment));
    },
    updatePayment: (state, action) => {
      console.log(action.payload);
      return state.map(payment => {
        if (payment.id === action.payload.id) {
          return {
            ...action.payload,
          };
        } else {
          return payment;
        }
      });
    },
    deletePayment: (state, action) => {
      console.log(action.payload);
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

const { actions, reducer } = paymentsSlice;
export const { createPayment, updatePayment, deletePayment } = actions;
export default reducer;

export const postPayment = payment => async dispatch => {
  const response = await addPayment(payment);
  if (response.ok) {
    const data = await response.json();
    dispatch(createPayment(data));
  }
};

export const fetchPayments = () => async dispatch => {
  const response = await getPayments();
  if (response.ok) {
    const data = await response.json();
    dispatch(createPayment(data));
  }
};

export const editPayment = payment => async dispatch => {
  const response = await fetchUpdatePayment(payment);
  if (response.ok) {
    const data = await response.json();
    dispatch(updatePayment(data));
  }
};

export const deleteAPayment = payment => async dispatch => {
  const response = await fetchDeletePayment(payment.id);
  if (response.ok) {
    dispatch(deletePayment(payment.id));
  }
};
