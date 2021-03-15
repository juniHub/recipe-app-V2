import React from 'react';

import classes from './Temperature.module.css';


function convertToF(celsius) {
  return celsius * 9/5 + 32
}



const temperature = ( props ) =>
{
    const Fdegrees = convertToF( props.degrees );
    return(
        <div className={classes.TemperatureWrapper}>
            {Math.round( props.degrees ) }<span className={ classes.TemperatureSymbol }>°C</span>
             /{Math.round(Fdegrees)}<span className={classes.TemperatureSymbol}>°F</span>
        </div>
    );
}

export default temperature;