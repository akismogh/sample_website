import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import VideoHighlight from './components/sections/VideoHighlight';
import Team from './components/sections/Team';
import Events from './components/sections/Events';
import Testimonials from './components/sections/Testimonials';
import News from './components/sections/News';
import Clients from './components/sections/Clients';
import CtaBanner from './components/sections/CtaBanner';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <VideoHighlight />
        <Team />
        <Events />
        <Testimonials />
        <News />
        <Clients />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;