import React from 'react';

import classes from './Location.module.css';

const countryName = (props) => {
    return(
        <div className={classes.LocationWrapper}>
            {props.type}
        </div>
    );
}

export default countryName;