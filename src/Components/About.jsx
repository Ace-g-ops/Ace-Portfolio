import React from 'react'

import '../styles/About.css'

const About = () => {
  // const calculate_age = () => {
    
  //   var today = new Date();
  //   var birthDate = new Date("1994-10-16");
  //   var age_now = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age_now--;
  //   }
  //   return age_now;
  // }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        I like to create digital solution by crafting scalable and efficient products which focuses on, and enhances user experience through the use of various technolgies which sparks innovation and problem-solving across various industries.
        <br></br><br></br>
        Hey, I'm Victor! A Backend Developer with 3+ years of experience in web and software development. I specialize in building solid backend architectures that keep systems fast, secure and reliable. I've worked across various projects involving 
         API and authentication system integratons, real-time commmunication, and database management with tools like MongoDB, phpMyAdmin and MySQL. My workflow is all about structure, clarity and performance because every line of codes serves a purpose.
        <br></br><br></br>
        Alongside development, i'm also a creative writer, crafting engaging contents that blends clarity, storytelling and technical tech insights as well. I channel creativity not just into code but into contents as well, shaping thoughts,
        collaborating with other creatives and connecting ideas with people.
      </div>
    </div>
  )
}

export default About;

