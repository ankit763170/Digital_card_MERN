import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import SecondSection from './Components/Secondsection/SecondSection';
import OwlCarousel from './Components/OwlCarousel/OwlCarousel';
import Gallery from './Components/Gallery/Gallery';
import Form from './Components/Form/FormComponents';

function App() {
  return (
    <>
      <Navbar />
      <SecondSection />
      <OwlCarousel />
      <Gallery />
      <Form />
    </>
  );
}

export default App;
