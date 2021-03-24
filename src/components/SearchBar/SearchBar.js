import React from 'react'
import classes from './SearchBar.module.css';


const searchBar = (props) => {
    return(
        <div className={classes.SearchBarWrapper}>
  
        <div className={ classes.searchBox }>
        
          <input
            type="text"
            className={classes.searchBar}
            placeholder="Enter the recipe"
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