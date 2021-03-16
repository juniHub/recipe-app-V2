import React from 'react';

import App from './containers/App/App';
import classes from './containers/App/App.module.css';
import Header from './components/Header/Header';

import styled from "@emotion/styled";
import { useTheme } from "./Theme/ThemeContext";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  overflow: auto;
 `;

const Main = () =>
{
    const themeState = useTheme();

    return (

      <Wrapper>
      <div className={classes.AppWrapper}>
    
          
        <header className={classes.Header}>
            
        <h1 className="">
            <img alt="weather-icon" src="https://img.icons8.com/clouds/100/000000/sun.png"/>
            </h1>
            
            <button className={ classes.themeBtn } onClick={() => themeState.toggle()}>
      
        {themeState.dark ?   
         <i class="fas fa-cloud-sun"></i>
        
        :  <i class="fas fa-cloud-moon"></i>}
        </button>
       
        </header>
    
      
       

          <App />

      </div>
      </Wrapper>
    )
}

export default Main