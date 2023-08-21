import React from 'react';
import PropTypes from 'prop-types';
import './VgComponent.scss';
import data from '../data';
const VgComponent = () => {

  return( 
        <section className="bootcamp">
        <img className='logo' src={data.education[2].image.src} alt={data.education[2].image.alt}></img>
       <div className='bootcamp__info'>
          <div className='absolute'>
              <p> {data.education[2].studie}</p> 
              <p> {data.education[2].level}</p> 
              <p> {data.education[2].university}</p> 
              <p> {data.education[2].year}</p> 
          </div>
         </div>
       </section>
  )


}
;

VgComponent.propTypes = {};

VgComponent.defaultProps = {};

export default VgComponent;
