import React from 'react'
import  Navbar from '../../Components/NavBar/NavBar';
import SecondSection from '../../Components/Secondsection/SecondSection';
import OwlCarousel from '../../Components/OwlCarousel/OwlCarousel';
import Gallery from '../../Components/Gallery/Gallery';
import Client from '../../Components/Clients/Client'
import  Explore from '../../Components/ExploreCards/Explore'
import Form from '../../Components/Form/FormComponents';
function Home() {
  return (
    <>
        
      
      <SecondSection />
      <OwlCarousel />
      <Gallery />
      <Explore />
      <Client/>
      <Form />
    
    </>
  )
}

export default Home
