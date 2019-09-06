import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import Recipe from '../styles/Recipe';
import Grid from '../styles/Grid';
import Button from '../styles/Button';

const RECIPES_QUERY = gql`
  query RECIPES_QUERY {
    recipes {
      id
      title
      ingredients
      instructions
    }
  }
`;

const DELETE_RECIPE = gql`
  mutation DELETE_RECIPE($id: ID!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`;

const Details = styled.div`
  display: flex;
  > div {
    width: 50%;
  }
`;

const Recipes = () => {
  const { data, loading } = useQuery(RECIPES_QUERY);
  const [deleteRecipe] = useMutation(DELETE_RECIPE, { refetchQueries: [{query: RECIPES_QUERY}] });
  if (loading) return <p>Loading...</p>;
  return <Grid>
    {data.recipes.map(recipe => (
      <Recipe key={recipe.id}>
        <h3>{recipe.title}</h3>
        <Details>
          <div>
            <h4>Ingredients</h4> 
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Instructions</h4> 
            <ul>
              {recipe.instructions.map(instruction => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ul>
          </div>
        </Details>
        <div>
          <Button onClick={() => deleteRecipe({ variables: { id: recipe.id } })} className="delete">Delete</Button>
        </div>
      </Recipe>
    ))}
  </Grid>;
};

export default Recipes;
