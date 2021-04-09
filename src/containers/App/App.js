import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Advise from '../../Advise/Advise';

import classes from './App.module.css';
//import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';

import Footer from '../../components/Footer/Footer';
import Recipe from '../../components/Details/Recipe';

import Alert from '../../components/Alert';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = process.env.REACT_APP_EDAMAM_ID;
  const APP_KEY = process.env.REACT_APP_EDAMAM_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== '') {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert('No food with such name');
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery('');
      setAlert('');
    } else {
      setAlert('Please fill the form');
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const cardAdvise = <Advise />;

  return (
    <div className={classes.AppMain}>
    
      

      <form onSubmit={onSubmit} style={{ marginBottom: '2rem' }}>
        { alert !== '' && <Alert alert={ alert } /> }
         <div className={classes.SearchBarWrapper}>
  
        <div className={ classes.searchBox }>
        
        <input
          className={classes.searchBar}
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Recipe Here"
          />
            
        </div>

        </div>
        <button className="form-button">Search</button>
      </form>
 
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) =><Card> <Recipe key={uuidv4()} recipe={recipe} /></Card>)}
      </div>
         <Footer>
           { cardAdvise }
          </Footer>
    </div>
  );
}

export default App;
