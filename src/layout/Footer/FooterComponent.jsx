import React from 'react';
import './FooterComponent.scss';
import { Link } from 'react-router-dom';
const FooterComponent = () => {
  return (
    <footer className='footer'>
      <div className='footer__div'>
      <svg className='sign' heigth="210" width="400">
        <path d="M4.8,120.66c20.68-27.58,39.04-56.9,54.77-87.57c4.48-8.73,8.74-17.58,12.8-26.51c1.31-2.88-2.87-5.44-4.32-2.52
 c-4.74,9.51-8.36,19.56-10.66,29.93c-1.15,5.18-1.97,10.44-2.49,15.71c-0.49,4.94-0.92,10.08-0.52,15.04
 c0.57,7.17,4.73,16.88,13.7,14.11c4.37-1.35,8.24-5.03,11.54-8.07c3.47-3.2,6.64-6.73,9.56-10.44
 c6.86-8.71,12.44-18.3,17.93-27.91c-1.44-0.84-2.88-1.68-4.32-2.52c-5.3,11.95-6.16,25.45-2.11,37.92c0.57,1.75,2.82,2.5,4.18,1.1
 c7.03-7.24,12.49-15.69,16.32-25.01c-1.61-0.44-3.21-0.89-4.82-1.33c-2.43,6.97-1.62,14.7,2.05,21.09
 c0.82,1.43,2.77,1.6,3.93,0.51c3.89-3.67,7.06-8.03,9.3-12.89c-1.55-0.42-3.11-0.84-4.66-1.26c0.67,6.42,2.71,12.49,6.21,17.92
 c0.81,1.26,2.83,1.78,3.93,0.51c4.12-4.78,8.24-9.56,12.36-14.34c-1.42-0.59-2.85-1.18-4.27-1.77c0.35,2.67,0.71,5.34,1.06,8
 c0.18,1.37,1,2.46,2.5,2.5c6.06,0.16,11.59-4.03,13.09-9.9c-1.52,0.2-3.05,0.4-4.57,0.6c2.74,5.95,9.36,9.99,15.94,9.38
 c6.54-0.61,12.06-5.19,14.11-11.39c0.32-0.96-0.19-2.38-1.15-2.82c-6.34-2.91-12.75,6.19-7.7,11.12c2.51,2.45,6.34,1.93,8.88-0.14
 c2.76-2.25,3.77-5.8,2.23-9.03c-1.3-2.74-5.02-0.67-4.57,1.93c1.51,8.67,11.19,13.07,19.26,12.16
 c10.56-1.19,17.88-10.1,23.98-17.94c-1.31-1.01-2.62-2.02-3.93-3.03c-3.6,7.07,1.4,15.62,8.72,17.65c8.4,2.33,16.63-4,20.21-11.17
 c-1.55-0.42-3.11-0.84-4.66-1.26c0.26,3.23,0.52,6.46,0.78,9.69c0.12,1.44,1.06,2.37,2.5,2.5c5.26,0.46,10.56-2.62,12.71-7.46
 c-1.55-0.42-3.11-0.84-4.66-1.26c0.77,7.75,8.27,12,15.56,11.37c6.97-0.61,13.73-4.13,19.2-8.34
 c10.09-7.77,17.12-19.49,19.36-32.03c1.29-7.22,1.06-14.61-0.94-21.68c-0.66-2.31-4.23-2.45-4.82,0
 c-7.46,31.1-12.44,62.77-14.89,94.65c-0.19,2.44,3.59,3.45,4.66,1.26c9.27-18.91,18.54-37.83,27.81-56.74
 c-1.52-0.64-3.05-1.28-4.57-1.93c-3.29,10.12,0.55,21.88,8.91,28.38c4.92,3.83,10.98,5.24,17.09,5.75
 c7.27,0.6,14.63,0.45,21.92,0.59c8.71,0.17,17.43,0.34,26.14,0.51c3.22,0.06,3.22-4.94,0-5c-13.86-0.27-27.73-0.51-41.59-0.81
 c-5.84-0.13-12.09-0.29-17.41-3c-4.13-2.11-7.28-5.65-9.23-9.82c-2.24-4.78-2.63-10.25-1-15.26c0.86-2.66-3.31-4.49-4.57-1.93
 c-9.27,18.91-18.54,37.83-27.81,56.74c1.55,0.42,3.11,0.84,4.66,1.26c2.42-31.45,7.35-62.66,14.72-93.32c-1.61,0-3.21,0-4.82,0
 c5.92,20.85-5.51,45.16-25.54,53.67c-3.59,1.53-7.84,2.78-11.74,1.78c-2.85-0.73-5.77-2.98-6.08-6.1
 c-0.21-2.16-3.54-3.78-4.66-1.26c-1.51,3.39-4.68,5.31-8.39,4.98c0.83,0.83,1.67,1.67,2.5,2.5c-0.26-3.23-0.52-6.46-0.78-9.69
 c-0.18-2.26-3.46-3.67-4.66-1.26c-2.47,4.94-7.66,10-13.68,9.08c-4.43-0.67-8.89-6.05-6.61-10.5c1.21-2.37-2.09-5.39-3.93-3.03
 c-5.09,6.54-11.05,14.53-19.66,16.33c-6.12,1.28-14.04-1.61-15.21-8.35c-1.52,0.64-3.05,1.28-4.57,1.93
 c0.66,1.39-1.9,4.32-3.26,3.12c-0.88-0.78,0.51-3.78,1.64-3.27c-0.38-0.94-0.77-1.88-1.15-2.82c-1.38,4.18-5.38,7.48-9.83,7.76
 c-4.8,0.3-9.11-2.66-11.07-6.94c-0.92-2-4.07-1.36-4.57,0.6c-0.97,3.78-4.37,6.33-8.27,6.23c0.83,0.83,1.67,1.67,2.5,2.5
 c-0.35-2.67-0.71-5.34-1.06-8c-0.25-1.9-2.68-3.6-4.27-1.77c-4.12,4.78-8.24,9.56-12.36,14.34c1.31,0.17,2.62,0.34,3.93,0.51
 c-3-4.66-4.95-9.87-5.53-15.4c-0.23-2.17-3.5-3.77-4.66-1.26c-2.08,4.51-4.9,8.47-8.52,11.88c1.31,0.17,2.62,0.34,3.93,0.51
 c-3.05-5.3-3.55-11.48-1.54-17.24c1.08-3.1-3.63-4.23-4.82-1.33c-3.49,8.49-8.64,16.22-15.03,22.8c1.39,0.37,2.79,0.74,4.18,1.1
 c-3.61-11.11-3.14-23.35,1.61-34.06c1.27-2.87-2.68-5.39-4.32-2.52C94.24,44.86,85.34,60.55,71.41,71.2
 c-2.52,1.93-6.3,4.72-9.12,1.79c-2.07-2.15-2.73-5.63-2.93-8.49c-0.64-9.18,0.67-18.83,2.56-27.79
 c2.2-10.44,5.7-20.57,10.46-30.13c-1.44-0.84-2.88-1.68-4.32-2.52C53.81,35.44,36.92,65.63,17.58,94.17
 c-5.51,8.13-11.21,16.11-17.1,23.97C-1.45,120.71,2.89,123.21,4.8,120.66L4.8,120.66z"/>
        </svg>
        {/* <h1 className='footer__div__h1'>miriamfraga</h1>   */}
        <ul className='footer__div__ul' >
          <li className='footer__div__ul__li'><Link className='footer__div__ul__li' to="/">Home</Link></li>
          <li className='footer__div__ul__li'><Link className='footer__div__ul__li' to="/project">Projects</Link></li>
          <li className='footer__div__ul__li'><Link className='footer__div__ul__li' to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterComponent







