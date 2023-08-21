import React from 'react';
import PropTypes from 'prop-types';
import './AboutComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Data from '../data';

const AboutComponent = () => { 
  return ( 
  <>
<div className='title'>
 <h1>skills</h1>
 </div>
 
  <section className="section__about">

    <div className="skills">
    
         {Data.skills.map((skill) =>(
         
                 <h4 className='skills__title'  style={{ '--hover-color': skill.color }}><FontAwesomeIcon icon={faCheck} /> {skill.sk}</h4>
         ) 
         )}
        
    </div>
    <div className='skills'>
      {Data.environment.map((env)=>(
    
      <h4 className='skills__title'><FontAwesomeIcon icon={faCheck} /> {env.env}</h4>
       ))}
    </div>
  </section>
  </>
  )
};

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
