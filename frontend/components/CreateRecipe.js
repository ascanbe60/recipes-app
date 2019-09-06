import React from 'react';
import { gql } from 'apollo-boost';

const CREATE_RECIPE = gql`
  mutation CREATE_RECIPE {
    createRecipe(
      
    ) {

    }
  }
`;

const CreateRecipe = () => {
  return <div></div>;
};

export default CreateRecipe;
