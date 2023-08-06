import "../style/HeroImg.css"
import IntroImg from "../assets/reactjs.jpg"

import React from 'react'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I'm a Freelance</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/about" className="btn">About</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg