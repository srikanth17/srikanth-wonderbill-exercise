import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PaymentForm from '../PaymentForm/PaymentForm';
import Header from '../Header/Header';
import Container from '../Container';
import Button from '../Button';
import theme from '../../theme';
import { editPayment, deleteAPayment } from '../../state/payments';

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

const DeleteButton = styled(Button)`
  background: ${theme.palette.red};
  margin-top: 0;
`;

const EditPayment = ({ match, history }) => {
  const dispatch = useDispatch();
  const payment = useSelector(store =>
    store.payments.find(payment => payment.id === match.params.id)
  );

  const handleSave = payment => {
    const data = {
      ...payment,
      id: match.params.id,
      startDate: moment(payment.startDate).format(),
    };
    dispatch(editPayment(data));
    history.push('/');
  };

  const handleDelete = () => {
    const data = {
      ...payment,
      id: match.params.id,
      startDate: moment(payment.startDate).format(),
    };
    dispatch(deleteAPayment(data));
    history.push('/');
  };

  return (
    <div>
      <Header heading="Edit A Bill" />
      <CustomContainer>
        <Heading>{payment.name}</Heading>
        <SubHeading>
          If you'd like to edit your bill you can change the details below
        </SubHeading>
        <PaymentForm payment={payment} onSubmit={handleSave} />
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </CustomContainer>
    </div>
  );
};

export default EditPayment;
