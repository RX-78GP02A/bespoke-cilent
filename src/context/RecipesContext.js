import React from 'react'

const RecipesContext = React.createContext({
  Recipes: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
  updateRecipe: () => {},
})

export default RecipesContext;