import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';

const Wrapper = styled.div`
  display: flex;
  input {
    flex-grow: 1;
  }
`;

const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    padding-right: 40px;
  }
`;

const FormList = (props) => {
  const { items, setIngredients, removeIngredient } = props;
  return (
    <label>
      Ingredients
      {items.length ? (
        <List>
          {items.map((ingredient, i) => (
            <li key={i} id={i}>{ingredient}<span onClick={(e) => {
              removeIngredient(e);
            }}>&#10005;</span></li>
          ))}
        </List>
      ) : null}
      <Wrapper>
        <input />
        <Button
          className="link"
          onClick={e => {
            e.preventDefault();
            const elem = document.getElementById('ingredients');
            setIngredients([...ingredients, elem.value]);
            elem.value = '';
          }}
        >
          Add
        </Button>
      </Wrapper>
    </label>
  );
};

export default FormList;
