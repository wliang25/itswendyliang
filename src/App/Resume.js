import React from 'react';
import Card from './card';

const Resume = () => {
  const edu =
  <>
  <h2>University of Washington</h2>
  <p><span className='date'>Seattle, WA 2015 to 2019</span><br />
  B.A. in Geography <br />
  Focus—Geographic Information Systems <br />
  Minors—Informatics & Philosophy
  </p>
  </>
  const skills =
  <>
    <h2>Programming</h2>
    <p>JavaScript, HTML, CSS/Sass/Scss, R, Java, SQL, Python, Markdown</p>
    <h2>Framework & Libraries</h2>
    <p>React, Node.js, Redux, Material-UI</p>
    <h2>Platforms & Technologies</h2>
    <p>MOS, Git, npm, AWS (S3), Webpack, ADO, JIRA, JFrog Artifactory, VSCode, 
      PyCharm, IntelliJ, Jupyter, Postman, Storybook, Micro-Service Architecture</p>
    <h2>Design & Prototype</h2>
    <p>Balsamiq, InVision, Marvel, LucidChart, Miro, Figma</p>
    <h2>Languages</h2>
    <p>English, Chinese (Cantonese, Mandarin)</p>
  </>
  const work =
  <>
    <h2>Software Engineer</h2>
    <p><span className='date'>CBRE - Sept. 2019 to July 2023</span><br />
    - Developed reusable React and Web components for internal
    design library to ensure consistent UI/UX across applications <br />
    - Played a key role in the development of SiteIQ Survey Creator,
    building frontend microservices with a separate design
    library, integrated third-party services like Google Analytics
    and Flatfile to streamline market data presentation <br />
    - Collaborated with product and design teams to continuously
    implement application improvements and new features <br />
    - Led migration of legacy Angular code to React for internal
    website to adhere to new company guidelines <br />
    - Led and organized internship program for summer 2020
    software engineer & design interns  
    </p>
    <h2>Software Engineer Intern</h2>
    <p><span className='date'>CBRE Build - June 2019 TO Aug. 2019</span><br />
    - Developed, maintained, enhanced, and tested client systems
    of low to moderate complexity <br />
    - Assisted with the development and maintenance of internal
    tools within an agile environment <br />
    </p>
    <h2>Informatics201 Teaching Assistant</h2>
    <p><span className='date'>UW iSchool - Sept. 2018 to June 2019</span><br />
    - Conducted lab sections for quarterly classes of 25 students <br />
    - Prepared and graded exercises, and homework assignments that covered topics 
    related to R, GitHub, Markdown and Data Visualization Basics <br />
    - Held regular office hours, tutored students, managed and responded to 
    course-related emails and Slack questions</p>
  </>;
  return (
    <div className='resume'>
      <div>
        <Card title='Education' descrip={edu}/>        
        <Card title='Skills' descrip={skills} />
      </div>
      <div>
        <Card title='Work Experience' descrip={work}/>
      </div>
    </div>
  );
}

export default Resume;