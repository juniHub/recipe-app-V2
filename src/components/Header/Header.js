import React from 'react';
import classes from './Header.module.css';



 

const header = ( props ) =>
{
    
    return (
       
        <header className={classes.Header}>
            
        <h1 className="">
            <img alt="weather-icon" src="https://img.icons8.com/clouds/100/000000/sun.png"/>
        </h1>
    
        </header>
            
    ); 
}

export default header;