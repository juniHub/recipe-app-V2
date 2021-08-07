import React, { useState } from 'react';


import classes from './Recipe.module.css';

import RecipeDetails from './RecipeDetails/RecipeDetails';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, cuisineType, dishType, dietLabels,  image, url, ingredients } = recipe.recipe;

  return (
    <div className={classes.RecipeWrapper}>
      <div className="recipe">
        <h3 className="recipe-title">{ label }</h3>
        <h6 className="recipe-desc">{ cuisineType }</h6>
        <h6 className="recipe-desc">{ dishType }</h6>
      
        <h6 className="recipe-desc">{ dietLabels }</h6>
  
        <img className="recipe-img" src={image} alt={label} />
        <a
          className="recipe-website"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get full recipe here
        </a>
        <button className="recipe-button" onClick={() => setShow(!show)}>
          Ingredients
        </button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    </div>
  );
};

export default Recipe;