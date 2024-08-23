import React, { useState } from 'react';
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
      <footer className='footer'><p>&copy; 2024 Wendy Liang. All Rights Reserved.</p></footer>
    </div>
  );
}
export default App;