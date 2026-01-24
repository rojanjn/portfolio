import { Hero } from './components/Hero';
import { Projects } from './components/Projects'; // Change to default import
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
