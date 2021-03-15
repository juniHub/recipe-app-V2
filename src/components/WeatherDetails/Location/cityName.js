import React from 'react';

import classes from './Location.module.css';

const cityName = (props) => {
    return(
        <div className={classes.LocationWrapper}>
            {props.type}
        </div>
    );
}

export default cityName;