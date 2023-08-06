import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Expcontent from '../components/Expcontent'

const Experiece = () => {
  return (
    <div>
        <Navbar/>
      <HeroImg2 heading="Experience" text="The experience I gathered over the years"/>
      <Expcontent/>
      <Footer/>
    </div>
  )
}

export default Experiece