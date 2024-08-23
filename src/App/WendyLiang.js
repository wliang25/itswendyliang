import React from 'react';
import pfp from './imgs/profile.jpg'

const WendyLiang = () => {
  return (
    <div className='wendyliang'>
      <img src={pfp} alt='profile' />
      <div className='pftext'>
        <h1>Hi, I'm Wendy!</h1>
        <p>An alumni of the University of Washington that's excited to explore and experience the intersections of technology and everyday applications. 
          I majored in Geography with a focus on Geographic Information Systems (GIS) and double minored in Informatics and Philosophy.</p>  
        <p>After graduating from the University of Washington, I interned at CBRE as a Software Engineer Intern where I was offered a full time position
          after my internship. At CBRE I worked on developing reusable React and Web components for multiple internal design libraries to ensure consistent
          UI/UX across applications. I also played a key role in the development of SiteIQ Survey Creator, building frontend microservices with a separate design
          library, integrated third-party services like Google Analytics and Flatfile to streamline market data presentation. I have experiences working in an
          agile development environment and collaboration with product and design teams.
        </p>
        <p>To further my skillsets, I am currently looking into getting my Masters in Science
          from WGU with their Data Analytics - Data Engineering program.
        </p>
      </div>
    </div>
  );
}

export default WendyLiang;