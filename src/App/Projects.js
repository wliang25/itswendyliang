import React from 'react';
import Card from './card';
import jpn from './imgs/japan2024.png';

const Projects = () => {
  const jpTitle = <a href='https://wliang25.github.io/studio/'>Japan 2024</a>
  const jpDescrip =
  <>
    Earlier this year, I visited Japan for the first time with some friends, exploring the cities of Tokyo, Osaka, and Kyoto. 
    To capture this adventure, I developed an interactive map using Leaflet.js. 
    This personal project showcases the days we spent in each location, highlighting the landmarks and places we visited, 
    offering a detailed and immersive visualization of our travel experience.<br />
    <img src={jpn} alt='profile' />
  </>
  const tags = ['leaftlet.js', 'JS', 'HTML', 'CSS']

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <Card title={jpTitle} descrip={jpDescrip} tags={tags} />
    </div>
  );
}

export default Projects;