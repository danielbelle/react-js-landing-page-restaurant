import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Work from './Components/Work.js';
import Testimonials from './Components/Testimonials.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
