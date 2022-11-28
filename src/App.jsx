import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'

const App = () => {
  return (
   <>
    <Header />
    <About />
    <Experience />
    {/* <Contact /> */}
   </>
  );
}

export default App;
