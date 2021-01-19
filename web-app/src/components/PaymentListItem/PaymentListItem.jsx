import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import numeral from 'numeral';
import theme from '../../theme';

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid ${theme.palette.text.secondary};
  padding-bottom: 15px;
`;

const Name = styled.h3`
  word-break: break-all;
  color: ${theme.palette.text.primary};
  font-weight: normal;
  font-size: ${theme.spacing(6)};
`;

const NameAndFrequencyWrapper = styled.div`
  float: left;
  width: 50%;
  overflow: hidden;
  padding-left: 10px;
  span {
    color: ${theme.palette.text.secondary};
  }
`;

const AmountAndPaymentWrapper = styled.div`
  margin-left: 50%;
  overflow: hidden;
  padding-right: 10px;
  span {
    color: ${theme.palette.text.secondary};
    float: right;
    margin-left: 50px;
  }
`;

const Amount = styled.h3`
  word-break: break-all;
  float: right;
  color: ${theme.palette.text.primary};
  font-weight: normal;
  font-size: ${theme.spacing(6)};
`;

const PaymentListItem = ({ id, name, amount, startDate, frequency }) => {
  const nextpayment = () => {
    let newDate = '';
    if (frequency === 'Monthly') {
      newDate = moment(startDate).add(1, 'M');
    } else if (frequency === 'Weekly') {
      newDate = moment(startDate).add(1, 'w');
    } else if (frequency === 'Annual') {
      newDate = moment(startDate).add(1, 'y');
    }
    return moment(newDate).format('MMMM Do, YYYY');
  };

  return (
    <Wrapper>
      <CustomLink to={`/edit/${id}`}>
        <NameAndFrequencyWrapper>
          <Name>{name}</Name>
          <span>{frequency}</span>
        </NameAndFrequencyWrapper>
        <AmountAndPaymentWrapper>
          <Amount>{'£' + numeral(amount).format('0,0.00')}</Amount>
          <span>Next: {nextpayment()}</span>
        </AmountAndPaymentWrapper>
      </CustomLink>
    </Wrapper>
  );
};

export default PaymentListItem;
