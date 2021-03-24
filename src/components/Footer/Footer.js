import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => {
    return(
        <footer className={ classes.Footer }>
            <div className={classes.FooterHeading}>
                Daily Advise
              
            </div>
            
         
            <div className={ classes.Separator }>
                { props.children }

           
                <span>
                    <a href="https://icons8.com/icon/80731/cooking-book">Cooking Book icon by Icons8</a>
                 </span>

                             
            </div>

                  

           
           
            
        </footer>
    );
}

export default footer;