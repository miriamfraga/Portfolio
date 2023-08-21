import React from 'react'
import NavigationComponent from '../../components/NavigationComponent/NavigationComponent';
import "./HeaderComponent.scss";
import { useState } from 'react';

const HeaderComponent = () => {
  

  return (
    <header className='header'>
      <NavigationComponent ></NavigationComponent>
    </header>
  )
}

export default HeaderComponent
