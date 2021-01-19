import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Container from '../Container';
import Header from '../Header/Header';
import PaymentForm from '../PaymentForm/PaymentForm';
import { postPayment } from '../../state/payments';
import theme from '../../theme';

const CustomContainer = styled(Container)`
  max-width: 350px;
`;

const Heading = styled.h2`
  text-align: center;
  color: ${theme.palette.text.primary};
  font-weight: normal;
  font-size: ${theme.spacing(6)};
`;

const SubHeading = styled.p`
  text-align: center;
  color: ${theme.palette.text.secondary};
`;

const AddPayment = ({ history }) => {
  const dispatch = useDispatch();
  const handleSubmit = payment => {
    const data = {
      ...payment,
      startDate: moment(payment.startDate).format(),
    };
    dispatch(postPayment(data));
    history.push('/');
  };

  return (
    <div>
      <Header heading="Add A Bill" />
      <CustomContainer>
        <Heading>Enter your details</Heading>
        <SubHeading>
          Keep track of your household spending by adding our bills
        </SubHeading>
        <PaymentForm onSubmit={handleSubmit} />
      </CustomContainer>
    </div>
  );
};

export default AddPayment;
