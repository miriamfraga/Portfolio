import React from 'react';
import PropTypes from 'prop-types';
import './PsComponent.scss';
import data from '../data';
const PsComponent = () => {

return(
    <section className="bootcamp">
      <img className='logo' src={data.education[5].image.src} alt={data.education[1].image.alt}></img>
          <div className='bootcamp__info'>
              <div className='absolute'>
                  <p> {data.education[5].studie}</p> 
                  <p> {data.education[5].level}</p> 
                  <p> {data.education[5].university}</p> 
                  <p> {data.education[5].year}</p> 
              </div>
       </div>
   </section>)


};

PsComponent.propTypes = {};

PsComponent.defaultProps = {};

export default PsComponent;
