import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import Form from '../styles/Form';
import Button from '../styles/Button';

const CREATE_RECIPE = gql`
  mutation CREATE_RECIPE(
    $title: String!
    $ingredients: [String!]!
    $instructions: [String!]!
  ) {
    createRecipe(
      title: $title
      ingredients: $ingredients
      instructions: $instructions
    ) {
      title
      ingredients
      instructions
    }
  }
`;

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

const Add = styled.span`
  text-decoration: underline;
  border: none;
  font-weight: 400;
  padding: .5rem 1rem;
`;

const CreateRecipe = () => {
  const [createRecipe] = useMutation(CREATE_RECIPE);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const handleChange = e => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };
  const removeIngredient = e => {
    const { id } = e.target.parentNode;
    ingredients.splice(id, 1);
    setIngredients([...ingredients]);
  };
  const removeInstruction = e => {
    const { id } = e.target.parentNode;
    instructions.splice(id, 1);
    setInstructions([...instructions]);
  };
  const clickAdd = e => {
    if (e.keyCode == 13) {
      e.preventDefault();
      e.target.nextSibling.click();
    }
  }
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          createRecipe({
            variables: {
              title,
              ingredients,
              instructions,
            },
          });
          window.location.href = '/';
        }}
      >
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="ingredients">
          Ingredients
          {ingredients.length ? (
            <List>
              {ingredients.map((ingredient, i) => (
                <li key={i} id={i}>
                  {ingredient}
                  <span
                    onClick={e => {
                      removeIngredient(e);
                    }}
                  >
                    &#10005;
                  </span>
                </li>
              ))}
            </List>
          ) : null}
          <Wrapper>
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              onKeyDown={clickAdd}
            />
            <Add
              onClick={e => {
                e.preventDefault();
                const elem = document.getElementById('ingredients');
                setIngredients([...ingredients, elem.value]);
                elem.value = '';
              }}
            >
              Add
            </Add>
          </Wrapper>
        </label>
        <label htmlFor="instructions">
          Instructions
          {instructions.length ? (
            <List>
              {instructions.map((instruction, i) => (
                <li key={i} id={i}>
                  {instruction}
                  <span
                    onClick={e => {
                      removeInstruction(e);
                    }}
                  >
                    &#10005;
                  </span>
                </li>
              ))}
            </List>
          ) : null}
          <Wrapper>
            <input
              type="text"
              name="instructions"
              id="instructions"
              onKeyDown={clickAdd}
            />
            <Add
              onClick={e => {
                e.preventDefault();
                const elem = document.getElementById('instructions');
                setInstructions([...instructions, elem.value]);
                elem.value = '';
              }}
            >
              Add
            </Add>
          </Wrapper>
        </label>
        <Button
          className="submit"
          type="submit"
          disabled={!title || ingredients.length < 1 || instructions.length < 1}
        >
          Add Recipe
        </Button>
      </Form>
    </div>
  );
};

export default CreateRecipe;
