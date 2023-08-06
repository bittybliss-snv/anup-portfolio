import React from 'react'

import "../style/Skills.css"
import {FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress} from "react-icons/fa"

const Skills = () => {
  return (
    <div className='skills'>
        <div className='skills-container'>
          <div className='heading'>
              <h1>SKILLS</h1>
              <p>The Skillset I achieved in the timebeing</p>
          </div> 
          <div className='tech'>
        <   div className="html">
              <FaHtml5 size={50} style={{color: "#fff", marginRight: "2rem" }} />
              <p>HTML</p>
            </div>
            <div className="css">
              <FaCss3 size={50} style={{color: "#fff", marginRight: "2rem" }} />
              <p>CSS</p>
            </div>
            <div className="js">
              <FaJs size={50} style={{color: "#fff", marginRight: "2rem" }} />
              <p>JavaScript</p>
            </div>
            <div className="wordpress">
              <FaWordpress size={50} style={{color: "#fff", marginRight: "2rem" }} />
              <p>WordPress</p>
            </div>
            <div className="reactjs">
              <FaReact size={50} style={{color: "#fff", marginRight: "2rem" }} />
              <p>ReactJS</p>
            </div>
            <div className="nodejs">
              <FaNodeJs size={50} style={{color: "#fff", marginRight: "2rem" }} />
              <p>NodeJS</p>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default Skills