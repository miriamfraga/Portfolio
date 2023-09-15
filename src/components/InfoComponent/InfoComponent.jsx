import React, { useState, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Data from '../data';
import './InfoComponent.scss';

// Lazy-loaded components
const Bootcamp = lazy(() => import('../../pages/Bootcamp'));
const Vgender = lazy(() => import('../../pages/Vgender'));
const Equality = lazy(() => import('../../pages/Equality'));
const Intervention = lazy(() => import('../../pages/Intervention'));
const Psychology = lazy(() => import('../../pages/Psychology'));

const InfoComponent = () => {
  
  const [componentShowing, setComponentShowing] = useState('Bootcamp');
  const { education, image, aboutMe } = Data;

  const infoComponents = [
    {
      btn: 'Bootcamp',
      component: <Bootcamp education={education} />,
    },
    {
      btn: 'Equality',
      component: <Equality education={education} />,
    },
    {
      btn: 'Gender',
      component: <Vgender education={education} />,
    },
    {
      btn: 'Intervention',
      component: <Intervention education={education} />,
    },
    {
      btn: 'Psychology',
      component: <Psychology education={education} />,
    },
  ];

  const handleComponentChange = (btn) => {
    setComponentShowing(btn);
  };

  return (
    <section id="info" className="section__info">
            <div className="border">
                    <div className="div__image">
                      <img className="image" src={image.src} alt={image.alt} />
                    </div>
                   <div className="div__data">
                       <div className="div__relative">
                           <h2 className="title__education">HEY!</h2>
                       </div>

                       <div className="div__info">
                          <h3 className="about">{aboutMe}</h3>
                       </div>
                   </div>
            </div>
      <section className="studies">
        <div className="titles">
          {infoComponents.map(({ btn }) => (
            <button
              className="component"
              key={btn}
              onClick={() => handleComponentChange(btn)}
            >
              <p className="component__p">{btn}</p>
            </button>
          ))}
        </div>
        <section className="section__info__datax">
          <Suspense fallback={<div>Loading...</div>}>
           
            {infoComponents.map(({ btn, component }) =>
              btn === componentShowing ? (
                <React.Fragment key={btn}>
                  {component}
                </React.Fragment>
              ) : null
            )}
          </Suspense>
        </section>
      </section>
    </section>
  );
};

InfoComponent.propTypes = {};

InfoComponent.defaultProps = {};

export default InfoComponent;
