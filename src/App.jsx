import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import HeaderComponent from './components/Header/HeaderComponent';
import VideoBanner from './components/VideoBanner';
import CompanyServices from './components/CompanyServices';
import ScrollingText from './components/ScrollingText';
import OurWorks from './components/OurWorks';
import OurClients from './components/OurClients';
import ContactForm from './components/ContactForm';
import { ScrollTrigger } from 'gsap/all';

function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      {/* <HeaderComponent />
      <VideoBanner />
      <CompanyServices />
      <ScrollingText />
      <OurWorks />
      <OurClients /> */}
      <ContactForm />
    </>
  );
}

export default App;
