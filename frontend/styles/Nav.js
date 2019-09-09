import styled from 'styled-components';
import { darken } from 'polished';

const Nav = styled.nav`
  background-color: #fff;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  a {
    color: ${darken(.1, '#000')};
    font-weight: 700;
  }
`;

export default Nav;
