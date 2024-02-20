import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import Industry from './components/industry/industry';
import Others from './components/others/others';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="bg-black font-['Sora'] mx-auto">
      <Navbar />
      <Hero />
      <Projects />
      <Industry />
      <Others />
      <Contact />
    </div>
  );
}

export default App;
