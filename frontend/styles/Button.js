import styled from 'styled-components';

const Button = styled.button`
  border: solid 1px;
  border-radius: 5px;
  background-color: transparent;
  padding: .5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  font-size: .9rem;
  font-weight: 700;
  &.delete {
    background-color: #f44336;
    border-color: #f44336;
    color: #fff;
  }
  &.submit {
    background-color: #2962FF;
    border-color: #2962FF;
    color: #fff;
    :disabled {
      color: rgba(255,255,255,.5);
    }
  }
`;

export default Button;
