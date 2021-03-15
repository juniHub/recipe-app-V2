import React from 'react';

import classes from './WeatherDetails.module.css';
import Icon from '../../elements/Icon/Icon';
import CityName from './Location/cityName';
import CountryName from './Location/countryName';
import Temperature from './Temperature/Temperature';
import Description from './Description/Description';
import Date from './Date/Date';

const weatherDetails = (props) => {
    return(
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.main} />    
            </div>
            <div className={ classes.WeatherDataWrapper }>
                <CityName type={ props.data.cityName } />
                <CountryName type={ props.data.countryName }/>
                <Temperature degrees={props.data.temperature} />
                <Description type={props.data.description} />
                <Date />
            </div>
        </div>
    );
}

export default weatherDetails;