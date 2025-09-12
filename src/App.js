import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Rewards from './components/Rewards';
import Registration from './components/Registration';
import Coordinators from './components/Coordinators';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Themes />
      <Rewards />
      <Registration />
      <Coordinators />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

