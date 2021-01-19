import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const HeaderWrapper = styled.header`
  background: ${theme.palette.blue};
`;

const Container = styled.div`
  padding: ${theme.spacing(4)} 0;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  font-weight: normal;
  font-size: ${theme.spacing(6)};
`;

const Header = ({ heading }) => (
  <HeaderWrapper>
    <Container>
      <Title>{heading}</Title>
    </Container>
  </HeaderWrapper>
);

export default Header;
