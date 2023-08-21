import React from 'react';
import PropTypes from 'prop-types';
import  './IsComponent.scss';
import data from '../data';
const IsComponent = () => {


 return(
  <section className="bootcamp">
   <img className='logo' src={data.education[4].image.src} alt={data.education[4].image.alt}></img>
       <div className='bootcamp__info'>
           <div className='absolute'>
               <p> {data.education[4].studie}</p> 
               <p> {data.education[4].level}</p> 
               <p> {data.education[4].university}</p> 
               <p> {data.education[4].year}</p> 
           </div>
        </div>
   </section>
 )


};

IsComponent.propTypes = {};

IsComponent.defaultProps = {};

export default IsComponent;
