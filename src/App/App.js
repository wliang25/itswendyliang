import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import WendyLiang from './WendyLiang.js';
import Projects from './Projects.js';
import Resume from './Resume.js';

const App = () => {
  const [activeTab, setActiveTab] = useState('wendyliang');

  return (
    <div className='app'>
      <div className='tabs'>
        <div className={`tab ${activeTab === 'wendyliang' && 'active'}`} onClick={() => { setActiveTab('wendyliang')}}>wendyliang</div>
        <div className={`tab ${activeTab === 'projects' && 'active'}`} onClick={() => { setActiveTab('projects') }}>projects</div>
        <div className={`tab ${activeTab === 'resume' && 'active'}`} onClick={() => { setActiveTab('resume') }}>resume</div>
      </div>
      <div className='tabcontent'>
        {activeTab === 'wendyliang' && <WendyLiang />}
        {activeTab === 'projects' && <Projects />}       
        {activeTab === 'resume' && <Resume />}
      </div>      
      <footer className='footer'>
        <ul>
        <li><a href="mailto:wendyl.y.123@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          <li><a href="https://www.linkedin.com/in/wliang25/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="https://github.com/wliang25"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="./Wendy Liang Resume.pdf"><FontAwesomeIcon icon={faAddressCard} /></a></li>
          <li>&copy; 2024 Wendy Liang</li>
        </ul>
      </footer>
    </div>
  );
}
export default App;