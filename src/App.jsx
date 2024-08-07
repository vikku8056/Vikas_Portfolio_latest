import './App.css'
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';   
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';

function App() {
  return( 
  <>
    <Hero />
    <Projects />
    <Skills/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
