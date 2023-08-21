import React from 'react';
import PropTypes from 'prop-types';
import './NavigationComponent.scss';
import laurea from "../../assets/laurea.png";
import greek from "../../assets/griego.png";
import contact from "../../assets/contact1.png";
import paper from "../../assets/papiro.png";
const NavigationComponent = () => { 
   
  return(
  <> 
  <nav className="nav">
   <ul className="nav__ul">
     <li className="nav__ul__li">
       <a className="nav__ul__li__a" href="/">Home<span ><img className="greek" src={greek} alt="greek column"></img></span></a>
       <a className="nav__ul__li__a" href="/#info">Info<span ><img className="laurea" src={paper} alt="paper"></img></span></a>
       <a className="nav__ul__li__a" href="/#contact">Contact<span ><img className="contacto" src={contact} alt="greek woman"></img></span></a>
       <a className="nav__ul__li__a" href="/#projects">Projects<span ><img className="laurea" src={laurea} alt="laurel wreath"></img></span></a>
     </li>
     </ul>
     </nav>
  </>)
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
