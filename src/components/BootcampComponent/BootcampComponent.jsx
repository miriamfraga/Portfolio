import React from 'react';
import PropTypes from 'prop-types';
import './BootcampComponent.scss';
import data from '../data.js';
const BootcampComponent = () => {

return( 
  <section className="bootcamp">
  <img className='logo' src={data.education[0].image.src} alt={data.education[0].image.alt}></img>
      <div className='bootcamp__info'>
          <div className='absolute'>
              <p> {data.education[0].studie}</p> 
              <p> {data.education[0].level}</p> 
              <p> {data.education[0].university}</p> 
              <p> {data.education[0].year}</p> 
          </div>
       </div>
  </section>
)
};

BootcampComponent.propTypes = {};

BootcampComponent.defaultProps = {};

export default BootcampComponent;
