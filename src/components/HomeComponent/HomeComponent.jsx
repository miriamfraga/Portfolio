import React from 'react';
import PropTypes from 'prop-types';

import './HomeComponent.scss';

const HomeComponent = () => { 

  return (
    <>
         <div className="div__home">
           <section className="div__home__main">
               <div className="container">
                 <p className="btn"><a href="/#contact" id="js-text">miriamfraga</a></p>
               </div>
           </section>
         </div>
    </>
         )
};

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
