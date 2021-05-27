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
                    Cooking Book icon by <a href="https://icons8.com/icon/80731/cooking-book" target="_blank" rel="noopener noreferrer">Icons8</a>
                    <br/>
                    Made with React by <a href="https://hellojuninguyen.netlify.app/" target="_blank" rel="noopener noreferrer">Juni Nguyen</a> 2021
                 </span>

                             
            </div>

                  

           
           
            
        </footer>
    );
}

export default footer;