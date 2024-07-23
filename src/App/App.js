import React, { useState } from 'react';
import './App.css';
import WendyLiang from './WendyLiang.js';

const App = () => {
  const [activeTab, setActiveTab] = useState('wendyliang');

  return (
    <div className='app'>
      <div className='tabs'>
        <div className={`tab ${activeTab === 'wendyliang' && 'active'}`} onClick={() => { setActiveTab('wendyliang')}}>wendyliang</div>
        <div className={`tab ${activeTab === 'resume' && 'active'}`} onClick={() => { setActiveTab('resume') }}>resume</div>
      </div>
      <div className='tabsection'>
        {activeTab === 'wendyliang' && <div className='tabcontent'><WendyLiang /></div>}
        {activeTab === 'resume' && <div className='tabcontent'>resume content</div>}
      </div>      
    </div>
  );
}
export default App;