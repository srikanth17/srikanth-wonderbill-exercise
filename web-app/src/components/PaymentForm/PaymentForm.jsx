import React, { useState } from 'react';
import styled from 'styled-components';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import Button from '../Button';
import theme from '../../theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & * {
    margin-bottom: 1.6rem;
  }
`;

const Input = styled.input`
  font-family: 'Hind';
  border: none;
  color: ${theme.palette.text.primary};
  background-color: transparent;
  border-bottom: 1px solid ${theme.palette.text.light};
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  margin: 0 0 ${theme.spacing(2)} 0;
  padding-top: 5px;
`;

const NumberInput = styled(Input)`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const SingleDatePickerWrapper = styled.div`
  font-family: 'Hind';
  border: none;
  color: ${theme.palette.text.light};
  background-color: transparent;
  border-bottom: 1px solid ${theme.palette.text.light};
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  margin: 0 0 ${theme.spacing(2)} 0;
  padding-top: 5px;
  .SingleDatePickerInput {
    border: none;
  }
  .DateInput {
    width: 100%;
  }
  .DateInput_input {
    padding: 11px 0 13px 0;
    border-bottom: 1px solid ${theme.palette.text.light};
  }
`;

const Frequency = styled.select`
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${theme.palette.text.primary};
  outline: none;
  height: 3rem;
  padding: 0;
  float: right;
  display: block;
  border-bottom: 1px solid ${theme.palette.text.light};
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const ErrorLabel = styled.p`
  color: red;
`;

const PaymentForm = ({ onSubmit, payment }) => {
  const [name, setName] = useState(payment ? payment.name : '');
  const [amount, setAmount] = useState(payment ? payment.amount : '');
  const [startDate, setStartDate] = useState(
    payment && moment(payment.startDate)
  );
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [frequency, setFrequency] = useState(payment ? payment.frequency : '');
  const [error, setError] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleAmountChange = e => {
    setAmount(e.target.value);
  };

  const handleDateChange = date => {
    if (date) setStartDate(date);
  };

  const handlecalendarFocused = ({ focused }) => {
    setCalendarFocused(focused);
  };

  const handleFrequencyChange = e => {
    setFrequency(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!startDate || !frequency) setError(true);
    else {
      onSubmit({
        name,
        amount,
        startDate,
        frequency,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorLabel>Please fill all fields</ErrorLabel>}
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <NumberInput
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
        required
      />
      <SingleDatePickerWrapper>
        <SingleDatePicker
          placeholder="Start date"
          date={startDate}
          onDateChange={handleDateChange}
          focused={calendarFocused}
          onFocusChange={handlecalendarFocused}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat="Do MMMM, YYYY"
          readOnly
        />
      </SingleDatePickerWrapper>
      <Frequency
        value={frequency}
        placeholder="Frequency"
        onChange={handleFrequencyChange}
      >
        <option defaultValue="Frequency" hidden>
          Frequency
        </option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Annual">Annual</option>
      </Frequency>
      <Button>{payment ? 'Save' : 'Add new payment'}</Button>
    </Form>
  );
};

export default PaymentForm;
