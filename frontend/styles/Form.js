import styled from 'styled-components';

const Form = styled.form`
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    input {
      padding: .5rem;
      border-radius: 5px;
      border: solid 1px rgba(0,0,0,.2);
      height: 22px;
    }
  }
  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export default Form;
