import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Header from './components/header/Header'

const App = () => {
  return (
   <>
    <Header />
    <About />
    <Projects />
    {/* <Contact /> */}
   </>
  );
}

export default App;
