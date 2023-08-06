import React from 'react'
import HeroImg from '../components/HeroImg'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Home