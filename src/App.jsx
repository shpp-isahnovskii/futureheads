import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import HeaderComponent from './components/Header/HeaderComponent';
import VideoBanner from './components/VideoBanner';
import CompanyServices from './components/CompanyServices';
import ScrollingText from './components/ScrollingText';
import OurWorks from './components/OurWorks';

function App() {
  gsap.registerPlugin(useGSAP);

  return (
    <>
      <HeaderComponent />
      <VideoBanner />
      <CompanyServices />
      <ScrollingText />
      <OurWorks />
    </>
  );
}

export default App;
