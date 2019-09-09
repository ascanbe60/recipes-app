import React from 'react';
import Meta from './Meta';
import Header from './Header';
import styled from 'styled-components';

const Inner = styled.div`
  padding: 1rem;
`;

const Page = props => (
  <div>
    <Meta />
    <Header />
    <Inner>{props.children}</Inner>
  </div>
);

export default Page;
