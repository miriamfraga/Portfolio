import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProjectsComponent.scss';
import { Link } from 'react-router-dom';
import Project from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectsComponent = () => {
  const [projectStates, setProjectStates] = useState([]);
  const [hidden, setHidden] = useState([]);
  
  const changeVisibility = (index) => {
    const newHidden = [...hidden];
    newHidden[index] = !newHidden[index];
    setHidden(newHidden);
  };

  const toggleInfo = (index) => {
    const newProjectStates = [...projectStates];
    newProjectStates[index] = !newProjectStates[index];
    setProjectStates(newProjectStates);
    changeVisibility(index); // Cambia la visibilidad específica de este proyecto
  };

  return (
    <section id="projects" className="section__projects">
      <div className='section__projects__div__title'>
        <h1 className='section__projects__div__h1'>Last Projects</h1>
      </div>
      <div className='section__projects__div'>
        {Project.map((pr, index) => (
          <div key={index} className='section__projects__div__wrapper'>
            <div className='section__projects__div__wrapper__video'>
              <video width="100%" height="100%" controls>
                <source src={pr.video} type='video/mp4' />
              </video>
            </div>
            <div className={`section__projects__div__wrapper__data ${projectStates[index] ? 'hidden' : ''}`}>
              <h1>{pr.projectName}</h1> <h4>{pr.date}</h4>
              <div className='section__projects__div__wrapper__skills'>
                {pr.skills && pr.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    <img className='icons' src={skill.image} alt={skill.name} />
                  </span>
                ))}
              </div>
              {pr.url && pr.url.map((links) => (
                <div key={links} className='section__projects__div__wrapper__url'>
                  <Link className='link' to={links.vercel}><FontAwesomeIcon icon={faLink} /></Link>
                  <Link className='link' to={links.gitHub}><FontAwesomeIcon icon={faGithub} /></Link>
                </div>
              ))}
            </div>

            <div className='section__projects__div__wrapper__button'>
              <button className='more' onClick={() => toggleInfo(index)}>
                {projectStates[index] ? "-" : "+"}
              </button>
            </div>

             <div className={`div__description ${hidden[index] ? '' : 'hidden'}`}>
              <p className='description'>{pr.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

ProjectsComponent.propTypes = {};

ProjectsComponent.defaultProps = {};

export default ProjectsComponent;
