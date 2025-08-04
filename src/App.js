import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Hero />
      <section id="skills"> 
        <Skills />
      </section>
      <section id="education"> 
        <Education />
      </section>
      <section id="projects">
      </section>
      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}

export default App;