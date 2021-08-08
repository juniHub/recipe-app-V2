import React, { useState } from 'react';


import classes from './Recipe.module.css';

import RecipeDetails from './RecipeDetails/RecipeDetails';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, cuisineType, dishType, dietLabels,  image, url, ingredients } = recipe.recipe;

  return (
    <div className={classes.RecipeWrapper}>
      <div className="recipe">
        <div className="heading-group">
        <h3 className="recipe-title">{ label }</h3>
        <h6 className="recipe-desc">{ cuisineType }</h6>
        <h6 className="recipe-desc">{ dishType }</h6>
        <h6 className="recipe-desc">{ dietLabels }</h6>
        </div>
  
          <img className="recipe-img" src={ image } alt={ label } />
    
        <div className="recipe-btn-group">
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
      { show && <RecipeDetails ingredients={ ingredients } /> }
      </div>
      </div>
    </div>
  );
};

export default Recipe;