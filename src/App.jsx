import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Requerimiento 1: App.jsx muestra Navbar, Home y Footer */}
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
