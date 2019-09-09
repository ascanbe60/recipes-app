import styled from 'styled-components';

const Recipe = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  border: solid 1px rgba(0,0,0,.2);
  display: flex;
  flex-direction: column;
  h3, ul {
    margin-top: 0;
  }
  ul {
    padding-left: 0;
    list-style-type: none;
  }
  h4 {
    margin: 0 0 .3rem;
  }
`;

export default Recipe;
