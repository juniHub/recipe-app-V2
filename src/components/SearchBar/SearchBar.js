import React from 'react'

import classes from './SearchBar.module.css';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';

const searchBar = (props) => {
    return(
        <div className={classes.SearchBarWrapper}>
  
        <div className="search-box">
        
          <input
            type="text"
            className="search-bar"
            placeholder="Enter the city name"
            onChange={ props.onChangeHandler }
            value={props.value} 
            onKeyPress={ props.onClickHandler }
            error={props.error}
          />

        </div>
            
       

        </div>
    );
}

export default searchBar;