import styled from 'styled-components';

const Button = styled.button`
  border: solid 1px;
  border-radius: 5px;
  background-color: transparent;
  padding: .3rem .6rem;
  margin-right: 1rem;
  cursor: pointer;
  &.delete {
    background-color: #f44336;
    border-color: #f44336;
    color: #fff;
  }
`;

export default Button;
