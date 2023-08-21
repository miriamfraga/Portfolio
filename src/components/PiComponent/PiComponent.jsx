import React from 'react';
import PropTypes from 'prop-types';
import './PiComponent.scss';
import data from '../data';

const PiComponent = () => { 
  
 return  (  
 
 <section className="bootcamp">
      <img className='logo' src={data.education[1].image.src} alt={data.education[1].image.alt}></img>
          <div className='bootcamp__info'>
              <div className='absolute'>
                  <p> {data.education[1].studie}</p> 
                  <p> {data.education[1].level}</p> 
                  <p> {data.education[1].university}</p> 
                  <p> {data.education[1].year}</p> 
              </div>
              
       </div>
   </section>)

};

PiComponent.propTypes = {};

PiComponent.defaultProps = {};

export default PiComponent;
