import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
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
