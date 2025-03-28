import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  
  const gradient = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      "linear-gradient(135deg, #ffffff, #f5f5ff, rgb(254, 251, 201))",
      "linear-gradient(135deg, #f7f7fa, rgb(240, 240, 255), rgb(245, 244, 235))",
      "linear-gradient(135deg, #eaeafc, rgb(250, 250, 255),rgb(247, 243, 190))",
      "linear-gradient(135deg, #f0f0ff, #f8f8ff, rgb(254, 251, 201))"
    ]
  );
  
  

  return (
    <div className="App">
      <motion.div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: gradient,
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      <Header />
      <main className="container">
        <Intro />
        <Services />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
