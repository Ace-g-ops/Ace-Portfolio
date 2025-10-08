import React from 'react'

import '../styles/Skills.css'

import { SiJavascript, SiHtml5, SiCss3,  SiNodedotjs, SiMongodb, SiLaravel, SiPhpmyadmin, SiPhp} from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="node">
          <SiNodedotjs />
          <p>Node JS</p>
        </div>
        <div className="mon">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
         <div className="laravel">
          <SiLaravel />
          <p>Laravel</p>
        </div>
        <div className="phpmyadmin">
          <SiPhpmyadmin />
          <p>Phpmyadmin</p>
        </div>
         <div className="php">
          <SiPhp />
          <p>Php</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;