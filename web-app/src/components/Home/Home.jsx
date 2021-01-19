import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';
import Container from '../Container';
import Button from '../Button';
import PaymentListItem from '../PaymentListItem/PaymentListItem';

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Home = () => {
  const payments = useSelector(store => store.payments);
  console.log(payments);
  return (
    <div>
      <Header heading="Regular Payments" />
      <Container>
        {payments.length > 0 &&
          payments.map(payment => (
            <PaymentListItem key={payment.id} {...payment} />
          ))}
        <CustomLink to="/add">
          <Button>Add a bill</Button>
        </CustomLink>
      </Container>
    </div>
  );
};

export default Home;
