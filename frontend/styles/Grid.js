import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Grid;
