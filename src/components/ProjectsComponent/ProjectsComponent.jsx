import React from 'react';
import PropTypes from 'prop-types';
import './ProjectsComponent.scss';
import { Link } from 'react-router-dom';
//IMPORT PROJECT
import Project from './Project';
//IMPORT HASHSCROLL
//IMPORT FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


const ProjectsComponent = () => { 

  return(
   
         <section id="projects" className="section__projects">
               <div className='section__projects__div__title'>
                   <h1 className='section__projects__div__h1'>Last Projects</h1>
               </div>
                      <div className='section__projects__div'>
                              
                              {Project.map((pr, index)=>
                                     <div  key={index} className='section__projects__div__wrapper'>

                                            <div className='section__projects__div__wrapper__video'> 
                                               <video width="100%" height="100%" controls>
                                                 <source src={pr.video} type='video/mp4'/>
                                               </video>
                                            </div>
                
                                           <div className='section__projects__div__wrapper__data'>
                                           
                                                 <h1>{pr.projectName}</h1> <h4>{pr.date}</h4> 
                                                        <div className='section__projects__div__wrapper__skills'>
                                                             {pr.skills && pr.skills.map((skill, index)=>
                                                                 <span key={index}>
                                                                     <img className='icons' src={skill.image} alt={skill.name}/> 
                                                                 </span>
                                                             )} 
                                                        </div>

                                                        {pr.url && pr.url.map((links)=>
                                                             <div key={links} className='section__projects__div__wrapper__url'> 
                                                               <Link className='link' to={links.vercel}><FontAwesomeIcon icon={faLink} /></Link>
                                                               <Link className='link' to={links.gitHub}><FontAwesomeIcon icon={faGithub} /></Link>
                                                                         <div className='section__projects__div__wrapper__button'>
                                                                             <button className='more'>+</button>
                                                                         </div>
                                                                  </div>
                                                             )}
                                             </div>
                                     </div>
                                 )}
                       
                       </div>
         </section>
          )
};

ProjectsComponent.propTypes = {};

ProjectsComponent.defaultProps = {};

export default ProjectsComponent;
