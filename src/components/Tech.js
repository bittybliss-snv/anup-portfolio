import React from 'react'
import "../style/Tech.css"

import {FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress} from "react-icons/fa"

const Tech = () => {
  return (
    <div className='tech'>
        <div className='tech-container'>
        <div className="html">
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
  )
}

export default Tech