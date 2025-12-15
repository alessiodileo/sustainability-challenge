import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Supporters from './components/Supporters';
import Mission from './components/Mission';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Supporters />
        <Mission />
        <Process />
        <Benefits />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}