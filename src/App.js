import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Service from './components/services/Service';
import Sidebar from './components/sidebar/Sidebar';
import Pricing from './components/pricing/Pricing';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
