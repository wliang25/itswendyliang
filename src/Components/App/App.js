import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('itswendyliang');

  return (
    <div className='app'>
      <div className='tabs'>
        <div className='tab' onClick={() => { setActiveTab('itswendyliang')}}>itswendyliang</div>
        <div className='tab' onClick={() => { setActiveTab('resume') }}>resume</div>
      </div>
      <div className='tabsection'>
        {activeTab === 'itswendyliang' && <div>itswendyliang content</div>}
        {activeTab === 'resume' && <div>resume content</div>}
      </div>      
    </div>
  );
}
export default App;